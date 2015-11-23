var BrainCandy = require('./pageFragments/brainCandy.fragment.js');
var brainCandy = new BrainCandy();

describe('Brain candy', function ()
{
    'use strict';


    describe('add button', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        describe('create new brain candy with data', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
            });

            it('should open create new brain candy view', function ()
            {
                brainCandy.clickAddButton();
                expect(brainCandy.getPath()).toEqual('/save');
            });

            it('should return to brain candies list view after save data', function ()
            {
                brainCandy.setNameInputValue('Knights of Ten');
                brainCandy.setAuthorInputValue('Scot Anderson');
                brainCandy.clickSaveButton();
                expect(brainCandy.getPath()).toEqual('/');
            });

            it('should add new brain candies to list ', function ()
            {
                expect(brainCandy.getNumberOfRows()).toEqual(4);
            });
        });

        describe('create new brain candy without name', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
            });

            it('should open create new brain candy view', function ()
            {
                brainCandy.clickAddButton();
                expect(brainCandy.getPath()).toEqual('/save');
            });

            it('should not accept data to save without name', function ()
            {
                brainCandy.setNameInputValue('');
                brainCandy.setAuthorInputValue('Scot Anderson');
                brainCandy.clickSaveButton();
                expect(brainCandy.getPath()).toEqual('/save');
            });

            it('should not add new brain candies to list ', function ()
            {
                brainCandy.clickBackButton();
                expect(brainCandy.getNumberOfRows()).toEqual(3);
            });
        });
        describe('create new brain candy without author', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
            });

            it('should open create new brain candy view', function ()
            {
                brainCandy.clickAddButton();
                expect(brainCandy.getPath()).toEqual('/save');
            });

            it('should not accept data to save without author', function ()
            {
                brainCandy.setNameInputValue('Knights of Ten');
                brainCandy.setAuthorInputValue('');
                brainCandy.clickSaveButton();
                expect(brainCandy.getPath()).toEqual('/save');
            });

            it('should not add new brain candies to list ', function ()
            {
                brainCandy.clickBackButton();
                expect(brainCandy.getNumberOfRows()).toEqual(3);
            });
        });
    });

    describe('back button', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });
        it('should open create new brain candy view', function ()
        {
            brainCandy.clickAddButton();
            expect(brainCandy.getPath()).toEqual('/save');
        });
        it('should return to default page from create new brain view', function ()
        {
            brainCandy.clickBackButton();
            expect(brainCandy.getPath()).toEqual('/');
        });
        it('should open create new brain candy view', function ()
        {
            brainCandy.clickEditButton(0);
            expect(brainCandy.getPath()).toEqual('/details/1');
        });
        it('should return to default page from edit view', function ()
        {
            brainCandy.clickBackButton();
            expect(brainCandy.getPath()).toEqual('/');
        });

    });

    describe('edit button', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });

        it('should open edit view for first row', function ()
        {
            brainCandy.clickEditButton(0);
            expect(brainCandy.getPath()).toEqual('/details/1');
        });
        it('should open edit form view for second row', function ()
        {
            brainCandy.clickEditButton(1);
            expect(brainCandy.getPath()).toEqual('/details/2');
        });
        it('should open edit form view for third row', function ()
        {
            brainCandy.clickEditButton(2);
            expect(brainCandy.getPath()).toEqual('/details/3');
        });
    });

    describe('delete button', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('should delete third row ', function ()
        {
            brainCandy.clickDeleteButton(2);
            expect(brainCandy.getNumberOfRows()).toEqual(2);
        });
        it('should delete second row', function ()
        {
            brainCandy.clickDeleteButton(1);
            expect(brainCandy.getNumberOfRows()).toEqual(1);
        });
        it('delete delete first row', function ()
        {
            brainCandy.clickDeleteButton(0);
            expect(brainCandy.getNumberOfRows()).toEqual(0);
        });
    });
});
