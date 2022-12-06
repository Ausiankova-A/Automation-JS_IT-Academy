const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const {
    expect
} = require('chai')

Given(/^I navigate to the "(.*)" page$/, async (page) => {
    await browser.url(page),
        await browser.setWindowSize(1920, 1580)
});

When('I click on {locator} button', async function (selector) {
    await $(selector).click();
});

When('I scroll to the {locator}', async function (selector) {
    await $(selector).scrollIntoView();
});

When('I search by phrase {text}', async (phrase) => {
    await $('.DocSearch-Input').waitForClickable();
    await $('.DocSearch-Input').setValue(phrase);
    await $('.DocSearch-Input').waitForClickable();
    await browser.keys('Enter');
});

Then('I expect element {locator} should be equal {text}', async (selector, text) => {
    expect(await $(selector).getText()).to.equal(text);
})

Then('I expect url contains {text}', async (text) => {
    await browser.waitUntil(
        async () => (await browser.getUrl()), {
            timeout: 5000,
        })
    expect(await browser.getUrl()).to.contain(text);
})