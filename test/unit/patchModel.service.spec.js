describe('patchModel', function ()
{
    'use strict';

    beforeEach(module('taskApp'));

    var object, patcher, scope;
    beforeEach(inject(function ($rootScope, patchModel)
    {
        object = {id: 'oid'};
        scope = $rootScope.$new();
        patcher = patchModel(object, scope);
        scope.$digest();
    }));

    describe('on object change', function ()
    {
        describe('when neither callback nor api is provided', function ()
        {
            it('should do nothing', function ()
            {
                object.a = 1;
                scope.$digest();
            });
        });
        describe('when callback is provided', function ()
        {
            var callbackMock;
            beforeEach(function ()
            {
                callbackMock = jasmine.createSpy('callback');
                patcher.callback(callbackMock);
            });
            it('should call callback', function ()
            {
//                Given
//                When
                object.a = 1;
                scope.$digest();
//                Then
                expect(callbackMock).toHaveBeenCalledWith([
                    {op: 'add', path: '/a', value: 1}
                ]);
            });
            it('should not call callback when ignored param has changed', function ()
            {
//                Given
                patcher.ignore(['/a']);
//                When
                object.a = 1;
                scope.$digest();
//                Then
                expect(callbackMock).not.toHaveBeenCalled();
            });
            describe('when scope is destroyed and object changes', function ()
            {
                beforeEach(function ()
                {
                    scope.$destroy();
                });
                it('should not call callback', function ()
                {
//                When
                    object.a = 1;
                    scope.$digest();
//                Then
                    expect(callbackMock).not.toHaveBeenCalled();
                });
            });
        });
        describe('when api is provided', function ()
        {
            beforeEach(function ()
            {
                patcher.api('/api/object');
            });
            describe('and id is explicitly provided', function ()
            {
                beforeEach(function ()
                {
                    patcher.id(2);
                });
                it('should call api with objects id when it is provided', inject(function ($httpBackend)
                {
//                Given
                    $httpBackend.expectPATCH('/api/object/2', [
                        {op: 'add', path: '/a', value: 1}
                    ]).respond(200);

//                When
                    object.a = 1;
                    scope.$digest();
                }));
            });
            describe('and id is NOT provided', function ()
            {
                it('should call api with objects id when it is provided', inject(function ($httpBackend)
                {
//                Given
                    $httpBackend.expectPATCH('/api/object/oid', [
                        {op: 'add', path: '/a', value: 1}
                    ]).respond(200);

//                When
                    object.a = 1;
                    scope.$digest();
                }));
            });

        });
    });
});
