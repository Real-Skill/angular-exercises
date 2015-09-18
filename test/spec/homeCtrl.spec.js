describe('HomeCtrl', function ()
{
    beforeEach(module('exerciseApp'));

    describe('changeLanguage', function ()
    {
        var gettextCatalogMock;
        var homeCtrl;
        beforeEach(inject(function ($rootScope, $controller)
        {
            gettextCatalogMock = jasmine.createSpyObj('gettextCatalog', ['setCurrentLanguage']);
            homeCtrl = $controller('HomeCtrl', {gettextCatalog: gettextCatalogMock})
        }));
        describe('when invoked with polish language', function ()
        {
            beforeEach(function ()
            {
                homeCtrl.changeLanguage(homeCtrl.languages[0])
            });
            it('should invoke setCurrentLanguage on gettextCatalog with provided language', function ()
            {
                expect(gettextCatalogMock.setCurrentLanguage).toHaveBeenCalledWith('pl');
            });
        });
        describe('when invoked with english language', function ()
        {
            beforeEach(function ()
            {
                homeCtrl.changeLanguage(homeCtrl.languages[1])
            });
            it('should invoke setCurrentLanguage on gettextCatalog with provided language', function ()
            {
                expect(gettextCatalogMock.setCurrentLanguage).toHaveBeenCalledWith('en');
            });
        });
        describe('when invoked with german language', function ()
        {
            beforeEach(function ()
            {
                homeCtrl.changeLanguage(homeCtrl.languages[2])
            });
            it('should invoke setCurrentLanguage on gettextCatalog with provided language', function ()
            {
                expect(gettextCatalogMock.setCurrentLanguage).toHaveBeenCalledWith('de');
            });
        });

    });
});
