class NavigationBar {
    get 'DocsDropDown'() {
        return '.navbar__link[href="/docs/gettingstarted"]';
    }
    get 'SearchField'() {
        return '.DocSearch.DocSearch-Button';
    }
}

module.exports = {
    NavigationBar
};