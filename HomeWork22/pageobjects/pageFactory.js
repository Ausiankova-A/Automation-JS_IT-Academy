const {
    NavigationBar
} = require('./pageComponents/navigationBar');
const {
    Docs
} = require('./Docs');
const {
    mainPage
} = require('./mainPage');
const {
    Footer
} = require('./pageComponents/Footer');
const {
    AllureReporter
} = require('./AllureReporter');
class PageFactory {
    static 'Navigation Bar' = new NavigationBar();
    static 'Docs' = new Docs();
    static 'Main Page' = new mainPage();
    static 'Footer' = new Footer();
    static 'Allure Reporter' = new AllureReporter();
}

module.exports = {
    PageFactory
};