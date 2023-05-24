import {describe, expect, test } from '@jest/globals';
import { chatgptTranslate } from '../src/index.js';
const mockContent = '# Hello World'

describe('Text translate', () => {
  test('translate simple text', (done) => {
    const apiKey = process.env.OPENAI_KEY!
    chatgptTranslate(mockContent, {
      to: 'zh',
      apiKey,
    }).then((res) => {
      expect(/# [\u3000\u3400-\u4DBF\u4E00-\u9FFF]+/.test(res)).toBe(true)
      done()
    })
  })
})