const {
  BasePage,
} = require('../BasePage');

class NavigationBar extends BasePage {
  constructor() {
    super();
    this.DocsDropDown = '.navbar__link[href="/docs/gettingstarted"]';
    this.SearchField = '.DocSearch.DocSearch-Button';
  }
}

module.exports = {
  NavigationBar,
};
