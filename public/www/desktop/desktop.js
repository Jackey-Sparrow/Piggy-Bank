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
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                // setup an abstract state for the tabs directive
                .state('desktop', {
                    url: '/desktop',
                    abstract: true,
                    templateUrl: 'desktop/templates/desktop.html',
                    resolve: {
                        defaultState: ['$q','servicesLoginService', function ($q,servicesLoginService) {
                            //check all the info which we need here
                            return servicesLoginService.checkLoginInfo();
                        }]
                    }
                });

            //$urlRouterProvider.otherwise('/desktop/dash');
            $urlRouterProvider.otherwise('/login');
        });
})(angular);