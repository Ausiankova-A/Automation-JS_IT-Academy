const {
  BasePage,
} = require('./BasePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.Footer = '.container.container-fluid';
  }
}

module.exports = {
  MainPage,
};
