'use strict';

angular.module('spehlivanovwebsiteApp')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
