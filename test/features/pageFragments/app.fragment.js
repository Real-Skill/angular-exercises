(function ()
{
    'use strict';

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TextInput(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    TextField.prototype.isVisible = function ()
    {
        return this.element.isPresent();
    };

    TextInput.prototype.getValue = function ()
    {
        return this.element.getAttribute('value');
    };

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    TextInput.prototype.isVisible = function ()
    {
        return this.element.isPresent();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        button: function (e)
        {
            return new Button(e);
        },
        input: function (e)
        {
            return new TextInput(e);
        }
    };

    var elements = {
        login: {
            name: element.bind(null, by.css('#login')),
            password: element.bind(null, by.css('#password')),
            submitLogin: element.bind(null, by.css('#submit-button')),
            register: element.bind(null, by.css('[href="#/register"]'))
        },
        register: {
            login: element.bind(null, by.css('#register')),
            password: element.bind(null, by.css('#password')),
            retypePassword: element.bind(null, by.css('#retype_password')),
            submit: element.bind(null, by.css('.register-btn'))
        },
        home: {
            menu: {
                appName: element.bind(null, by.css('div.navbar-header .navbar-brand'))
            },
            content: {
                header: element.bind(null, by.css('.panel-body h3'))
            },
            dropdown: {
                user: element.bind(null, by.css('.user-menu-username')),
                logout: element.bind(null, by.css('[ng-click="menuCtrl.logout()"]'))
            }
        },
        about: {
            header: element.bind(null, by.css('.panel-body h3'))
        }
    };

    function PageFragment()
    {
    }

    //login inputs
    PageFragment.prototype.isLoginInputExist = function ()
    {
        return helper.input(elements.login.name()).isVisible();
    };
    PageFragment.prototype.isPasswordInputExist = function ()
    {
        return helper.input(elements.login.password()).isVisible();
    };
    PageFragment.prototype.setLoginInputValue = function (text)
    {
        return helper.input(elements.login.name()).setValue(text);
    };
    PageFragment.prototype.setPasswordInputValue = function (text)
    {
        return helper.input(elements.login.password()).setValue(text);
    };

    //register inputs
    PageFragment.prototype.isLoginRegisterInputExist = function ()
    {
        return helper.input(elements.register.login()).isVisible();
    };
    PageFragment.prototype.isPasswordRegisterInputExist = function ()
    {
        return helper.input(elements.register.password()).isVisible();
    };
    PageFragment.prototype.isConfirmPasswordRegisterInputExist = function ()
    {
        return helper.input(elements.register.retypePassword()).isVisible();
    };
    PageFragment.prototype.setLoginRegisterInputValue = function (text)
    {
        return helper.input(elements.register.login()).setValue(text);
    };
    PageFragment.prototype.setPasswordRegisterInputValue = function (text)
    {
        return helper.input(elements.register.password()).setValue(text);
    };
    PageFragment.prototype.setConfirmPasswordRegisterInputValue = function (text)
    {
        return helper.input(elements.register.retypePassword()).setValue(text);
    };

    //buttons
    PageFragment.prototype.clickLoginButton = function ()
    {
        return helper.button(elements.login.submitLogin()).clickOn();
    };
    PageFragment.prototype.clickRegisterButton = function ()
    {
        return helper.button(elements.login.register()).clickOn();
    };
    PageFragment.prototype.clickDropDownButton = function ()
    {
        return helper.button(elements.home.dropdown.user()).clickOn();
    };
    PageFragment.prototype.clickLogoutButton = function ()
    {
        return helper.button(elements.home.dropdown.logout()).clickOn();
    };
    PageFragment.prototype.clickSubmitRegisterButton = function ()
    {
        return helper.button(elements.register.submit()).clickOn();
    };

    //text
    PageFragment.prototype.isAppNameVisible = function ()
    {
        return helper.text(elements.home.menu.appName()).isVisible();
    };
    PageFragment.prototype.isContentHeaderVisible = function ()
    {
        return helper.text(elements.home.content.header()).isVisible();
    };
    PageFragment.prototype.isDropDownVisible = function ()
    {
        return helper.text(elements.home.dropdown.user()).isVisible();
    };
    PageFragment.prototype.getAppName = function ()
    {
        return helper.text(elements.home.menu.appName()).getValue();
    };
    PageFragment.prototype.getContentHeader= function ()
    {
        return helper.text(elements.home.content.header()).getValue();
    };
    PageFragment.prototype.getUserLogin = function ()
    {
        return helper.text(elements.home.dropdown.user()).getValue();
    };
    PageFragment.prototype.getAboutHeader= function ()
    {
        return helper.text(elements.about.header()).getValue();
    };

    module.exports = PageFragment;
})();
