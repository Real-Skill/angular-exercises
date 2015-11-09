/*global element,by*/
(function ()
{
    'use strict';

    function TextInput(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TableField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

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

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    TableField.prototype.getValue = function ()
    {
        return this.element.getText();
    };


    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        }
    };
    var elements = {
        john: {
            textarea: element.bind(null, by.css('.panel-info textarea')),
            button: element.bind(null, by.css('.panel-info button.btn.btn-success')),
            list: {
                array: element.bind(null, by.css('.panel-info .panel-footer .row')),
                firstElement: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-0')),
                firstAuthor: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-0 .panel-heading')),
                firstBody: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-0 .panel-body')),
                secondElement: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-0')),

                secondAuthor: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-1 .panel-heading')),
                secondBody: element.bind(null, by.css('.panel-info .panel-footer .row #message-john-1 .panel-body'))
            }
        },
        jane: {
            textarea: element.bind(null, by.css('.panel-danger textarea')),
            button: element.bind(null, by.css('.panel-danger button.btn.btn-success')),
            list: {
                array: element.bind(null, by.css('.panel-danger .panel-footer .row')),
                firstElement: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-0')),
                firstAuthor: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-0 .panel-heading')),
                firstBody: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-0 .panel-body')),
                secondElement: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-0')),
                secondAuthor: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-1 .panel-heading')),
                secondBody: element.bind(null, by.css('.panel-danger .panel-footer .row #message-jane-1 .panel-body'))
            }
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.exists = function exists(e)
    {
        return !!e().isDisplayed();
    };

    PageFragment.prototype.setTextInputValue = function (element, filter)
    {
        return helper.input(element()).setValue(filter);
    };

    PageFragment.prototype.click = function click(element)
    {
        return element().click();
    };

    PageFragment.prototype.getText = function getText(element)
    {
        return element().getText();
    };

    module.exports = {PageFragment: PageFragment, elements: elements};
})();
