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
            $http.get(globals.webApi + '/test').then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }]);
})(angular);