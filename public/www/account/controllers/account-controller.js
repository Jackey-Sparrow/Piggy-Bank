/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.account';

    angular.module(moduleName)
        .controller('ChatsCtrl',
        ['$scope', 'Chats',
            function ($scope, Chats) {
                $scope.chats = Chats.all();
                $scope.remove = function (chat) {
                    Chats.remove(chat);
                };
            }]);
})(angular);