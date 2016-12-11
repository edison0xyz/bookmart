'use strict';

export default class ManageController {
  list = [];
  $http;
  $state;
  $uibModal;
  $scope;
  id;
  Auth;
  email = '';

  /*@ngInject*/
  constructor($http, $state, Auth, $uibModal, $scope) {
    this.$http = $http;
    this.$state = $state;
    this.Auth = Auth;
    this.$uibModal = $uibModal;
    this.$scope = $scope;
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

  open(id){
    this.$scope._id = id;
    const modalInstance = this.$uibModal.open({
      animation:true,
      template: require('./modal.html'),
      controller: "ManageController",
      controllerAs: "manage",
      scope: this.$scope
    }); 
    return modalInstance;
  }

  deleteListing(id) {
    this.$http.delete(`/api/items/${id}`);
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i]._id == id) { 
        this.list.splice(i, 1);
      }
    }
  };

  delete() { 
    this.$http.delete(`/api/items/${this.$scope._id}`);
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i]._id == this.$scope._id) { 
        this.list.splice(i, 1);
      }
    }
    this.$state.reload();
  }
}

