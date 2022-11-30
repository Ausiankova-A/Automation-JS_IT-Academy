const {
  BasePage,
} = require('../BasePage');

class Footer extends BasePage {
  constructor() {
    super();
    this.GettingStartedPage = '.footer__link-item[href="/docs/gettingstarted"]';
  }
}

module.exports = {
  Footer,
};
