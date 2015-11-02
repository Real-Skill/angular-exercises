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

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        header: element.bind(null, by.css('body h1')),
        button: {
            default: element.bind(null, by.css('.btn.btn-default')),
            primary: element.bind(null, by.css('.btn.btn-primary')),
            success: element.bind(null, by.css('.btn.btn-success'))
        },
        modal: {
            container: element.bind(null, by.css('.modal-content')),
            title: element.bind(null, by.css('.modal-content .modal-title')),
            body: element.bind(null, by.css('.modal-content .modal-body'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getHeaderValue = function ()
    {
        return helper.text(elements.header()).getValue();
    };

    PageFragment.prototype.getDialogContainer = function ()
    {
        return elements.modal.container();
    };

    PageFragment.prototype.getDialogTitle = function ()
    {
        return helper.text(elements.modal.title()).getValue();
    };

    PageFragment.prototype.openDialog = function ()
    {
        return helper.button(elements.button.primary()).clickOn();
    };

    PageFragment.prototype.exitDialog = function ()
    {
        return helper.button(elements.button.success()).clickOn();
    };


    module.exports = PageFragment;
})();
