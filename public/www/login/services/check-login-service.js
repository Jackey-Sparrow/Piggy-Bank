/**
 * Created by Jackey Li on 2015/9/28.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.login';

    /**
     * service login service
     *
     * check token
     */
    angular.module(moduleName)
        .factory('servicesLoginService',
        ['$q', '$http',
            function ($q, $http) {
                var service = {};

                service.checkLoginInfo = function () {
                    return $http.post(globals.webApi + '/checkToken')
                        .then(function (response) {
                            //if(response){}
                            return response.data;
                        });
                };

                return service;
            }]);
})(angular);