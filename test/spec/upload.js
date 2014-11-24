describe("upload", function ()
{
    'use strict';

    beforeEach(module('ngflowApp'));

    var controller;
    var flowMock;
    var msg = '{"title" : "Congratulations !" , "msg" : "You just successfully upload images using ng-flow & read response message from mocked server." , "url" : "images/desktop.png"}';

    beforeEach(inject(function ($controller)
    {

        flowMock = jasmine.createSpyObj('$flow', ['upload']);
        controller = $controller('uploadCtrl', {});


    }));
    it("should flowCompleteFlag have been defined", function ()
    {
        expect(controller.flowCompleteFlag).toBeDefined;
    });
    describe("startUpload()", function ()
    {
        beforeEach(function ()
        {
            controller.startUpload(flowMock);
        });

        it("should call $flow.upload()", function ()
        {
            expect(flowMock.upload).toHaveBeenCalled();
        });
    });
    describe("fileSuccess()", function ()
    {
        beforeEach(function ()
        {
            controller.fileSuccess(undefined, msg);
        });
        it("should image has 'title', 'msg' and 'url' properties", function ()
        {
            expect(controller.image.title).toBeDefined;
            expect(controller.image.msg).toBeDefined;
            expect(controller.image.url).toBeDefined;
        });
    });
    describe("flowComplete()", function ()
    {
        beforeEach(function ()
        {
            controller.flowCompleteFlag = false;
            controller.flowComplete();
        });
        it("should set property 'flowCompleteFlag' to true", function ()
        {
            expect(controller.flowCompleteFlag).toBe(true);
        });
    });
});
