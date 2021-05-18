const translate = require('../index')
const config = require('../config.json')
const mockContent = '# Hello World'

describe('Text translate', () => {
  it('translate simple text', (done) => {
    const subscriptionKey = config.key || process.env.AZURE_TOKEN
    const region = config.region || process.env.AZURE_REGION
    translate({
      text: mockContent,
      from: 'en',
      to: 'zh',
      subscriptionKey,
      region,
    }).then((res) => {
      console.log(res)
      expect(/# [\u3000\u3400-\u4DBF\u4E00-\u9FFF]+/.test(res)).toBe(true)
      done()
    })
  })
})
