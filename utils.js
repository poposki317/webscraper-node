const puppeteer = require('puppeteer');

const searchPage = async (selector, url) => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);

    let elements = await page.$$eval(selector, (nodes) => nodes.map(node => node.textContent));

    await browser.close()
    return elements;
}

module.exports = {
    searchPage
}