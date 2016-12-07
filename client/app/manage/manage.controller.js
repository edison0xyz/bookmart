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

  markSold(id) { 
    console.log(id);
    this.$http.patch(`/api/items/${id}`);
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i]._id == id) { 
        console.log(this.list[i]);
      }
    }
    this.$state.reload();
  }

  deleteListing(id) {
    console.log(id);
    this.$http.delete(`/api/items/${id}`);
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i]._id == id) { 
        this.list.splice(i, 1);
      }
    }
  }
}
