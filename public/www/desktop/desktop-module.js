/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'desktop';

    /**
     * desktop module
     */
    angular.module(moduleName, [])
        .config(function ($stateProvider, $urlRouterProvider,$translateProvider) {
            $stateProvider

                // setup an abstract state for the tabs directive
                .state('desktop', {
                    url: '/desktop',
                    //abstract: true,
                    templateUrl: 'desktop/templates/desktop.html',
                    resolve: {
                        checkTokenValid: ['tokenAuthentication', function (tokenAuthentication) {
                            return tokenAuthentication.checkTokenValid();
                        }],
                        defaultState: ['$q', 'servicesLoginService', 'checkTokenValid', function ($q, servicesLoginService, checkTokenValid) {
                            //check token here
                            //ps: inject the checkTokenValid,let setToken run first
                            return servicesLoginService.checkLoginInfo();
                        }]
                    }
                });

            $urlRouterProvider.otherwise('/desktop');

            $translateProvider.translations('en', {
                desktop: {
                    dash: 'dash',
                    chats: 'chats',
                    account: 'account'
                }
            });

            $translateProvider.translations('cn', {
                desktop: {
                    dash: '面板',
                    chats: '聊天',
                    account: '账号'
                }
            });
        });
})(angular);