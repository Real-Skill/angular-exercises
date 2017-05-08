describe('BrainCandyDetailsCtrl', function ()
{
    'use strict';

    beforeEach(module('app'));

    var CandyDAOMock;
    var routeParams;
    var brainCandiesDetails;
    var brainCandiesDetailList;
    var brainCandyDetailsCtrl;
    var newBrainCandy;


    beforeEach(inject(function ($controller)
    {
        newBrainCandy = {
            id: 4,
            name: 'Knights of Ten',
            author: 'Scot Anderson'
        };

        brainCandiesDetails = [
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
                id: 4,
                name: 'Rubik Cube',
                author: 'Terutoshi Ishige'
            }
        ];

        routeParams = {id: 1};
        CandyDAOMock = jasmine.createSpyObj('CandyDAO', ['get', 'save']);
        CandyDAOMock.get.andReturn(successfulPromise(brainCandiesDetails));

        brainCandyDetailsCtrl = $controller('BrainCandyDetailsCtrl', {
            CandyDAO: CandyDAOMock,
            $routeParams: routeParams
        });
    }));

    describe('when $routeParams.id is number', function ()
    {
        describe('CandyDAO.get()', function ()
        {
            it('should be called', function ()
            {
                expect(CandyDAOMock.get).toHaveBeenCalled();
            });
            it('should be called with routeParams', function ()
            {
                expect(CandyDAOMock.get).toHaveBeenCalledWith(routeParams.id);
            });
        });

        describe('details list', function ()
        {
            beforeEach(function ()
            {
                brainCandiesDetailList = [];
                angular.forEach(brainCandyDetailsCtrl.details, function (value)
                {
                    this.push(value);
                }, brainCandiesDetailList);
            });

            it('should exist', function ()
            {
                expect(brainCandyDetailsCtrl.details).not.toBe(undefined);
            });

            it('should be a array', function ()
            {
                expect(brainCandyDetailsCtrl.details instanceof Array).toBe(true);

            });
            it('should set details properties', function ()
            {
                expect(brainCandiesDetailList).toEqual(brainCandiesDetails);
            });
        });
    });

    describe('when $routeParams.id is not number', function ()
    {
        beforeEach(function ()
        {
            routeParams = {id: 'not'};
        });
        it('should return NaN', function ()
        {
            expect(parseInt(routeParams.id, 10)).toBeNaN();
        });
    });

    describe('saveCandy()', function ()
    {
        beforeEach(function ()
        {
            brainCandyDetailsCtrl.saveCandy();
        });
        it('should call CandyDAO.save()', function ()
        {
            expect(CandyDAOMock.save).toHaveBeenCalled();
        });
        it('should call CandyDAO.save() with details', function ()
        {
            expect(CandyDAOMock.save).toHaveBeenCalledWith(brainCandiesDetails);
        });

    });
});
