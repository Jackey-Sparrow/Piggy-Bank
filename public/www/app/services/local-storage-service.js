/**
 * Created by Jackey Li on 2015/9/24.
 */

(function (angular) {
    'use strict';

    var moduleName = 'platformApp';
    /*
     * local storage service
     */
    angular.module(moduleName).
        factory('localStorageService',
        ['$window',
            function ($window) {

                var service = {};

                /*
                 * set value from localStorage by key
                 */
                var setValue = function (key, value) {
                    $window.localStorage[key] = value;
                };

                /*
                 * get value from localStorage by key
                 */
                var get = function (key, defaultValue) {
                    return $window.localStorage[key] || defaultValue;
                };

                /*
                 * set object from localStorage by key
                 */
                var setObj = function (key, value) {
                    $window.localStorage[key] = JSON.stringify(value);
                };

                /*
                 * get object from localStorage by key
                 */
                var getObj = function (key) {
                    var result = $window.localStorage[key];
                    if (result) {
                        return JSON.parse(result);
                    }
                    return null;
                };

                /*
                 * set userInfo
                 */
                service.setUserInfo = function (obj) {
                    setObj('piggyBankUserInfo', obj);
                };

                /*
                 * get user info
                 */
                service.getUserInfo = function () {
                    return getObj('piggyBankUserInfo');
                };

                return service;
            }]);
})(angular);