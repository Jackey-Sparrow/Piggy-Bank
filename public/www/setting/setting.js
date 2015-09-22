/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    /**
     * setting module
     * @type {string}
     */

    var moduleName = 'setting';
    angular.module(moduleName, [])
        .config(function ($stateProvider) {

            $stateProvider.state('desktop.account', {
                url: '/account',
                views: {
                    'desktop-account': {
                        templateUrl: 'setting/templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });
        });

})(angular);