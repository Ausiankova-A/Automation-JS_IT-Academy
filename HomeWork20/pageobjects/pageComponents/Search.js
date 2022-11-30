const {
  BasePage,
} = require('../BasePage');

class Search extends BasePage {
  constructor() {
    super();

    this.SearchInput = '.DocSearch-Input';
  }

  async searchByPhrase(phrase) {
    await $(this.SearchInput).waitForClickable();
    await $(this.SearchInput).setValue(phrase);
    await $(this.SearchInput).waitForClickable();
    // await browser.pause(1000);
    await browser.keys('Enter');
  }
}

module.exports = {
  Search,
};
