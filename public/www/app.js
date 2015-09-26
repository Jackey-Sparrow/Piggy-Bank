(function (angular) {
    'use strict';

    var requireModules = [
        'ionic',
        //'ionic-material',
        //'pascalprecht.translate',
        'piggyBank.language',
        'platformApp',
        'desktop',
        'dash',
        'chats',
        'setting',
        'piggyBank.login'
    ];

    angular.module('piggyBank', requireModules)

        .run(['$ionicPlatform', '$rootScope',
            function ($ionicPlatform, $rootScope) {

                $ionicPlatform.ready(function () {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);

                    }
                    if (window.StatusBar) {
                        // org.apache.cordova.statusbar required
                        StatusBar.styleLightContent();
                    }
                });

                $rootScope.$on('grantInValid', function () {
                    //show login or state.go('login');
                });


                $rootScope.$on('serverInvalid', function () {
                    //$state.go('login');
                });

            }]);

    /**
     * interceptor http
     */
    angular.module('piggyBank').factory('httpInterceptor', [
        '$q', '$rootScope', function ($q, $rootScope) {
            var interptor = {
                'responseError': function (response) {
                    if (response.status === 401) {
                        console.log('token missing');
                        $rootScope.$emit('grantInValid', response);
                        return;
                    }
                    else if (response.status === 405) {
                        console.log('server connect fail');
                        $rootScope.$emit('serverInvalid', response);
                    }
                    //return response;
                }
            };
            return interptor;
        }
    ]);

    angular.module('piggyBank').config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    });

    /**
     * bootstrap the project
     */
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['piggyBank']);
    });
})(angular);