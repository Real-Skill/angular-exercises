describe('BlogPostCtrl', function ()
{
    'use strict';
    beforeEach(module('exerciseApp'));

    var blogPostCtrl;
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

        describe('posts.id', function ()
        {
            beforeEach(function ()
            {
                angular.forEach(blogPostCtrl.posts, function (value)
                {
                    this.push(value.id);
                }, postList);
            });
            it('should set id', function ()
            {
                expect(postList).toEqual([1, 2]);
            });
        });
        describe('posts.author', function ()
        {
            beforeEach(function ()
            {
                angular.forEach(blogPostCtrl.posts, function (value)
                {
                    this.push(value.author);
                }, postList);
            });
            it('should set author', function ()
            {
                expect(postList).toEqual(['Jack', 'Jill']);
            });
        });
        describe('posts.title', function ()
        {
            beforeEach(function ()
            {
                angular.forEach(blogPostCtrl.posts, function (value)
                {
                    this.push(value.title);
                }, postList);
            });
            it('should set title', function ()
            {
                expect(postList).toEqual(['Diving Deep with Dependency Injection', 'Practical End-to-End Testing with Protractor']);
            });
        });
    });
});
