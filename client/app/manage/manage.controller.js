'use strict';

export default class ManageController {
  list = [];
  $http;
  $state;
  $uibModal;
  $scope;
  id;
  temp;
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

  getObject(){ 
    this.$http.get(`/api/items/${this.$scope._id}`)
          .then(response => {
            this.temp = response.data;
            this.$scope.temp = this.temp;

            const modalInstance = this.$uibModal.open({
              animation:true,
              template: require('./edit.html'),
              controller: "ManageController",
              controllerAs: "manage",
              scope: this.$scope
            }); 
            return modalInstance;
          });
    return;
  }


  openEditModal(id){
    this.$scope._id = id;
    this.getObject();    
  }


  editPrice(temp) { 
    this.$http.put(`/api/items/${temp._id}&${temp.price}`);
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i]._id == this.$scope._id) { 
        this.list.splice(i, 1);
      }
    }
    this.$state.reload();

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

