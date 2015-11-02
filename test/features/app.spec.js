var fragments = new (require('./pageFragments/fragments.js'))();

describe('Application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initial app', function ()
    {
        it('should display message in header', function ()
        {
            expect(fragments.getHeaderValue()).toEqual('Find modal bugs');
        });
        it('should popup dialog', function ()
        {
            fragments.openDialog();
            expect(fragments.getDialogTitle()).toEqual('Please confirm operation');
        });
    });
    describe('when app is debugged ', function ()
    {
        it('should close dialog', function ()
        {
            fragments.exitDialog();
            expect(fragments.getDialogContainer().isPresent()).toEqual(false);
        });
    });
});
