(function ()
{
    'use strict';

    function PreferenceCtrl()
    {
        var ctrl = this;
        this.filter = {
            maxResults: 10,
            query: null
        };

        this.preferenceList = {};
        this.filmList = [];
        this.musicTypeList = [];

        this.select2Options = {
            allowClear: true,
            multiple: false,
            width: 'resolve',
            minimumInputLength: 1,
            query: getColorList
        };

        this.choices = {name: '', color: '', music: null, filmGenres: []};

        function getColorList(query)
        {
            ctrl.filter.query = query.term.toLowerCase();
         //add query from PreferenceDAO
        }

        //add getMusicTypes from PreferenceDAO

        //add getFilmGenres from PreferenceDAO


        this.toggleSelection = function (film)
        {
            var idx = ctrl.choices.filmGenres.indexOf(film);
            if (idx > -1) {
                ctrl.choices.filmGenres.splice(idx, 1);
            } else {
                ctrl.choices.filmGenres.push(film.type);
            }
        };

        this.addPreferences = function ()
        {
            //add save from PreferenceDAO

        };

        this.deletePreferences = function (id)
        {
            //add remove from PreferenceDAO

        };

    }

    var module = angular.module('exerciseApp');
    module.controller('PreferenceCtrl', [PreferenceCtrl]);
})();
