describe('PostListCtrl', function ()
{
    'use strict';

    var controller;
    var PostDAOMock;
    var queryResponseA;
    var queryResponseB;

    function createController($controller)
    {
        controller = $controller('PostListCtrl', {PostDAO: PostDAOMock});
    }

    beforeEach(module('exerciseApp'));

    beforeEach(inject(function ($controller, $q, $rootScope)
    {
        PostDAOMock = jasmine.createSpyObj('PostDao', ['query']);
        queryResponseA = {resultList: [
            { id: 1, firstName: 'Danille', lastName: 'Claborn' }
        ]};
        queryResponseB = {resultList: [
            { id: 2, firstName: 'Kara', lastName: 'Rimes' }
        ], totalCount: 10};
        PostDAOMock.query.andReturn($q.when(queryResponseA));
        createController($controller);
        $rootScope.$digest();

    }));
    describe('when pagination is needed', function ()
    {
        it('should load posts list', function ()
        {
            expect(controller.posts).toEqual(queryResponseA.resultList);
        });
        it('should make isPaginationNeeded return false', function ()
        {
            expect(controller.isPaginationNeeded()).toBe(false);
        });
        describe('when search query is typed', function ()
        {
            beforeEach(inject(function ($rootScope, $q)
            {
                PostDAOMock.query.andReturn($q.when(queryResponseB));
                controller.filter.searchQuery = 'abc';
                $rootScope.$digest();
            }));
            it('should reload the results', function ()
            {
                expect(controller.posts).toEqual(queryResponseB.resultList);
            });
            it('should call DAO with proper filters', function ()
            {
                expect(PostDAOMock.query).toHaveBeenCalledWith({searchQuery: 'abc', firstResult: 0, maxResults: 5});
            });
        });
        describe('when moving to next page', function ()
        {
            beforeEach(inject(function ($rootScope, $q)
            {
                PostDAOMock.query.andReturn($q.when(queryResponseB));
                controller.currentPage = 2;
                $rootScope.$digest();
            }));
            it('should load next results', function ()
            {
                expect(PostDAOMock.query).toHaveBeenCalledWith({searchQuery: null, firstResult: 5, maxResults: 5});
            });
        });
    });
    describe('when pagination is not needed', function ()
    {
        beforeEach(inject(function ($controller, $q, $rootScope)
        {
            PostDAOMock.query.andReturn($q.when(queryResponseB));
            createController($controller);
            $rootScope.$digest();
        }));
        it('should load posts list', function ()
        {
            expect(controller.posts).toEqual(queryResponseB.resultList);
        });
        it('should make isPaginationNeeded return true', function ()
        {
            expect(controller.isPaginationNeeded()).toBe(true);
        });
    });
});
