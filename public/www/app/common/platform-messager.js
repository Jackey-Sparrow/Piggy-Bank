/**
 * Created by Jackey Li on 2015/10/1.
 */
(function(angular){
    'use strict';

    angular.module('platformApp').constant('messenger', Messenger); // jshint ignore:line

    function Messenger() {

        var stacks = [];

        this.register = function (fn) {
            stacks.push(fn);
        };

        this.unRegister = function (fn) {
            for (var i = 0; i < stacks.length; i++) {
                if (stacks[i] === fn) {
                    stacks.splice(i, 1);
                }
            }
        };

        this.fire = function (e, args, scope) {
            var returnValue;
            scope = scope || this;
            for (var i = 0; i < stacks.length; i++) {
                if (_.isFunction(stacks[i])) {
                    returnValue = stacks[i].call(scope, e, args);
                }
            }
            return returnValue;
        };
    }
})(angular);