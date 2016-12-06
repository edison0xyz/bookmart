import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  searchResults = [];

  /*@ngInject*/
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }

  $onInit() {
    this.$http.get('/api/items')
      .then(response => {
        this.searchResults = response.data; 
      });
  }

  // addThing() {
  //   console.log(this.newThing);
  //   if(this.newThing) {
  //     this.$http.post('/api/things', {
  //       name: this.newThing
  //     });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }
}

export default angular.module('projectApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
