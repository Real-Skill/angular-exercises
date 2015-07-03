describe('ReservationCtrl', function ()
{
    'use strict';

    var reservationCtrl;

    beforeEach(module('exerciseApp'));

    describe('$watch()', function ()
    {

        beforeEach(inject(function ($controller, $rootScope)
        {
            reservationCtrl = $controller('ReservationCtrl', {$scope: $rootScope});
        }));
        describe('should call save()', function ()
        {
            it('when first name was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.firstName = 'Jack';
                $rootScope.$digest();
                expect(reservationCtrl.formData.firstName).toEqual('Jack');
            }));
            it('when last name was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.lastName = 'Swan';
                $rootScope.$digest();
                expect(reservationCtrl.formData.lastName).toEqual('Swan');
            }));
            it('when email was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.email = 'jack@swan.com';
                $rootScope.$digest();
                expect(reservationCtrl.formData.email).toEqual('jack@swan.com');
            }));
            it('when select refreshment was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.selectRefreshment = 1;
                $rootScope.$digest();
                expect(reservationCtrl.formData.selectRefreshment).toEqual(1);
            }));
            it('when select zone was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.selectZone = 2;
                $rootScope.$digest();
                expect(reservationCtrl.formData.selectZone).toEqual(2);
            }));
            it('when vip was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.vip = true;
                $rootScope.$digest();
                expect(reservationCtrl.formData.vip).toBe(true);
            }));
            it('when date was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.date = '1-1-2014';
                $rootScope.$digest();
                expect(reservationCtrl.formData.date).toEqual('1-1-2014');
            }));
            it('when comments was changed', inject(function ($rootScope)
            {
                $rootScope.$digest();
                reservationCtrl.list.comments = 'comments';
                $rootScope.$digest();
                expect(reservationCtrl.formData.comments).toEqual('comments');
            }));
        });
    });
});
