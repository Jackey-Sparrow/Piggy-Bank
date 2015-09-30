/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.login';

    /**
     * login module
     */
    angular.module(moduleName, [])
        .config(function ($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'login/templates/login.html',
                controller: 'loginController'
            });
        });
})(angular);