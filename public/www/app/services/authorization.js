/**
 * Created by Jackey Li on 2015/9/29.
 */
(function (angular) {
    'use strict';

    var moduleName = 'platformApp';

    angular.module(moduleName)
        .provider('tokenAuthentication', {

            $get: ['$rootScope', '$injector', '$q',
                function ($rootScope, $injector, $q) {
                    var $http,
                        key = 'piggyBank:authenticationToken',
                        store = localStorage,
                        that = this;

                    $rootScope.userLoggedIn = false;

                    function login(options) {
                        $http = $http || $injector.get('$http');
                        var defer = $q.defer();
                        $http.post(globals.webApi + '/login', options).then(function (response) {
                            console.log(response);
                            if (response.data && response.data.status) {

                                setToken(response.data.token);
                                loginSuccess();
                                defer.resolve(response.data);
                            } else {
                                defer.reject(response.data);
                            }

                        }, function (error) {
                            defer.reject(error);
                        });
                        return defer.promise;
                    }

                    function setToken(token) {
                        var tokenData = {};
                        if (!tokenData.expiration) {
                            //1000*60 one min
                            var expiration = new Date().getTime() + 1000 * 60;
                            tokenData.expiration = expiration;
                        }
                        var $http = $http || $injector.get('$http');
                        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                        tokenData.access_token = token;
                        store.setItem(key, JSON.stringify(tokenData));
                    }

                    function getToken() {
                        var deferred = $q.defer(),
                            token = JSON.parse(store.getItem(key));
                        if (token) {
                            deferred.resolve(token);
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    }

                    function loginSuccess() {
                        $rootScope.userLoggedIn = true;
                        $rootScope.$broadcast('loginSuccess');
                    }

                    function checkTokenValid() {
                        return getToken().then(function (tokenData) {
                            $rootScope.userLoggedIn = false;
                            if (!tokenData) {
                                $rootScope.$broadcast('tokenInValid');
                                return false;
                            }
                            esle
                            {
                                if (new Date().getTime() > tokenData.expiration) {
                                    $rootScope.$broadcast('tokenOutOfExpiration');
                                    return false;
                                } else {
                                    setToken(token);
                                    $rootScope.userLoggedIn = true;
                                    $rootScope.$broadcast('loginSuccess');

                                    return true;
                                }
                            }
                        });
                    }

                    return {
                        setToken: setToken,
                        getToken: getToken,
                        login: login
                    };

                }]
        });
})(angular);