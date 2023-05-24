import {describe, expect, test } from '@jest/globals';
import { azureTranslate } from '../src/index.js';
const mockContent = '# Hello World'

describe('Text translate', () => {
  test('translate simple text', (done) => {
    const subscriptionKey = process.env.AZURE_TOKEN!
    const subscriptionRegion = process.env.AZURE_REGION!
    azureTranslate(mockContent, {
      from: 'en',
      to: 'zh',
      subscriptionKey,
      subscriptionRegion,
    }).then((res) => {
      expect(/# [\u3000\u3400-\u4DBF\u4E00-\u9FFF]+/.test(String(res.value))).toBe(true)
      done()
    })
  })
})