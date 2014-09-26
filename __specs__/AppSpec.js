describe('application', function() {
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

        it('links to login page', function(done) {
            page.click('a[href="/login"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Login:');
                done();
            });
        });

        it('links to register page', function(done) {
            page.click('a[href="/register"]');

            setTimeout(function() {
                expect(page.find('p[data-reactid=".0.1.0.0"]')).toHaveText('Register an account:');
                done();
            });
        });
    });

    describe('login page', function() {
        beforeEach(function(done) {
            page = visit('/login');

            page.ready(function() {
                page.waitFor(getDataLoadedFunction(page), done);
            });
        });

        it('loads the login page', function(done) {
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
    });

    describe('register page', function() {
        beforeEach(function(done) {
            page = visit('/register');

            page.ready(function() {
                page.waitFor(getDataLoadedFunction(page), done);
            });
        });

        it('loads the login page', function(done) {
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
    });
});
