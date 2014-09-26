var getDataLoadedFunction = function(page) {
    return function() {
        // Wait for the first react element to render
        return page.find('div[data-reactid=".0"]').length;
    }
};

var expectToBeOnHomepage = function(page) {
    expect(page.find('title')).toHaveText('@todo update with page title');
    expect(page.find('p[data-reactid=".0.0.0"]')).toHaveText('Please log in or register.');
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
