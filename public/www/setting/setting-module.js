/**
 * Created by Jackey Li on 15/9/22.
 */
(function (angular) {
    'use strict';

    /**
     * setting module
     * @type {string}
     */

    var moduleName = 'piggyBank.setting';
    angular.module(moduleName, [])
        .config(function ($stateProvider, $translateProvider) {

            $stateProvider.state('desktop.account', {
                url: '/account',
                views: {
                    'desktop-account': {
                        templateUrl: 'setting/templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

            //translate
            $translateProvider.translations('en', {

                setting: {
                    settingName: 'Setting',
                    feekback: 'Feekback',
                    update: 'Update',
                    language: 'Language',
                    about: 'About',
                    logout: 'Log out'
                }

            });

            $translateProvider.translations('cn', {
                setting: {
                    settingName: '设置',
                    feekback: '意见返馈',
                    update: '检测更新',
                    language: '切换语言',
                    about: '关于我们',
                    logout: '登出'
                }
            });

        });

})(angular);