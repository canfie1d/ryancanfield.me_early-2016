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
    });
});
