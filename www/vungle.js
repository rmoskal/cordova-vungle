/// <reference path='vungle.d.ts'/>
var CC;
(function (CC) {
    var Vungle = (function () {
        function Vungle() {
        }
        Vungle.prototype.isSupported = function () {
            return true;
        };
        Vungle.prototype.init = function (vungleid, config, successcb, errorcb) {
            window.cordova.exec(function () {
                if (successcb)
                    successcb();
            }, function (err) {
                if (errorcb)
                    errorcb(err);
            }, "VunglePlugin", "init", [vungleid, config]);
        };

        Vungle.prototype.playAd = function (config, successcb, errorcb) {
            window.cordova.exec(function () {
                if (successcb)
                    successcb();
            }, function (err) {
                if (errorcb)
                    errorcb(err);
            }, "VunglePlugin", "playAd", [config]);
        };

        Vungle.prototype.isVideoAvailable = function (successcb, errorcb) {
            window.cordova.exec(function (s) {
                successcb(s == 1 ? true : false);
            }, function (err) {
                if (errorcb)
                    errorcb(err);
            }, "VunglePlugin", "isVideoAvailable", []);
        };
        return Vungle;
    })();
    CC.Vungle = Vungle;
})(CC || (CC = {}));