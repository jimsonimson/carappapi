"use strict";
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CarSearchController = (function () {
            function CarSearchController() {
            }
            CarSearchController.prototype.fetch = function () {
                if (this.carSearch) {
                    console.log('searching');
                    this.$http.get();
                }
            };
            return CarSearchController;
        })();
        Controllers.CarSearchController = CarSearchController;
        angular.module('MyApp').controller('CarSearchController', CarSearchController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
