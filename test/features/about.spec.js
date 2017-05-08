'use strict';

var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('\'About\' view is visible only for login users', function ()
{
    describe('anonymous cannot see about info', function ()
    {
        beforeAll(function ()
        {
            browser.get('/#/about');
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
    describe('login user can see \'about\' view', function ()
    {
        beforeAll(function ()
        {
            browser.get('/#/about');
            app.setLoginInputValue('admin');
            app.setPasswordInputValue('admin');
            app.clickLoginButton();
            browser.get('/#/about');
        });
        it('should display app name', function ()
        {
            expect(app.getAppName()).toEqual('authExercise');
        });
        it('should display dropdown menu', function ()
        {
            expect(app.isDropDownVisible()).toEqual(true);
        });
        it('should show \'Admin\' as login user', function ()
        {
            expect(app.getUserLogin()).toEqual('Admin');
        });
        it('should display \'about\' header menu', function ()
        {
            expect(app.getAboutHeader()).toEqual('What Is Angular?');
        });
    });
});
