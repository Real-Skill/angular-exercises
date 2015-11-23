describe('BrainCandyListCtrl', function ()
{
    'use strict';

    beforeEach(module('app'));

    var id;
    var CandyDAOMock;
    var brainCandies;
    var brainCandyList;
    var brainCandyListCtrl;

    beforeEach(inject(function ($controller)
    {
        brainCandyList = [];
        brainCandies = [
            {
                id: 1,
                name: 'Jenga',
                author: 'Leslie Scott'
            },
            {
                id: 2,
                name: 'Pachisi',
                author: 'Josef Friedrich Schmidt'
            },
            {
                id: 3,
                name: 'Rubik Cube',
                author: 'Terutoshi Ishige'
            }
        ];

        id = 1;
        CandyDAOMock = jasmine.createSpyObj('CandyDAO', ['query', 'delete']);
        CandyDAOMock.query.andReturn(successfulPromise(brainCandies));
        CandyDAOMock.delete.andReturn(successfulPromise());
        brainCandyListCtrl = $controller('BrainCandyListCtrl', {CandyDAO: CandyDAOMock});

    }));

    describe('CandyDAO.query()', function ()
    {
        it('should be called', function ()
        {
            expect(CandyDAOMock.query).toHaveBeenCalled();
        });
    });

    describe('CandyDAO.delete(id)', function ()
    {
        beforeEach(function ()
        {
            brainCandyListCtrl.deleteCandy(id);
        });

        it('should be called', function ()
        {
            expect(CandyDAOMock.delete).toHaveBeenCalled();
        });

        it('should be called with id', function ()
        {
            expect(CandyDAOMock.delete).toHaveBeenCalledWith(id);
        });
    });

    describe('brainCandies list', function ()
    {
        beforeEach(function ()
        {
            angular.forEach(brainCandyListCtrl.brainCandies, function (value)
            {
                this.push(value);
            }, brainCandyList);
        });

        it('should exist', function ()
        {
            expect(brainCandyListCtrl.brainCandies).not.toBe(undefined);
        });

        it('should be a object', function ()
        {
            expect('object' === typeof brainCandyListCtrl.brainCandies).toBe(true);
        });

        it('should set brainCandies properties', function ()
        {
            expect(brainCandyList).toEqual(brainCandies);
        });
    });
});
