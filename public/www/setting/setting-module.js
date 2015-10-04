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

            $stateProvider.state('desktop.setting', {
                url: '/setting',
                views: {
                    'desktop-setting': {
                        templateUrl: 'setting/templates/tab-setting.html',
                        controller: 'settingCtrl'
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
                    settingName: '����',
                    feekback: '�������',
                    update: '������',
                    language: '�л�����',
                    about: '��������',
                    logout: '�ǳ�'
                }
            });

        });

})(angular);