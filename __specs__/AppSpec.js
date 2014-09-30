var specHelper = require('../test-helpers/spec-helper');

describe('application', function() {
    var actualText, expectedText, randomEmail, randomPassword;

    randomEmail    = 'user-' + Date.now() + '@example.com';
    randomPassword = Math.random().toString(36).substring(8);;

    beforeEach(function() {
        specHelper.clearLocalStorage();
    });

    describe('home page', function() {
        beforeEach(function(done) {
            page = visit('/');

            page.waitForReady(function() {
                page.waitFor(specHelper.getDataLoadedFunction(page), done);
            });
        });

        it('loads the home page', function() {
            specHelper.expectToBeOnHomepage(page);
        });

        it('links to registration page', function(done) {
            expectedText = 'Register an account:';

            page.click(specHelper.registrationLink);

            setTimeout(function() {
                actualText = page.find(specHelper.formLabel).text();

                expect(actualText).toEqual(expectedText);
                done();
            });
        });

        it('links to login page', function(done) {
            expectedText = 'Login:';

            page.click(specHelper.loginLink);

            setTimeout(function() {
                actualText = page.find(specHelper.formLabel).text();

                expect(actualText).toEqual(expectedText);
                done();
            });
        });
    });

    describe('registration', function() {
        beforeEach(function(done) {
            page = visit('/register');

            page.waitForReady(function() {
                page.waitFor(specHelper.getDataLoadedFunction(page), done);
            });
        });

        it('loads the registration page', function() {
            expectedText = 'Register an account:';
            actualText   = page.find(specHelper.formLabel).text();

            expect(actualText).toEqual(expectedText);
        });

        it('returns to the home page', function(done) {
            page.click(specHelper.homeLink);

            setTimeout(function() {
                specHelper.expectToBeOnHomepage(page);
                done();
            });
        });

        it('won\'t register without input', function(done) {
            expectedText = 'Registration Failed';

            page.click(specHelper.loginButton);

            page.waitForElement(specHelper.formErrorMessage, function() {
                actualText = page.find(specHelper.formErrorMessage).text();

                expect(actualText).toEqual(expectedText);
                done();
            }, 5000);
        });

        it('logs user in on success', function(done) {
            expectedText = 'Logged in as ' + randomEmail + '.';

            page.fillField(specHelper.emailField, randomEmail);
            page.fillField(specHelper.passwordField, randomPassword);

            page.click(specHelper.loginButton);

            page.waitForBodyChange(function() {
                actualText = page.find(specHelper.headerText).text();

                expect(actualText).toEqual(expectedText);
                done();
            }, 5000);
        });
    });

    describe('login page', function() {
        beforeEach(function(done) {
            page = visit('/login');

            page.waitForReady(function() {
                page.waitFor(specHelper.getDataLoadedFunction(page), done);
            });
        });

        it('loads the page', function(done) {
            expectedText = 'Login:';

            page.click(specHelper.loginLink);

            setTimeout(function() {
                actualText = page.find(specHelper.formLabel).text();

                expect(actualText).toEqual(expectedText);
                done();
            });
        });

        it('returns to the home page', function(done) {
            page.click(specHelper.homeLink);

            setTimeout(function() {
                specHelper.expectToBeOnHomepage(page);
                done();
            });
        });

        it('logs in successfully', function(done) {
            expectedText = 'Logged in as ' + randomEmail + '.';

            page.fillField(specHelper.emailField, randomEmail);
            page.fillField(specHelper.passwordField, randomPassword);

            page.click(specHelper.loginButton);

            page.waitForBodyChange(function() {
                actualText = page.find(specHelper.headerText).text();

                expect(actualText).toEqual(expectedText);
                done();
            }, 5000);
        });
    });
});
