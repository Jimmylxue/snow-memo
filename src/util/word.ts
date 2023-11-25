/**
 * 检测一段文本是否为英语单词
 * @param word
 * @returns {boolean}
 */
export function isEnglishWord(word: string): boolean {
  return /^[a-zA-Z]+$/.test(word)
}

/**
 * 检测一段文本是否为英语句子
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
