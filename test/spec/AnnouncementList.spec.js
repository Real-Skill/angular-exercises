describe("AnnouncementListCtrl", function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var announcementListCtrl;
    var AnnouncementDAOMock;
    var announcements;
    var announcementsList;

    beforeEach(inject(function ($controller)
    {
        announcementsList = [];
        announcements = [
            {   id: 1,
                title: 'Announcement 1',
                description: 'I want to buy new car...'
            },
            {   id: 2,
                title: 'Announcement 2',
                description: 'I want to buy new bike...'
            },
            {   id: 3,
                title: 'Announcement 3',
                description: 'I want to buy new-old Fiat 126 p...'
            },
            {   id: 4,
                title: 'Announcement 4',
                description: 'I want to buy something to eat...'
            }
        ];

        AnnouncementDAOMock = jasmine.createSpyObj('AnnouncementDAO', ['query']);
        AnnouncementDAOMock.query.andReturn(successfulPromise(announcements));
        announcementListCtrl = $controller('AnnouncementListCtrl', {AnnouncementDAO: AnnouncementDAOMock})
    }));

    describe("AnnouncementDAO.query()", function ()
    {
        it("should be called", function ()
        {
            expect(AnnouncementDAOMock.query).toHaveBeenCalled();
        });
    });

    describe("'announcements' list", function ()
    {
        beforeEach(function ()
        {
            angular.forEach(announcementListCtrl.announcements, function (value)
            {
                this.push(value);
            }, announcementsList);
        });
        it("should exist", function ()
        {
            expect(announcementListCtrl.announcements).not.toBe(undefined);
        });
        it("should be an array", function ()
        {
            expect(announcementListCtrl.announcements instanceof Array).toBe(true);
        });
        it("should set announcements properties", function ()
        {
            expect(announcementsList).toEqual(announcements);
        });
    });
});
