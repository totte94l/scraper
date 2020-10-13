const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://irmaab.se/');
  await page.setViewport({height: 1200, width: 1920});
  await page.screenshot({path: 'irma.png'});
  await browser.close();
})();