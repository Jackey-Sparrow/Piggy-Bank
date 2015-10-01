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
                platform: {
                    search: 'Search'
                }
            });

            $translateProvider.translations('cn', {

                platform: {
                    search: '搜索'
                }
            });

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