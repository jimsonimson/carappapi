"use strict";

namespace MyApp.Controllers {
    export class CarController{
        public cars: any[] = [];
        public makes: any[] = [];

        public getCars(carsId){
            this.CarsService.getCars(carsId).then((res) => {
                this.cars = res.cars;
            });
        }


    constructor(
        private $routeParams: ng.route.IRouteParamsService,
        private CarsService: MyApp.Services.CarsService,
        private $location: ng.ILocationService
    ){
        this.makes = CarsService.getMakes();
        this.cars = CarsService.getCars();
    }
    }
    angular.module("MyApp").controller("CarController", CarController);
}
