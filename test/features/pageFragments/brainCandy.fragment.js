(function ()
{
    'use strict';

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Table(e)
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

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Table.prototype.getRowsAmount = function ()
    {
        return this.element.all(by.css('tbody tr')).count();
    };

    Table.prototype.getContent = function (rowSelector, columnSelector, colNames)
    {
        return this.element.all(by.css(rowSelector)).map(function (row)
        {
            var columns = row.all(by.css(columnSelector));
            return columns.then(function (cols)
            {
                var result = {};
                cols.forEach(function (col, idx)
                {
                    result[colNames[idx]] = col.getText();
                });
                return result;
            });
        });
    };

    var helper = {
        button: function (e)
        {
            return new Button(e);
        },
        table: function (e)
        {
            return new Table(e);
        },
        input: function (e)
        {
            return new TextInput(e);
        }
    };

    var elements = {
        button: {
            add: element.bind(null, by.id('addButton')),
            edit: element.all.bind(null, by.id('editButton')),
            delete: element.all.bind(null, by.id('deleteButton')),
            save: element.bind(null, by.id('saveButton')),
            back: element.bind(null, by.id('backButton'))
        },
        table: element.bind(null, by.id('brainCandiesTable')),
        input: {
            name: element.bind(null, by.id('name')),
            author: element.bind(null, by.id('author'))
        }
    };

    function PageFragment()
    {
    }


    PageFragment.prototype.clickAddButton = function ()
    {
        return helper.button(elements.button.add()).clickOn();
    };
    PageFragment.prototype.clickEditButton = function (number)
    {
        return helper.button(elements.button.edit().get(number)).clickOn();
    };
    PageFragment.prototype.clickDeleteButton = function (number)
    {
        return helper.button(elements.button.delete().get(number)).clickOn();
    };
    PageFragment.prototype.clickSaveButton = function ()
    {
        return helper.button(elements.button.save()).clickOn();
    };
    PageFragment.prototype.clickBackButton = function ()
    {
        return helper.button(elements.button.back()).clickOn();
    };
    PageFragment.prototype.getPath = function ()
    {
        var re = new RegExp('/#(.*)');
        return browser.getCurrentUrl().then(function (url)
        {
            return re.exec(url)[1];
        });
    };
    PageFragment.prototype.getNumberOfRows = function ()
    {
        return helper.table(elements.table()).getRowsAmount();
    };

    PageFragment.prototype.getTableContent = function ()
    {
        return helper.table(elements.table()).getContent('tbody tr', 'td', ['id', 'name']);
    };
    PageFragment.prototype.setNameInputValue = function (text)
    {
        return helper.input(elements.input.name()).setValue(text);
    };
    PageFragment.prototype.setAuthorInputValue = function (text)
    {
        return helper.input(elements.input.author()).setValue(text);
    };

    module.exports = PageFragment;
})();
