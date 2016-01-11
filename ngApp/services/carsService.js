var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CarsService = (function () {
            function CarsService($resource) {
                this.$resource = $resource;
                this.carsResource = $resource('/api/cars/');
                this.makesResource = $resource('/api/makes/');
            }
            CarsService.prototype.getCars = function () {
                return this.carsResource.query();
            };
            CarsService.prototype.getMakes = function () {
                return this.makesResource.query();
            };
            return CarsService;
        })();
        Services.CarsService = CarsService;
        angular.module('MyApp').service('CarsService', CarsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
