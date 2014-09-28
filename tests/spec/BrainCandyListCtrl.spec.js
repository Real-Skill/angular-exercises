xdescribe("BrainCandyListCtrl", function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var brainCandyListCtrl;
    var CandyDAOMock;
    var id;
    var brainCandyList;
    var brainCandies;

    beforeEach(inject(function ($controller)
    {
        brainCandyList = [];
        brainCandies = [
            {
                id: 1,
                name: 'Jenga',
                author: ' Leslie Scott'
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
        CandyDAOMock = jasmine.createSpyObj('CandyDAO', ['query', 'remove']);
        CandyDAOMock.query.andReturn(successfulPromise(brainCandies));
        CandyDAOMock.remove.andReturn(successfulPromise());
        brainCandyListCtrl = $controller('BrainCandyListCtrl', {CandyDAO: CandyDAOMock})

    }));

    describe("CandyDAO.query()", function ()
    {
        it("should be called", function ()
        {
            expect(CandyDAOMock.query).toHaveBeenCalled();
        });
    });
    describe("CandyDAO.remove(id)", function ()
    {
        beforeEach(function ()
        {
            brainCandyListCtrl.deleteCandy(id);
        });
        it("should be called", function ()
        {
            expect(CandyDAOMock.remove).toHaveBeenCalled();
        });
        it("should be called with id", function ()
        {
            expect(CandyDAOMock.remove).toHaveBeenCalledWith(id);
        });
    });

    describe("'brainCandies' list", function ()
    {
        beforeEach(function ()
        {
            angular.forEach(brainCandyListCtrl.brainCandies, function (value)
            {
                this.push(value);
            }, brainCandyList);

        });

        it("should exist", function ()
        {
            expect(brainCandyListCtrl.brainCandies).not.toBe(undefined);
        });

        it("should be a object", function ()
        {
            expect('object' == typeof brainCandyListCtrl.brainCandies).toBe(true);
        });
        it("should set 'brainCandies' properties", function ()
        {
            expect(brainCandyList).toEqual(brainCandies);
        });
    });
});
