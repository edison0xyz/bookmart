'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('manage', {
    url: '/manage',
    template: require('./manage.html'),
    controller: 'ManageController',
    controllerAs: 'manage',
    authenticate: 'user'
  });
}