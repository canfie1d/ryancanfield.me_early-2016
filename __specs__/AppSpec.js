var specHelper = require('../test-helpers/spec-helper');

describe('application', function() {
    var email, password;

    email    = 'user-' + Date.now() + '@syn0.com';
    password = 'synapse1';

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
            page.click('a[href="/register"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]').text()).toEqual('Register an account:');
                done();
            });
        });

        it('links to login page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]').text()).toEqual('Login:');
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

        it('loads the registration page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]').text()).toEqual('Register an account:');
                done();
            });
        });

        it('returns to the home page', function(done) {
            page.click('a[href="/"]');

            setTimeout(function() {
                specHelper.expectToBeOnHomepage(page);
                done();
            });
        });

        it('won\'t register without input', function(done) {
            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForElement('[data-reactid=".0.1.0.6"]', function() {
                expect(page.find('[data-reactid=".0.1.0.6"]').text()).toEqual('Registration Failed');
                done();
            }, 5000);
        });

        it('logs user in on success', function(done) {
            page.fillField('input[name="email"]', email);
            page.fillField('input[name="password"]', password);

            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForBodyChange(function() {
                expect(page.find('[data-reactid=".0.0.0.0"]').text()).toEqual('Logged in as ' + email + '.');
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
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]').text()).toEqual('Login:');
                done();
            });
        });

        it('returns to the home page', function(done) {
            page.click('a[href="/"]');

            setTimeout(function() {
                specHelper.expectToBeOnHomepage(page);
                done();
            });
        });

        it('logs in successfully', function(done) {
            page.fillField('input[name="email"]', email);
            page.fillField('input[name="password"]', password);

            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForBodyChange(function() {
                expect(page.find('[data-reactid=".0.0.0.0"]').text()).toEqual('Logged in as ' + email + '.');
                done();
            }, 5000);
        });
    });
});
