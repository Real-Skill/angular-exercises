/*global beforeAll, require*/
var fragments = require('./fragments.js');
var doubleRequest = new fragments.PageFragment();
describe('DoubleRequestPromise', function ()
{
    'use strict';
    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('init', function ()
    {
        it('should see all element on view', function ()
        {
            expect(doubleRequest.exists(fragments.elements.jane.textarea)).toBe(true);
            expect(doubleRequest.exists(fragments.elements.jane.button)).toBe(true);
            expect(doubleRequest.exists(fragments.elements.jane.list.array)).toBe(true);

            expect(doubleRequest.exists(fragments.elements.john.textarea)).toBe(true);
            expect(doubleRequest.exists(fragments.elements.john.button)).toBe(true);
            expect(doubleRequest.exists(fragments.elements.john.list.array)).toBe(true);

        });
    });
    describe('when add first message as John', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            return doubleRequest.setTextInputValue(fragments.elements.john.textarea, 'Simple text').then(function ()
            {
                return doubleRequest.click(fragments.elements.john.button);
            });
        });
        it('should see message in the list from John', function ()
        {
            expect(doubleRequest.exists(fragments.elements.jane.list.firstElement)).toBe(true);
            expect(doubleRequest.getText(fragments.elements.jane.list.firstAuthor)).toBe('John');
            expect(doubleRequest.getText(fragments.elements.jane.list.firstBody)).toBe('Simple text');

            expect(doubleRequest.exists(fragments.elements.john.list.firstElement)).toBe(true);
            expect(doubleRequest.getText(fragments.elements.john.list.firstAuthor)).toBe('John');
            expect(doubleRequest.getText(fragments.elements.john.list.firstBody)).toBe('Simple text');
        });
        describe('when Jane add message', function ()
        {
            beforeEach(function ()
            {
                return doubleRequest.setTextInputValue(fragments.elements.jane.textarea, 'Test text :)').then(function ()
                {
                    return doubleRequest.click(fragments.elements.jane.button);
                });
            });
            it('should see one new message', function ()
            {
                expect(doubleRequest.exists(fragments.elements.jane.list.secondElement)).toBe(true);
                expect(doubleRequest.getText(fragments.elements.jane.list.secondAuthor)).toBe('Jane');
                expect(doubleRequest.getText(fragments.elements.jane.list.secondBody)).toBe('Test text :)');

                expect(doubleRequest.exists(fragments.elements.john.list.secondElement)).toBe(true);
                expect(doubleRequest.getText(fragments.elements.john.list.secondAuthor)).toBe('Jane');
                expect(doubleRequest.getText(fragments.elements.john.list.secondBody)).toBe('Test text :)');
            });
        });
    });
    describe('when add first message as Jane', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            return doubleRequest.setTextInputValue(fragments.elements.jane.textarea, 'Angular exercises').then(function ()
            {
                return doubleRequest.click(fragments.elements.jane.button);
            });
        });
        it('should see message in the list from John', function ()
        {
            expect(doubleRequest.exists(fragments.elements.jane.list.firstElement)).toBe(true);
            expect(doubleRequest.getText(fragments.elements.jane.list.firstAuthor)).toBe('Jane');
            expect(doubleRequest.getText(fragments.elements.jane.list.firstBody)).toBe('Angular exercises');

            expect(doubleRequest.exists(fragments.elements.john.list.firstElement)).toBe(true);
            expect(doubleRequest.getText(fragments.elements.john.list.firstAuthor)).toBe('Jane');
            expect(doubleRequest.getText(fragments.elements.john.list.firstBody)).toBe('Angular exercises');
        });
        describe('when John add message', function ()
        {
            beforeEach(function ()
            {
                return doubleRequest.setTextInputValue(fragments.elements.john.textarea, 'Mock test text').then(function ()
                {
                    return doubleRequest.click(fragments.elements.john.button);
                });
            });
            it('should see message one new message', function ()
            {
                expect(doubleRequest.exists(fragments.elements.jane.list.secondElement)).toBe(true);
                expect(doubleRequest.getText(fragments.elements.jane.list.secondAuthor)).toBe('John');
                expect(doubleRequest.getText(fragments.elements.jane.list.secondBody)).toBe('Mock test text');
                expect(doubleRequest.exists(fragments.elements.john.list.secondElement)).toBe(true);
                expect(doubleRequest.getText(fragments.elements.john.list.secondAuthor)).toBe('John');
                expect(doubleRequest.getText(fragments.elements.john.list.secondBody)).toBe('Mock test text');
            });
        });
    });
});
