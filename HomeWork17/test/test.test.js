const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const {
    expect
} = require('chai');

describe('tests for ChromeDriver website', function () {
    let driver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().setRect({
            width: 1900,
            height: 1500
        });
    })
    afterEach(async () => {
        await driver.close();
    });
    after(async () => {
        await driver.quit();
    });

    it('main title should be "ChromeDriver"', async () => {

        await driver.get('https://chromedriver.chromium.org/home');
        const titleChromeDriver = await driver.getTitle();
        expect(titleChromeDriver).to.equal('ChromeDriver - WebDriver for Chrome');
    })
    it('title should change from "ChromeDriver" to "Chrome Extensions" when switches on Chrome Extensions page', async () => {

        await driver.get('https://chromedriver.chromium.org/home');
        const ChromeExtensionsPage = await driver.findElement(By.css('.jgXgSe.HlqNPb[href="/extensions"]'));
        await driver.wait(until.elementIsVisible(ChromeExtensionsPage));
        await ChromeExtensionsPage.click();
        const titleChromeExtensions = await driver.getTitle();
        expect(titleChromeExtensions).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
    })
    it('the first link in the search results must contain the word "driver"', async () => {

        await driver.get('https://chromedriver.chromium.org/home');
        const searchBar = await driver.findElement(By.css('.Wdnjke.M9Bg4d .xjKiLb .Ce1Y1c'));
        await driver.wait(until.elementIsVisible(searchBar));
        await searchBar.click();
        const searchField = await driver.findElement(By.css('.zHQkBf'));
        await driver.wait(until.elementIsVisible(searchField));
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(1000);
        const firstLink = await driver.findElement(By.css('.lZsZxe .gtazFe:first-child a')).getAttribute("href");
        expect(firstLink).to.contain('driver');
    })
    it('url for page "Mobile Emulation" should contain "/mobile-emulation"', async () => {

        await driver.get('https://chromedriver.chromium.org/home');
        const moreDropDown = await driver.findElement(By.css('.VsJjtf.oXBWEc .jgXgSe.HlqNPb'));
        await driver.wait(until.elementIsVisible(moreDropDown));
        await moreDropDown.click();
        const mobileEmulationElement = await driver.findElement(By.xpath('//li[@class=\'ijMPi\']//div[@class=\'I35ICb\']//a[text()="Mobile Emulation"]'));
        await driver.wait(until.elementIsVisible(mobileEmulationElement));
        await mobileEmulationElement.click();
        const mobileEmulationUrl = await driver.getCurrentUrl(mobileEmulationElement);
        expect(mobileEmulationUrl).to.contain('/mobile-emulation')
    })

})