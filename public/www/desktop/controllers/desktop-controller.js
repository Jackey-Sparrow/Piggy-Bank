/**
 * Created by Jackey Li on 15/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'desktop';

    /**
     * desktop controller
     */
    angular.module(moduleName)
        .controller('desktopController',
        ['$scope', '$translate',
            function ($scope, $translate) {
                $scope.desktop ={
                    dash:$translate.instant('desktop.dash'),
                    chats:$translate.instant('desktop.chats'),
                    account:$translate.instant('desktop.account')
                };
            }]);
})(angular);