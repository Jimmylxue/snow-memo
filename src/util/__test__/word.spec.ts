import { isEnglishSentence, isEnglishWord } from "~util/word"

describe(">>> isEnglishWord", () => {
  it("function will be return true when it call with 'hello'", () => {
    expect(isEnglishWord("hello")).toBeTruthy()
  })

  it("function will be return false when it call with 'hello world'", () => {
    expect(isEnglishWord("hello world")).toBeFalsy()
  })

  it("function will be return false when it call with '你好", () => {
    expect(isEnglishWord("你好")).toBeFalsy()
  })
})

describe(">>> isEnglishSentence", () => {
  it("function will be return true when it call with 'hello world'", () => {
    expect(isEnglishSentence("What your name")).toBeTruthy()
  })

  it("function will be return false when it call with 'hello'", () => {
    expect(isEnglishSentence("hello")).toBeFalsy()
  })

  it("function will be return false when it call with '你好'", () => {
    expect(isEnglishSentence("你好")).toBeFalsy()
  })

  it("function will be return false when it call with '你好 世界'", () => {
    expect(isEnglishSentence("你好 世界")).toBeFalsy()
  })
})
