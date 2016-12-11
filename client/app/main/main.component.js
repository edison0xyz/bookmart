import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  email = '';
  searchResults = [];

  /*@ngInject*/
  constructor($http, $state, $scope) {
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
  }

  $onInit() {
    this.$http.get('/api/items')
      .then(response => {
        this.searchResults = response.data;
      });
  }

  myFilter = function(item) { 
    return item.isSold; 
  }
}

export default angular.module('projectApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
