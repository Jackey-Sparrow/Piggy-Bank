/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'platformApp';

    angular.module(moduleName, ['pascalprecht.translate']);

    //keep the tabs in the bottom in IOS and Android
    angular.module(moduleName).config(function ($ionicConfigProvider) {
        //tab position in ios android
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

    });

    /**
     * translation
     */
    angular.module(moduleName)
        .config(function ($translateProvider) {

            //translate
            $translateProvider.translations('en', {
                common: {
                    systemInfo: 'system info'
                },
                login: {
                    userName: 'UserName',
                    password: 'Password',
                    language: 'Language',
                    login: 'Login',
                    error: ''
                },
                contacts: {
                    contactsName: 'Contacts',
                    search: 'Search'
                },
                setting: {
                    settingName: 'Setting',
                    feekback: 'Feekback',
                    update: 'Update',
                    language: 'Language',
                    about: 'About',
                    logout: 'Log out'
                },
                language: {
                    english: 'English',
                    chinese: 'Chinese',
                    title: 'Language',
                    switchLanguage: 'switch Language'
                }
            });

            $translateProvider.translations('cn', {
                common: {
                    systemInfo: '系统消息',
                    about: 'Jackey Sparrow \n  Github:https://github.com/Jackey-Sparrow'
                },
                login: {
                    userName: '用户名',
                    password: '密码',
                    language: '语言',
                    login: '登录',
                    error: ''
                },
                contacts: {
                    contactsName: '通讯录',
                    search: '搜索'
                },
                setting: {
                    settingName: '设置',
                    feekback: '意见返馈',
                    update: '检测更新',
                    language: '切换语言',
                    about: '关于我们',
                    logout: '登出'
                },
                language: {
                    english: '英文',
                    chinese: '中文',
                    title: '语言',
                    switchLanguage: '转换语言'
                }
            });

            var key = 'en';

            //get localStorage
            var lastStoreUser = JSON.parse(localStorage.getItem('piggyBankUserInfo')) || [];
            if (lastStoreUser && lastStoreUser.languageTranslate) {
                key = lastStoreUser.languageTranslate;
            }

            $translateProvider.preferredLanguage(key);
        });

        //shoule use {'xx'|translate}
    //angular.module(moduleName).config(function ($translateProvider, $translatePartialLoaderProvider) {
    //
    //    $translateProvider.useLoader('$translatePartialLoader', {
    //        urlTemplate: '{part}/content/i18n/{lang}.json'
    //    });
    //
    //    $translatePartialLoaderProvider.addPart('app');
    //    $translateProvider.fallbackLanguage('en');
    //    $translateProvider.translationNotFoundIndicator('X');
    //
    //    //var lastUsedLanguage = globals.readLastLanguageFromStorage();
    //
    //    //if (lastUsedLanguage) {
    //    //$translateProvider.use(lastUsedLanguage.language);
    //    //} else {
    //
    //    $translateProvider.use('en');
    //
    //
    //    // }
    //})

    //angular.module(moduleName).config(function ($translateProvider) {
    //    $translateProvider.useStaticFilesLoader({
    //        'prefix': 'app/content/i18n/',
    //        'suffix': '.json'
    //    });
    //
    //    $translateProvider.preferredLanguage('en');
    //    //$translateProvider.forceAsyncReload(true);
    //});


})(angular);