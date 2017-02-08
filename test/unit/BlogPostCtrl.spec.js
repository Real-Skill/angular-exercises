describe('BlogPostCtrl', function ()
{
    'use strict';

    var blogPostCtrl;
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

        blogPostCtrl = $controller('BlogPostCtrl', {});
    }));

    describe('posts array', function ()
    {
        it('should exist', function ()
        {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it('should be an array', function ()
        {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it('should be set to data presented in README', function ()
        {
            expect(blogPostCtrl.posts).toEqual(posts);
        });
    });
});
