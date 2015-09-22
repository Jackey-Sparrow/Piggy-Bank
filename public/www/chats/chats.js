/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';
    var moduleName = 'chats';

    angular.module(moduleName, [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('desktop.chats', {
                    url: '/chats',
                    views: {
                        'desktop-chats': {
                            templateUrl: 'chats/templates/tab-chats.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('desktop.chat-detail', {
                    url: '/chats/:chatId',
                    views: {
                        'desktop-chats': {
                            templateUrl: 'chats/templates/chat-detail.html',
                            controller: 'ChatDetailCtrl'
                        }
                    }
                });
        });
})(angular);