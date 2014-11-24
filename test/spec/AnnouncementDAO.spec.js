describe("AnnouncementDAO", function ()
{
    'use strict';

    beforeEach(module('exerciseApp'));

    var data;
    var announcements;

    beforeEach(inject(function ($timeout, AnnouncementDAO)
    {
        announcements = [
            { id: 1, title: 'Announcement 1', description: 'I want to buy new car...' } ,
            { id: 2, title: 'Announcement 2', description: 'I want to buy new bike...' },
            { id: 3, title: 'Announcement 3', description: 'I want to buy new-old Fiat 126 p...' },
            { id: 4, title: 'Announcement 4', description: 'I want to buy something to eat...' }
        ];

        AnnouncementDAO.query().then(function (result)
        {
            data = result;
        });
        $timeout.flush();
    }));

    it("should return object", function ()
    {
        expect(data).toEqual(jasmine.any(Object))
    });
    it("should set announcements id", function ()
    {
        expect(data[0].id).toBe(1);
    });
    it("should set announcements title", function ()
    {
        expect(data[0].title).toBe('Announcement 1');
    });
    it("should set announcements description", function ()
    {
        expect(data[0].description).toBe('I want to buy new car...');
    });
});
