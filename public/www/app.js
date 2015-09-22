var requireModules = [
    'ionic',
    'starter.controllers',
    'starter.services',
    'desktop',
    'dash',
    'setting'
];

angular.module('starter', requireModules)

    .run(function ($ionicPlatform) {
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
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            //.state('desktop', {
            //    url: '/desktop',
            //    abstract: true,
            //    templateUrl: 'desktop/templates/desktop.html'
            //})


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

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/desktop/dash');

    });
