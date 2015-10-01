/**
 * Created by Jackey Li on 15/8/26.
 */
(function (angular) {
    'use strict';

    var moduleName = 'piggyBank.language';
    /*
     * language module
     */
    angular.module(moduleName, ['pascalprecht.translate'])

        .config(function ($translateProvider) {
            $translateProvider.translations('en', {
                language: {
                    english: 'English',
                    chinese: 'Chinese',
                    title: 'Language',
                    switchLanguage: 'switch Language'
                }
            });

            $translateProvider.translations('cn', {
                language: {
                    english: '英文',
                    chinese: '中文',
                    title: '语言',
                    switchLanguage: '转换语言'
                }
            });
        });

})(angular);