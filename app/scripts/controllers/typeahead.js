'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function ($filter,ContactDAO) {

    this.selected = undefined;

    this.getContacts=function(typedValue){
	// need to write this function body
    }

    this.selectContact=function(item,model,label){
        this.selected=item;
    }
});