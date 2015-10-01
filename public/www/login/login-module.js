/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.login';

    /**
     * login module
     */
    angular.module(moduleName, ['pascalprecht.translate'])
        .config(function ($stateProvider, $translateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'login/templates/login.html',
                controller: 'loginController'
            });

            $translateProvider.translations('en', {
                login: {
                    userName: 'UserName',
                    password: 'Password',
                    language: 'Language',
                    login: 'Login',
                    error: ''
                }
            });

            $translateProvider.translations('cn', {
                login: {
                    userName: '用户名',
                    password: '密码',
                    language: '语言',
                    login: '登录',
                    error: ''
                }
            });
        });
})(angular);