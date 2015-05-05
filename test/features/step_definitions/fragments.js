/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        global: {},
        login: {
            name: element.bind(null, by.css('#login')),
            password: element.bind(null, by.css('#password')),
            submitLogin: element.bind(null, by.css('#submit-button')),
            register: element.bind(null, by.css('[href="#/register"]'))
        },
        register: {
            login: element.bind(null, by.css('#register')),
            password: element.bind(null, by.css('#password')),
            retype_password: element.bind(null, by.css('#retype_password')),
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

    return byString(mapping, text);
};

module.exports = fragments;
