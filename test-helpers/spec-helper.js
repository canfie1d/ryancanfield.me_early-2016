module.exports = {};

module.exports.getDataLoadedFunction = function(page) {
    return function() {
        // Wait for the first react element to render
        return page.find('div[data-reactid=".0"]').length;
    }
};

module.exports.expectToBeOnHomepage = function(page) {
    expect(page.find('title').text()).toEqual('@todo update with page title');
    expect(page.find('p[data-reactid=".0.0.0"]').text()).toEqual('Please log in or register.');
};

module.exports.clearLocalStorage = function() {
    if (localStorage) {
        localStorage.clear();
    }
};

module.exports.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

module.exports.resetJasmineTimeout = function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
};

module.exports.setJasmineTimeout = function(timeout) {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
};
