import type { TShortEn } from "~api"

/**
 * 检测一段文本是否为英语单词
 * @param word
 * @returns {boolean}
 */
export function isEnglishWord(word: string): boolean {
  return /^[a-zA-Z]+$/.test(word)
}

/**
 * 检测一段文本是否为纯英语句子
 * @param word
 * @returns {boolean}
 */
export function isEnglishSentence(word: string): boolean {
  // 去除首尾空格
  word = word.trim()

  // 判断是否包含中文
  if (/[\u4e00-\u9fa5]/.test(word)) {
    return false
  }

  // 判断是否只有单个单词
  if (!/\s/.test(word)) {
    return false
  }

  // 判断是否为英文句子
  // 判断是否为英文句子
  const sentenceRegex = /^[a-zA-Z][^.?!]*$/
  return sentenceRegex.test(word)
}

/**
 * 获取字符中 中文 字符量
 * @param word
 * @returns {number}
 */
export function getChineseWordCount(words: string) {
  const pattern = /[\u4e00-\u9fa5]/g
  const matches = words.match(pattern)
  return matches ? matches.length : 0
}

/**
 * 获取字符中 英文 单词量
 * @param words
 * @returns {number}
 */
export function countEnglishWords(words: string) {
  // 使用正则表达式匹配英文单词
  const pattern = /\b[a-zA-Z]+\b/g
  const matches = words.match(pattern)
  return matches ? matches.length : 0
}

/**
 * 根据 文本中 中文&单词数量 来决定 英译汉 还是 汉译英
 * @param str
 */
export function getTranslateDirectionByEnglishAndChinese(str: string): {
  from: TShortEn
  to: TShortEn
  q: string
} {
  const chineseCount = getChineseWordCount(str)
  const englishCount = countEnglishWords(str)
  if (englishCount >= chineseCount) {
    return {
      q: str,
      from: "en",
      to: "zh"
    }
  }
  return {
    q: str,
    from: "zh",
    to: "en"
  }
}
