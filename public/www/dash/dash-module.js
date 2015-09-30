/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'dash';

    /**
     * dash module
     */
    angular.module(moduleName, [])
        .config(function ($stateProvider) {
            $stateProvider.state('desktop.dash', {
                url: '/dash',
                views: {
                    'desktop-dash': {
                        templateUrl: 'dash/templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            });
        });
})(angular);