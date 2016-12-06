'use strict';

export default class ManageController {
  list = [];
  $http;
  $state;
  Auth;
  email = '';

  /*@ngInject*/
  constructor($http, $state, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.Auth = Auth;
  }

  $onInit() { 
    this.$http.get('/api/items')
      .then(response=> {
        this.list = response.data;
      });
  }  
}
