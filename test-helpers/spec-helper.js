var specHelper = {};

specHelper.emailField       = 'input[name="email"]';
specHelper.formErrorMessage = 'p[data-reactid=".0.1.0.6"]';
specHelper.formLabel        = 'p[data-reactid=".0.1.0.0"]';
specHelper.headerText       = 'p[data-reactid=".0.0.0.0"]';
specHelper.homeLink         = 'a[href="/"]';
specHelper.loginButton      = 'input[value="Log in"]';
specHelper.loginLink        = 'a[href="/login"]';
specHelper.passwordField    = 'input[name="password"]';
specHelper.registrationLink = 'a[href="/register"]';

specHelper.getDataLoadedFunction = function(page) {
    return function() {
        var reactElement = 'div[data-reactid=".0"]';

        // Wait for the first react element to render
        return page.find(reactElement).length;
    }
};

specHelper.expectToBeOnHomepage = function(page) {
    var actualText, actualTitle, expectedText, expectedTitle, headerSelector;

    headerSelector = 'p[data-reactid=".0.0.0"]';
    expectedText   = 'Please log in or register.';
    expectedTitle  = '@todo update with page title';
    actualText     = page.find(headerSelector).text();
    actualTitle    = page.find('title').text();

    expect(actualTitle).toEqual(expectedTitle);
    expect(actualText).toEqual(expectedText);
};

specHelper.clearLocalStorage = function() {
    if (localStorage) {
        localStorage.clear();
    }
};

specHelper.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

specHelper.resetJasmineTimeout = function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
};

specHelper.setJasmineTimeout = function(timeout) {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
};

module.exports = specHelper;
