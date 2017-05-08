var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('User can register', function ()
{
    'use strict';

    describe('when go to register view', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.clickRegisterButton();
        });
        it('should login input be visible', function ()
        {
            expect(app.isLoginRegisterInputExist()).toEqual(true);
        });
        it('should password input be visible', function ()
        {
            expect(app.isPasswordRegisterInputExist()).toEqual(true);
        });
        it('should confirm password input be visible', function ()
        {
            expect(app.isConfirmPasswordRegisterInputExist()).toEqual(true);
        });
    });

    describe('when user register', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.clickRegisterButton();
            app.setLoginRegisterInputValue('user');
            app.setPasswordRegisterInputValue('user');
            app.setConfirmPasswordRegisterInputValue('user');
            app.clickSubmitRegisterButton();
        });
        describe('always', function ()
        {
            it('should display app name', function ()
            {
                expect(app.getAppName()).toEqual('authExercise');
            });
            it('should display content header', function ()
            {
                expect(app.getContentHeader()).toEqual('Hello, user!');
            });
            it('should display dropdown menu', function ()
            {
                expect(app.isDropDownVisible()).toEqual(true);
            });
            it('should show \'User\' as login user', function ()
            {
                expect(app.getUserLogin()).toEqual('User');
            });
        });
        describe('and logout', function ()
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
