'use strict';
// @flow
// import angular from 'angular';
export default class PostController {
  errors = {};
  submitted = false;
  Auth;
  $state;
  max = 10;
  condition = 7;
  overStar = 1; 
  percent=70;

  alerts = [
  ];

  /*@ngInject*/
  constructor(Auth, $state, $http) {
    this.Auth = Auth;
    this.$http = $http;
    this.$state = $state;
  }

  hoveringOver = function(value) {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  closeAlert = function(index) {
    this.alerts.splice(index, 1);
  };
  addAlert = function(type, text) {
    this.alerts.push({type: type, msg: text});
  };


  sellBook(form) {
    this.submitted = true;

    if(form.$valid) {
        return this.$http.post('/api/items', {
        title: this.title,
        condition: this.condition,
        description: this.description,
        author: this.author,
        price: this.price,
        isSold: false,
        sellerName: this.Auth.getCurrentUserSync().name,
        sellerEmail: this.Auth.getCurrentUserSync().email,
        sellerPhone: this.Auth.getCurrentUserSync().phone,
        date: new Date()
      })
        .then(()=> {
          console.log("success sale");
          this.addAlert('success', 'Your listing for '+this.title +' is successfully posted!');
          this.submitted = false;
          this.title ='';
          this.author='';
          this.condition='';
          this.description='';
          this.price='';
        });
    }
  }
}
