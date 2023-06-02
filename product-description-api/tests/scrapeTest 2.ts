import { chromium } from 'playwright';

async function scrapeProductDescription() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = 'https://www.amazon.co.jp/dp/B07GZ8DZC8'; // テスト対象のURLを指定
  await page.goto(url);

  // HTMLエレメントのセレクターは該当ページによります。以下は例です。
  const descriptionItems = await page.$$eval('#feature-bullets .a-list-item', elements => elements.map(el => el.textContent));

  console.log(descriptionItems);

  await browser.close();
}

scrapeProductDescription();
