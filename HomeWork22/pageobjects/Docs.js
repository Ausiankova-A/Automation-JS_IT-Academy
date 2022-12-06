class Docs {
    get 'ReporterDropDown'() {
        return '//*[text()="Reporter"]';
    }
    get 'AllureReporterPage'() {
        return '//*[text()="Allure Reporter"]';
    }
}

module.exports = {
    Docs
};