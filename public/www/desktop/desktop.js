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
                        defaultState: ['$q', function ($q) {
                            //check all the info which we need here
                            setTimeout(function () {
                                return true;
                            }, 5000);
                        }]
                    }
                });

            $urlRouterProvider.otherwise('/desktop/dash');
        });
})(angular);