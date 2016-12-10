'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('post', {
    url: '/post',
    template: require('./post.html'),
    controller: 'PostController',
    controllerAs: 'post',
    authenticate: 'user'
  });
}
