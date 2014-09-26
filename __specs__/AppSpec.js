describe('Application', function() {
    describe('Homepage', function() {
        beforeEach(function(done) {
            page = visit('/');

            page.show();

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
                expect(page.find('label[for="email"]')).toHaveText('Email:');
                expect(page.find('label[for="password"]')).toHaveText('Password:');
                done();
            });
        });
    });
});
