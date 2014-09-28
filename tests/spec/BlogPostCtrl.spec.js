describe("BlogPostCtrl", function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var blogPostCtrl;
    var PostDAOMock;
    var posts;
    var postList;

    beforeEach(inject(function ($controller)
    {
        postList = [];
        posts = [
            {   id: 1,
                author: 'Jack',
                title: 'Diving Deep with Dependency Injection'
            },
            {   id: 2,
                author: 'Jill',
                title: 'Practical End-to-End Testing with Protractor'
            }
        ];

        PostDAOMock = jasmine.createSpyObj('PostDAO', ['query']);
        PostDAOMock.query.andReturn(successfulPromise(posts));

        blogPostCtrl = $controller('BlogPostCtrl', {PostDAO: PostDAOMock});

        angular.forEach(blogPostCtrl.posts, function (value)
        {
            this.push(value);
        }, postList);

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
        it("should exist", function ()
        {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function ()
        {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it("should set 'posts' properties", function ()
        {
            expect(postList).toEqual(posts);
        });
    });
});
