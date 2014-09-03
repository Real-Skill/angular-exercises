'use strict';

/**
 * @ngdoc function
 * @name ngflowApp.controller:NgflowCtrl
 * @description
 * # NgflowCtrl
 * Controller of the ngflowApp
 */
angular.module('ngflowApp').controller('uploadCtrl', function ($scope) {

    this.flowCompleteFlag = false;

    this.image = undefined;

    this.startUpload = function(flow,files){
	// write function body
    }

    this.fileSuccess = function(file,message){
	// write function body
    }

    this.flowComplete=function(){
        this.flowCompleteFlag = true;
    }

});