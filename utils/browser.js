import puppeteer from 'puppeteer';

export let browser;

export const openBrowser = async() => {
    try {
        browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        return browser;
    } catch (error) {
        console.log(error);
    }
}

export const closeBrowser = async() => {
    try {
        await browser.close();
    } catch (error) {
        console.log(error);
    }
}