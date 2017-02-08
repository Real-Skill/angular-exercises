describe('BlogPostCtrl', function ()
{
    'use strict';

    var blogPostCtrl;
    var PostDAOMock;
    var posts;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller)
    {
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
            }
        ];

        PostDAOMock = jasmine.createSpyObj('PostDAO', ['query']);
        PostDAOMock.query.and.returnValue(successfulPromise(posts));
        blogPostCtrl = $controller('BlogPostCtrl', {PostDAO: PostDAOMock});
    }));

    describe('PostDAO.query()', function ()
    {
        it('should be called', function ()
        {
            expect(PostDAOMock.query).toHaveBeenCalled();
        });
    });

    describe('posts list', function ()
    {
        it('should exist', function ()
        {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it('should be an array', function ()
        {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it('should set posts properties', function ()
        {
            expect(blogPostCtrl.posts).toEqual(posts);
        });
    });
});
