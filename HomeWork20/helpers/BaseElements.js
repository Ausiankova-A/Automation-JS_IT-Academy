class BaseElements {
  async click(element) {
    await $(element).waitForClickable();
    await $(element).click();
  }

  async getText(element) {
    await $(element).waitForClickable();
    const el = await $(element).getText();
    return el;
  }

  async scrollIntoView(element) {
    await $(element).scrollIntoView();
  }

  async getUrl() {
    const el = await browser.getUrl();
    return el;
  }
}

module.exports = new BaseElements();
