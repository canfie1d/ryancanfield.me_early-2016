describe('application', function() {
    var email, password;

    beforeEach(function() {
        clearLocalStorage();
    });

    describe('home page', function() {
        beforeEach(function(done) {
            page = visit('/');

            page.ready(function() {
                page.waitFor(getDataLoadedFunction(page), done);
            });
        });

        it('loads the home page', function() {
            expectToBeOnHomepage(page);
        });

        it('links to registration page', function(done) {
            page.click('a[href="/register"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Register an account:');
                done();
            });
        });

        it('links to login page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Login:');
                done();
            });
        });
    });

    email    = 'user-' + Date.now() + '@syn0.com';
    password = 'synapse1';

    describe('registration', function() {
        beforeEach(function(done) {
            page = visit('/register');

            page.ready(function() {
                page.waitFor(getDataLoadedFunction(page), done);
            });
        });

        it('loads the registration page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Register an account:');
                done();
            });
        });

        it('returns to the home page', function(done) {
            page.click('a[href="/"]');

            setTimeout(function() {
                expectToBeOnHomepage(page);
                done();
            });
        });

        it('won\'t register without input', function(done) {
            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForElement('[data-reactid=".0.1.0.6"]', function() {
                expect(page.find('[data-reactid=".0.1.0.6"]')).toHaveText('Registration Failed');
                done();
            }, 5000);
        });

        it('logs user in on success', function(done) {
            page.fillField('input[name="email"]', email);
            page.fillField('input[name="password"]', password);

            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForBodyChange(function() {
                expect(page.find('[data-reactid=".0.0.0.0"]')).toHaveText('Logged in as ' + email + '.');
                resetJasmineTimeout();
                done();
            }, 5000);
        });
    });

    describe('login page', function() {
        beforeEach(function(done) {
            page = visit('/login');

            page.ready(function() {
                page.waitFor(getDataLoadedFunction(page), done);
            });
        });

        it('loads the page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Login:');
                done();
            });
        });

        it('returns to the home page', function(done) {
            page.click('a[href="/"]');

            setTimeout(function() {
                expectToBeOnHomepage(page);
                done();
            });
        });

        it('logs in successfully', function(done) {
            page.fillField('input[name="email"]', email);
            page.fillField('input[name="password"]', password);

            page.click('[data-reactid=".0.1.0.5"]');

            page.waitForBodyChange(function() {
                expect(page.find('[data-reactid=".0.0.0.0"]')).toHaveText('Logged in as ' + email + '.');
                resetJasmineTimeout();
                done();
            }, 5000);
        });
    });
});
