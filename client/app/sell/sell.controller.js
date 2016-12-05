'use strict';
// @flow

import angular from 'angular';

type Item = {
  title: string;
  condition: string;
};

export default class SellController {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state,$http) {
    this.Auth = Auth;
    this.$http = $http; 
    this.$state = $state;
  }


  sellBook(form) {

    console.log(this.title); 

    this.$http.post('/api/items', {
      title: this.title, 
      condition: this.condition 
    }); 

    // if(this.newThing) {
    //   this.$http.post('/api/things', {
    //     name: this.newThing
    //   });
    //   this.newThing = '';
    // }

  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
