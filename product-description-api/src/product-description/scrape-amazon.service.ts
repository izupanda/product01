import puppeteer, { Page } from 'puppeteer';

const URL = "https://www.amazon.co.jp/";

export class ScrapeAmazonService {
  async getProductLink(page: Page, productLinkSelector: string): Promise<string> {
    await page.waitForSelector(productLinkSelector, { visible: true });
    return page.$eval(productLinkSelector, (link: HTMLAnchorElement) => link.href);
  }

  async getProductDescription(page: Page, descriptionSelector: string): Promise<string> {
    await page.waitForSelector(descriptionSelector, { visible: true });
    return page.$eval(descriptionSelector, (desc: HTMLElement) => desc.innerText);
  }

  async getProductPrice(page: Page, priceSelector: string): Promise<string> {
    await page.waitForSelector(priceSelector, { visible: true });
    return page.$eval(priceSelector, (price: HTMLElement) => price.innerText);
  }

  async scrapeAmazon(productName: string) {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50, // slow down by 50ms
      args: ['--window-size=1920,1080'],
    });

    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 0 }); // Setting timeout to 0

    // assuming there is a search bar
    await page.type('#twotabsearchtextbox', productName);
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 }), // Setting timeout to 0
      page.keyboard.press('Enter')
    ]);

    // assuming the first product is the most relevant
    const productLinkSelector = '.s-card-container .a-section a.a-link-normal';
    const productLink = await this.getProductLink(page, productLinkSelector);

    const productPage = await browser.newPage();
    await productPage.goto(productLink, { waitUntil: 'networkidle0', timeout: 0 }); // Setting timeout to 0

    const descriptionSelector = '#feature-bullets .a-list-item';
    const description = await this.getProductDescription(productPage, descriptionSelector);

    const priceSelector = '.a-offscreen';
    const price = await this.getProductPrice(productPage, priceSelector);

    await browser.close();

    return { description, price };
  }
}
