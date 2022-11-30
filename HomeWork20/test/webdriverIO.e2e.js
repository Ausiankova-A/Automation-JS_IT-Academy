const {
  expect,
} = require('chai');
const {
  NavigationBar,
} = require('../pageobjects/pageComponents/NavigationBar');
const {
  Docs,
} = require('../pageobjects/Docs');
const {
  AllureReporterPage,
} = require('../pageobjects/AllureReporterPage');
const I = require('../helpers/BaseElements');
const {
  MainPage,
} = require('../pageobjects/MainPage');
const {
  Footer,
} = require('../pageobjects/pageComponents/Footer');
const {
  Search,
} = require('../pageobjects/pageComponents/Search');

const navbar = new NavigationBar();
const docs = new Docs();
const allureReporterPage = new AllureReporterPage();
const mainpage = new MainPage();
const footer = new Footer();
const search = new Search();

describe('Tests for Webdriver IO', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1900, 1500);
    await mainpage.navigate('https://webdriver.io/');
  });
  afterEach(async () => {
    await browser.reloadSession();
  });

  it('"Allure Reporter" page have headline "Allure Reporter"', async () => {
    await I.click(navbar.DocsDropDown);
    await I.click(docs.ReporterDropDown);
    await I.click(docs.AllureReporterPage);
    expect(await I.getText(allureReporterPage.AllureReporterHeadline)).to.equal('Allure Reporter');
  });

  it('Open "Getting Started" page from the footer', async () => {
    await I.scrollIntoView(mainpage.Footer);
    await I.click(footer.GettingStartedPage);
    expect(await I.getUrl()).to.equal('https://webdriver.io/docs/gettingstarted');
  });
  it('the first link in the search results must contain the word "github"', async () => {
    await I.click(navbar.SearchField);
    await search.searchByPhrase('github');
    expect(await I.getUrl()).to.contain('github');
  });
});
