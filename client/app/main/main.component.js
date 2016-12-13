import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import search from '../search/search.filter'

export class MainController {
  $http;
  $state;
  email = '';
  searchResults = [];
  Auth;

  /*@ngInject*/
  constructor($http, $state, $scope, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
    this.Auth = Auth;
  }

  $onInit() {
    this.$http.get('/api/items')
      .then(response => {
        this.searchResults = response.data;
      });
  }
}

export default angular.module('projectApp.main', [uiRouter, 'projectApp.auth', 'projectApp.search'])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAS: 'main'
  })
  .name;
