var getDataLoadedFunction = function(page) {
    return function() {
        return true;
    }
};

var expectToBeOnHomepage = function(page) {
    var pageTitle;

    pageTitle = '@todo update with page title';

    expect(page.find('title')).toHaveText(pageTitle);
};

var clearLocalStorage = function() {
    if (localStorage) {
        localStorage.clear();
    }
};

var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

var resetJasmineTimeout = function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
};

var setJasmineTimeout = function(timeout) {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
};
