var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Admin can login and logout', function ()
{
    'use strict';

    describe('login', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });
        describe('when go to login view', function ()
        {
            it('should login input be visible', function ()
            {
                expect(app.isLoginInputExist()).toEqual(true);
            });
            it('should login password be visible', function ()
            {
                expect(app.isPasswordInputExist()).toEqual(true);
            });
        });

        describe('when login as admin', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                app.setLoginInputValue('admin');
                app.setPasswordInputValue('admin');
                app.clickLoginButton();

            });
            describe('always', function ()
            {
                it('should display app name', function ()
                {
                    expect(app.isAppNameVisible()).toEqual(true);
                });
                it('should display content header', function ()
                {
                    expect(app.isContentHeaderVisible()).toEqual(true);
                });
                it('should display dropdown menu', function ()
                {
                    expect(app.isDropDownVisible()).toEqual(true);
                });
                it('should show \'admin\' as login user', function ()
                {
                    expect(app.getUserLogin()).toEqual('Admin');
                });
            });
            describe('logout', function ()
            {
                beforeAll(function ()
                {
                    app.clickDropDownButton();
                    app.clickLogoutButton();
                });
                it('should display login input', function ()
                {
                    expect(app.isLoginInputExist()).toEqual(true);
                });
                it('should display password input', function ()
                {
                    expect(app.isPasswordInputExist()).toEqual(true);
                });
            });
        });
    });
});
