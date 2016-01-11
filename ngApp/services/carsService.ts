namespace MyApp.Services {
    export class CarsService {
        private carsResource;
        private makesResource;

        public getCars(){
            return this.carsResource.query();
        }
        public getMakes(){
            return this.makesResource.query();
        }

        constructor(private $resource: ng.resource.IResourceService){
            this.carsResource = $resource('/api/cars/');
            this.makesResource = $resource('/api/makes/');
        }
    }
    angular.module('MyApp').service('CarsService', CarsService);
}
