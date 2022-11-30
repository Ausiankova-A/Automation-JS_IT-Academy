const {
  BasePage,
} = require('./BasePage');

class Docs extends BasePage {
  constructor() {
    super();
    this.ReporterDropDown = '//*[text()="Reporter"]';
    this.AllureReporterPage = '//*[text()="Allure Reporter"]';
  }
}

module.exports = {
  Docs,
};
