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
        ['$q', '$http','$ionicLoading',
            function ($q, $http,$ionicLoading) {
                var service = {};

                service.checkLoginInfo = function () {
                    $ionicLoading.show();
                    return $http.post(globals.webApi + '/checkToken')
                        .then(function (response) {
                            //if(response){}
                            if(response&&response.data){
                                $ionicLoading.hide();
                                return response.data;
                            }
                            $ionicLoading.hide();
                        }, function () {
                            $ionicLoading.hide();
                        });
                };

                return service;
            }]);
})(angular);