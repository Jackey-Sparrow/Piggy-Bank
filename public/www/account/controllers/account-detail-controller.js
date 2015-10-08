/**
 * Created by Jackey Li on 2015/10/8.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.account';

    angular.module(moduleName)
        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        });
})(angular);