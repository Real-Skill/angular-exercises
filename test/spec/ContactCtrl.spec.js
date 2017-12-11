describe('ContactCtrl', function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var contactCtrl;
    var ContactDAOMock;
    var contactList;
    var scope;
    var contacts = [
        {
            id: 1,
            email: 'example.name@domain.com',
            name: 'Example Name'
        },
        {
            id: 2,
            email: 'test.test@test.com',
            name: 'Test Name'
        },
        {
            id: 3,
            email: 'james.brown@yahoo.com',
            name: 'James Brown'
        },
        {
            id: 4,
            email: 'martin@gmail.com',
            name: 'Martin Fowler'
        }
    ];

    beforeEach(inject(function ($rootScope, $controller, $q)
    {
        scope = $rootScope.$new();
        ContactDAOMock = jasmine.createSpyObj('ContactDAO', ['query']);
        ContactDAOMock.query.andReturn($q.when(contacts));
        contactCtrl = $controller('ContactCtrl', {$scope: scope, ContactDAO: ContactDAOMock});
        $rootScope.$digest();
    }));

    describe('getContact()', function ()
    {
        beforeEach(function ()
        {
            contactCtrl.getContacts();

        });
        it('should be called', function ()
        {
            expect(ContactDAOMock.query).toHaveBeenCalled();
        });
        it('should check \'data\' length', function ()
        {
            expect(contactCtrl.data.length).toEqual(4);
        });
        describe('\'data\' list', function ()
        {
            beforeEach(function ()
            {
                contactList = [];
                angular.forEach(contactCtrl.data, function (value)
                {
                    this.push(value);
                }, contactList);
            });

            it('should exist', function ()
            {
                expect(contactCtrl.data).not.toBe(undefined);
            });

            it('should be a object', function ()
            {
                expect('object' === typeof contactCtrl.data).toBe(true);
            });
            it('should set \'brainCandies\' properties', function ()
            {
                expect(contactList).toEqual(contacts);
            });
        });
    });

    describe('selectContact()', function ()
    {
        beforeEach(function ()
        {
            contactCtrl.selectContact(contacts);

        });
        it('should set selected', function ()
        {
            expect(contactCtrl.selected).toEqual(contacts);
        });
    });
});
