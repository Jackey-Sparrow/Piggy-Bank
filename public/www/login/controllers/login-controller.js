/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.login';


    /* jshint -W072 */ // many parameters because of dependency injection
    angular.module(moduleName).controller('loginController',
        ['$scope', '$state', '$http', '$translate', 'languageService', 'localStorageService', '$ionicLoading', '$injector',
            function ($scope, $state, $http, $translate, languageService, localStorageService, $ionicLoading, $injector) {

                $scope.showLoading = function () {
                    $ionicLoading.show({
                        template: '<ion-spinner class="spinner-light"></ion-spinner>'
                    });
                };

                //hide loading
                $scope.hideLoading = function () {
                    $ionicLoading.hide();
                };


                $scope.login = {
                    userName: '',
                    password: '',
                    error: '',
                    languageId: 1,
                    userNameLabel: $translate.instant('login.userName'),
                    passwordLabel: $translate.instant('login.password'),
                    languageLabel: $translate.instant('login.language'),
                    loginLabel: $translate.instant('login.login'),
                    loginFn: function () {
                        var language = $scope.chooseLanguage;
                        $scope.showLoading();
                        var options = {
                            userName: $scope.login.userName,
                            password: $scope.login.password
                        };
                        $http.post(globals.webApi + '/login', options).then(function (response) {
                            console.log(response);

                            var $http = $http || $injector.get('$http');
                            $http.defaults.headers.common['Authorization'] = response.data;

                            localStorageService.setUserInfo({
                                userName: $scope.login.userName,
                                password: $scope.login.password,
                                languageId: language.LanguageId,
                                language: language.language,
                                languageName: language.LanguageName,
                                languageTranslate: language.languageTranslate
                            });
                            $scope.hideLoading();
                            $state.go('desktop.dash');
                        }, function (error) {
                            console.log(error);
                            $scope.hideLoading();
                        });
                    }
                };

                //get localStorage userInfo
                var user = localStorageService.getUserInfo();
                if (user) {
                    $scope.login.userName = user.userName;
                    $scope.login.password = user.password;
                    $scope.login.languageId = user.languageId;
                }

                //set the language
                $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);

                //extend basic controller
                //basicControllerService.initController($scope);

                //get language from language service
                $scope.languages = languageService.getList();

                /*
                 * change language and reset the translate setting
                 */
                $scope.changeLanguage = function () {
                    $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);
                    //change the language setting
                    $translate.use($scope.chooseLanguage.languageTranslate);

                    $scope.login.userNameLabel = $translate.instant('login.userName');
                    $scope.login.passwordLabel = $translate.instant('login.password');
                    $scope.login.languageLabel = $translate.instant('login.language');
                    $scope.login.loginLabel = $translate.instant('login.login');
                    //set the language translate
                    languageService.refreshLanguage();
                };


            }
        ]);


})(angular);