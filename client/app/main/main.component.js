import angular from 'angular';
import uibModal from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  searchResults = [];
  showContact=false;

  /*@ngInject*/
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }

  show(){ 
    console.log("here");
    uibModal.open();
  }

  $onInit() {
    this.$http.get('/api/items')
      .then(response => {
        this.searchResults = response.data; 
      });
  }
}

export default angular.module('projectApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
