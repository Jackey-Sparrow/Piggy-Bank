/**
 * Created by Jackey Li on 2015/9/29.
 */
(function (angular) {
    'use strict';

    var moduleName = 'platformApp';

    /**
     * tokenAuthentication
     */
    angular.module(moduleName)
        .provider('tokenAuthentication', {
            url: null,
            setUrl: function (url) {
                this.url = url;
            },

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
                        $http.post(that.url, options).then(function (response) {
                            console.log(response);
                            if (response.data && response.data.status) {

                                setToken({access_token: response.data.token});
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

                    function setToken(tokenData) {
                        if (!tokenData.expiration) {
                            //start from 1970/01/01
                            //1000*60 one min
                            var expiration = new Date().getTime() + 1000 * 60;
                            tokenData.expiration = expiration;
                        }
                        var $http = $http || $injector.get('$http');
                        $http.defaults.headers.common['Authorization'] = 'Bearer ' + tokenData.access_token;
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
                            else {
                                if (new Date().getTime() > tokenData.expiration) {
                                    $rootScope.$broadcast('tokenOutOfExpiration');
                                    return false;
                                } else {
                                    setToken(tokenData);
                                    loginSuccess();

                                    return true;
                                }
                            }
                        });
                    }

                    return {
                        checkTokenValid: checkTokenValid,
                        setToken: setToken,
                        getToken: getToken,
                        login: login
                    };

                }]
        });
})(angular);