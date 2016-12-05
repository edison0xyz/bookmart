'use strict';

import angular from 'angular';
import routes from './sell.routes';
import SellController from './sell.controller';

export default angular.module('projectApp.admin', ['projectApp.auth', 'ui.router'])
  .config(routes)
  .controller('SellController', SellController)
  .name;
