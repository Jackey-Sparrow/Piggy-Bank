/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.setting';

    angular.module(moduleName)
        .controller('settingCtrl', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        });
})(angular);