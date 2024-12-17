const puppeteer = require("puppeteer");

const HTML_CONTENT = `insert HTML here`;
const WIDTH = 300;
const HEIGHT = 300;
const DESTINATION_PATH = "my-image.png";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(HTML_CONTENT);
  await page.setViewport({ width: WIDTH, height: HEIGHT });
  await page.screenshot({ path: DESTINATION_PATH, omitBackground: true });
  await browser.close();
};

main();
