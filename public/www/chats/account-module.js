/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.account';

    /**
     *
     */
    angular.module(moduleName, [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('desktop.account', {
                    url: '/account',
                    views: {
                        'desktop-account': {
                            templateUrl: function () {
                                return 'chats/templates/account.html'
                            },
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('desktop.account-detail', {
                    url: '/account/:chatId',
                    views: {
                        'desktop-account': {
                            templateUrl: function () {
                                return 'chats/templates/account-detail.html'
                            },
                            controller: 'ChatDetailCtrl'
                        }
                    }
                });
        });
})(angular);