"use strict";
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CarController = (function () {
            function CarController($routeParams, CarsService, $location) {
                this.$routeParams = $routeParams;
                this.CarsService = CarsService;
                this.$location = $location;
                this.cars = [];
                this.makes = [];
                this.makes = CarsService.getMakes();
                this.cars = CarsService.getCars();
            }
            CarController.prototype.getCars = function (carsId) {
                var _this = this;
                this.CarsService.getCars(carsId).then(function (res) {
                    _this.cars = res.cars;
                });
            };
            return CarController;
        })();
        Controllers.CarController = CarController;
        angular.module("MyApp").controller("CarController", CarController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
