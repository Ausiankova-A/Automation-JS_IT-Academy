const {
  BasePage,
} = require('./BasePage');

class AllureReporterPage extends BasePage {
  constructor() {
    super();
    this.AllureReporterHeadline = '.theme-doc-markdown.markdown header h1';
  }
}

module.exports = {
  AllureReporterPage,
};
