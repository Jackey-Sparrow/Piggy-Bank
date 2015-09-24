/**
 * Created by Jackey Li on 2015/9/24.
 */
(function (angular) {
    'use strict';

    var moduleName = 'platformApp';

    angular.module(moduleName, []);


    /**
     * translation
     */
    angular.module(moduleName).config(function ($translateProvider) {

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
            tweet: {
                tweetName: 'Tweet',
                like: 'Like',
                comments: 'Comments',
                comment: 'Comment',
                share: 'Share',
                addTweet: 'Add Tweet',
                somethingNew: 'What\'s new with you',
                tweetDetail: 'Tweet Detail',
                forward: 'Forward',
                addComment: 'Add Comment',
                noComment: 'No one comments',
                commentText: 'write a comment',
                reply: 'Reply',
                copy: 'Copy',
                cancel: 'Cancel'
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
                systemInfo: 'ϵͳ��Ϣ',
                about: 'Jackey Sparrow \n  Github:https://github.com/Jackey-Sparrow'
            },
            login: {
                userName: '�û���',
                password: '����',
                language: '����',
                login: '��¼',
                error: ''
            },
            tweet: {
                tweetName: '����',
                like: '��',
                comments: '����',
                comment: '����',
                share: '����',
                addTweet: '�������',
                somethingNew: '����������',
                tweetDetail: '��������',
                forward: 'ת��',
                addComment: '�������',
                noComment: '��������',
                commentText: 'дһ������',
                reply: '�ظ�����',
                copy: '����',
                cancel: 'ȡ��'
            },
            contacts: {
                contactsName: 'ͨѶ¼',
                search: '����'
            },
            setting: {
                settingName: '����',
                feekback: '�������',
                update: '������',
                language: '�л�����',
                about: '��������',
                logout: '�ǳ�'
            },
            language: {
                english: 'Ӣ��',
                chinese: '����',
                title: '����',
                switchLanguage: 'ת������'
            }
        });

        var key = 'en';

        //get localStorage
        //var lastStoreUser = JSON.parse(localStorage.getItem('hiAppUserInfo')) || [];
        //if (lastStoreUser && lastStoreUser.languageTranslate) {
        //    key = lastStoreUser.languageTranslate;
        //}

        $translateProvider.preferredLanguage(key);
    });


})(angular);