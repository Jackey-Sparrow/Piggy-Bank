/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.login';

    /**
     * login controller
     *
     /* jshint -W072 */ // many parameters because of dependency injection
    angular.module(moduleName).controller('loginController',
        ['$scope', '$state', '$translate', 'languageService',
            'localStorageService', '$ionicLoading', 'tokenAuthentication',
            function ($scope, $state, $translate, languageService,
                      localStorageService, $ionicLoading, tokenAuthentication) {

                //todo: remove to platform Helper
                $scope.showLoading = function () {
                    $ionicLoading.show({
                        template: '<ion-spinner class="spinner-light"></ion-spinner>'
                    });
                };

                //hide loading
                $scope.hideLoading = function () {
                    $ionicLoading.hide();
                };


                /**
                 * login options
                 *
                 */
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

                        tokenAuthentication.login(options).then(function (token) {
                            //store the userInfo
                            localStorageService.setUserInfo({
                                userName: $scope.login.userName,
                                password: $scope.login.password,
                                languageId: language.LanguageId,
                                language: language.language,
                                languageName: language.LanguageName,
                                languageTranslate: language.languageTranslate
                            });
                            $scope.hideLoading();
                            $scope.login.error = '';
                            $state.go('desktop.dash');
                        }, function (error) {
                            $scope.login.error = error.message;
                            $scope.hideLoading();
                        });
                    }
                };

                //$scope.text = {};
                //
                //var loadTranslations = function () {
                //
                //    $scope.text = platformTranslateService.instant({
                //        login: ['userName', 'password', 'language']
                //    });
                //};
                //
                //// register translation changed event
                //platformTranslateService.translationChanged.register(loadTranslations);
                //
                //
                //// register a module - translation table will be reloaded if module isn't available yet
                //if (!platformTranslateService.registerModule('app')) {
                //    // if translation is already available, call loadTranslation directly
                //    loadTranslations();
                //}

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