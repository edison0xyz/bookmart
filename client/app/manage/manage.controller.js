'use strict';
// @flow

import angular from 'angular';

export default class ManageController {

  errors = {};
  submitted = false;
  Auth;
  $state;

  listings = [];

  /*@ngInject*/
  constructor(Auth, $state,$http) {
    this.Auth = Auth;
    this.$http = $http; 
    this.$state = $state;
  }

  $onInit() { 
    this.$http.get('/api/items')
      .then(response => { 
        this.listings = response.data;
      }); 
  }

}
