'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('sell', {
    url: '/sell',
    template: require('./sell.html'),
    controller: 'SellController',
    controllerAs: 'sell',
    authenticate: 'user'
  });
}
