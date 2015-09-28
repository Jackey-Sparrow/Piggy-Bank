/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    var moduleName = 'dash';

    /**
     * dash module
     */
    angular.module(moduleName)
        .controller('DashCtrl', ['$scope', '$http', function ($scope, $http) {
            var options = {
                userName: 'Jackey',
                password: 123
            };
            $http.post(globals.webApi + '/addUser', options).then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }]);
})(angular);