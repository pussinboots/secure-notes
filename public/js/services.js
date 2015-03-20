'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

    $provide.factory('Notes', function ($resource) {
        return $resource('/rest/notes', {}, {
            get: { method: 'GET', isArray: false, crypt: true},
            save: { method: 'POST', crypt: true}            
        });
    });
});
