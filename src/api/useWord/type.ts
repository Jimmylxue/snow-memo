export type TSaveWordParams = {
  languageId: number
  word: string
  chineseMean: string
}

export type TWordItem = {
  wordId: number
  word: string
  chineseMean: string
  isMemory: 1 | 0
  notMemoryWrongCount: number
  hasMemoryWrongCount: number
  languageId: number
}

export type TUserWordList = {
  total: number
  result: TWordItem[]
  page: number
  typeId?: number
}
