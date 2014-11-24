describe("PostListCtr", function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var postListCtrl;
    var PostDAOMock;
    var posts;
    var postlList;

    beforeEach(inject(function ($controller)
    {
        postlList = [];
        posts = [
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
        PostDAOMock = jasmine.createSpyObj('PostDAO', ['query']);
        PostDAOMock.query.andReturn(successfulPromise(posts));
        postListCtrl = $controller('PostListCtrl', {PostDAO: PostDAOMock})

    }));

    describe("PostDAO.query()", function ()
    {
        it("should be called", function ()
        {
            expect(PostDAOMock.query).toHaveBeenCalled();
        });
    });

    describe("'posts' list", function ()
    {
        beforeEach(function ()
        {
            angular.forEach(postListCtrl.posts, function (value)
            {
                this.push(value);
            }, postlList);
        });
        it("should exist", function ()
        {
            expect(postListCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function ()
        {
            expect(postListCtrl.posts instanceof Array).toBe(true);
        });
        it("should set posts properties", function ()
        {
            expect(postlList).toEqual(posts);
        });
    });
});
