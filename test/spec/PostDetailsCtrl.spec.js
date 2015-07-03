describe('PostDetailsCtr', function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var postDetailsCtrl;
    var routeParams;
    var PostDAOMock;
    var details;
    var detailList;

    beforeEach(inject(function ($controller)
    {
        detailList = [];
        details = [
            {
                id: 1,
                author: 'Jack',
                title: 'Diving Deep with Dependency Injection'
            },
            {
                id: 2,
                author: 'Jill',
                title: 'Practical End-to-End Testing with Protractor'
            },
            {
                id: 3,
                author: 'Cleo',
                title: 'GitHub Flavored Markdown'
            }
        ];
        routeParams = {id: 1};
        PostDAOMock = jasmine.createSpyObj('PostDAO', ['get']);
        PostDAOMock.get.andReturn(successfulPromise(details));
        postDetailsCtrl = $controller('PostDetailsCtrl', {PostDAO: PostDAOMock, $routeParams: routeParams});

    }));

    describe('PostDAO.get()', function ()
    {
        it('should be called', function ()
        {
            expect(PostDAOMock.get).toHaveBeenCalled();
        });
        it('should be called with routeParams', function ()
        {
            expect(PostDAOMock.get).toHaveBeenCalledWith(routeParams.id);
        });
    });

    describe('details list', function ()
    {
        beforeEach(function ()
        {
            angular.forEach(postDetailsCtrl.details, function (value)
            {
                this.push(value);
            }, detailList);
        });
        it('should exist', function ()
        {
            expect(postDetailsCtrl.details).not.toBe(undefined);
        });
        it('should be an array', function ()
        {
            expect(postDetailsCtrl.details instanceof Array).toBe(true);
        });
        it('should set details properties', function ()
        {
            expect(detailList).toEqual(details);
        });
    });
});
