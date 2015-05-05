/*global require,protractor,element,by*/
var q = require('q');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('./fragments.js');

module.exports = function ()
{
    'use strict';

    function clearAndType(webElement, text)
    {
        text = text.replace(/\\n/g, protractor.Key.ENTER);
        return webElement.getAttribute('type').then(function (type)
        {
            if ('date' !== type) {
                return webElement.clear().then(function ()
                {
                    return webElement.sendKeys(text);
                });
            } else {
                return webElement.sendKeys(text);
            }
        });
    }

    function iClickSuggestion(webElements, expectedText, callback)
    {
        var foundOption;
        webElements.then(function (options)
        {
            return options.some(function (option)
            {
                option.getText().then(function (text)
                {
                    if (expectedText === text) {
                        foundOption = option;
                    }
                });
            });
        }).then(function ()
        {
            foundOption.click().then(callback);
        });
    }

    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });

    this.When(/^I wait$/, function (callback)
    {
        setTimeout(function ()
        {
            callback();
        }, 5000);
    });


    this.Given(/^I am an anonymous user$/, function (callback)
    {
        browser.manage().deleteAllCookies();
        callback();
    });

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I maximize the window$/, function (callback)
    {
        browser.manage().window().maximize().then(callback);
    });

    this.Then(/the title should equal "([^"]*)"$/, function (text, callback)
    {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^the current URL should be "([^"]*)"$/, function (url, callback)
    {
        browser.waitForAngular().then(function ()
        {
            browser.getCurrentUrl().then(function (browserUrl)
            {
                expect(browserUrl.split('#')[1]).to.equal(url);
                callback();
            });
        });
    });

    this.Then(/^I should be directed to "([^"]*)"$/, function (url, callback)
    {
        expect(browser.getCurrentUrl()).to.eventually.match(new RegExp(url.replace('/', '\/').replace('?', '\\?') + '$')).and.notify(callback);
    });

    this.Then(/^I should see notification message "([^"]*)"$/, function (expectedText, callback)
    {
        expect(element.all(by.css('#toast-container .toast-message')).last().getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.When(/^I enter "(.*)" into "(.*)" field$/, function (text, name, callback)
    {
        var webElement = fragments(name)();
        clearAndType(webElement, text).then(callback);
    });

    this.When(/^I select options "([^"]*)" of select2 property "([^"]*)" of "([^"]*)" form$/, function (options, property, form, callback)
    {
        var isMultiselect = false, optionsArray = [];
        element.all(by.css('#s2id_' + property + '.select2-container-multi')).count().then(function (value)
        {
            isMultiselect = value > 0;
            optionsArray = isMultiselect ? options.split(',') : [options];
            function fillOne(item)
            {
                return browser.actions().mouseMove(fragments(form)()).perform().then(function ()
                {
                    return fragments(form)().element(by.css('#s2id_' + property)).click();
                }).then(function ()
                {
                    var webElement = isMultiselect ? element(by.css('#s2id_' + property + ' input')) : element(by.css('.select2-' + property + ' input'));
                    return clearAndType(webElement, item);
                }).then(function ()
                {
                    var webElements = element.all(by.css('.select2-' + property + ' ul.select2-results li'));
                    return iClickSuggestion(webElements, item, function ()
                    {
                        return {
                            pending: function ()
                            {
                            },
                            fail: function ()
                            {
                                callback.fail();
                            }
                        };
                    });
                });
            }

            function fillRecursively()
            {
                if (optionsArray.length) {
                    fillOne(optionsArray.shift()).then(fillRecursively);
                } else {
                    callback();
                }
            }

            fillRecursively();
        });
    });

    this.When(/^I click "([^"]*)"$/, function (name, callback)
    {
        browser.actions().mouseMove(fragments(name)()).perform().then(function ()
        {
            fragments(name)().click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I click all notifications$/, function (callback)
    {
        element.all(by.css('#toast-container .toast-message')).each(function ()
        {
            element(by.css('#toast-container .toast-message')).click();
        }).then(callback);
    });

    this.Then(/^I click "(\d+)" element "([^"]*)" of "([^"]*)" parent$/, function (nth, innerElement, Element, callback)
    {
        nth = parseInt(nth, 10) - 1;
        fragments(Element)().all(fragments(innerElement)().locator()).get(nth).click();
        callback();
    });

    this.Then(/^I should see the "([^"]*)" element$/, function (name, callback)
    {
        expect(fragments(name)().getWebElement().isDisplayed()).to.eventually.be.true.and.notify(callback);
    });

    this.Then(/^I should not see the "([^"]*)" element$/, function (name, callback)
    {
        fragments(name)().isPresent().then(function (result)
        {
            if (result) {
                expect(fragments(name)().isDisplayed()).to.eventually.be.false.and.notify(callback);
            } else {
                expect(q.when(result)).to.eventually.be.false.and.notify(callback);
            }
        });
    });

    this.When(/^I should see "([^"]*)" in "([^"]*)" input$/, function (expectedText, name, callback)
    {
        expect(fragments(name)().getAttribute('value')).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.Then(/^I should see "(.*)" in "([^"]*)"$/, function (expectedText, element, callback)
    {
        expect(fragments(element)().getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.Then(/^I should see \/(.*)\/ in "([^"]*)"$/, function (expectedText, element, callback)
    {
        expect(fragments(element)().getText()).to.eventually.match(new RegExp(expectedText)).and.notify(callback);
    });

    this.Then(/^the "([^"]*)" element should have "(\d+)" children "([^"]*)"$/, function (name, childrenCount, children, callback)
    {
        var parentElement = fragments(name)();
        var childrenPath = name.split('.');
        childrenPath.pop();
        childrenPath.push(children);
        childrenCount = parseInt(childrenCount, 10);
        expect(parentElement.all(fragments(childrenPath.join('.'))().locator()).count()).to.eventually.equal(childrenCount).and.notify(callback);
    });

    this.When(/^I click page "(\d+)" on "([^"]*)" pagination$/, function (page, pagination, callback)
    {
        page = parseInt(page, 10) + 2;
        var element = fragments(pagination)().element(by.css('li:nth-of-type(' + page + ') a'));
        browser.actions().mouseMove(element).click().perform().then(callback);
    });
};
