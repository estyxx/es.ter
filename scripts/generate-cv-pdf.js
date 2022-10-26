const fs = require('fs')
const puppeteer = require('puppeteer')

;(async () => {
  const HTMLcontent = fs.readFileSync('.next/server/pages/resume.html', 'utf8')
  const CSSpath = '.next/static/css/'
  const CSSfiles = fs.readdirSync(CSSpath).filter((fn) => fn.endsWith('.css'))
  const CSScontent = fs.readFileSync(CSSpath + CSSfiles[0], 'utf8')

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
    ],
  })
  const page = await browser.newPage()
  await page.setContent(HTMLcontent, {
    waitUntil: ['networkidle0'],
  })
  await page.addStyleTag({ content: CSScontent })
  await page.evaluateHandle('document.fonts.ready')

  await page.pdf({
    path: 'public/cv.pdf',
    format: 'A4',
    scale: 0.67,
    margin: {
      top: '0mm',
      left: '0mm',
      right: '0mm',
      bottom: '0mm',
    },
  })
  await browser.close()
})()
