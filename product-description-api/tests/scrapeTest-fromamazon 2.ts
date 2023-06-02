import puppeteer from 'puppeteer';

const scrapeAmazonSearchResults = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/s?k=headphones', {waitUntil: 'networkidle2'});

  const productLink = await page.$eval('.s-result-item .a-link-normal', (el: any) => el.href);

  console.log(productLink);

  await browser.close();
};

scrapeAmazonSearchResults().catch(console.error);
