"use strict";

namespace MyApp.Controllers {

    export class CarSearchController {
        public carSearch;

        public fetch() {
            if (this.carSearch) {
                console.log('searching');
                this.$http.get()
            }
        }


    }
    angular.module('MyApp').controller('CarSearchController', CarSearchController);

}
