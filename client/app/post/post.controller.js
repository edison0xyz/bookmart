'use strict';
// @flow
// import angular from 'angular';
export default class PostController {
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state, $http) {
    this.Auth = Auth;
    this.$http = $http;
    this.$state = $state;
  }
  sellBook(form) {

    this.submitted = true;

    if(form.$valid) {
      this.$http.post('/api/items', {
      title: this.title,
      condition: this.condition,
      description: this.description,
      price: this.price,
      isSold: false,
      sellerName: this.Auth.getCurrentUserSync().name,
      sellerEmail: this.Auth.getCurrentUserSync().email,
      sellerPhone: this.Auth.getCurrentUserSync().phone,
      date: new Date()
    });
    }
    
  }
}
