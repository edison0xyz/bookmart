'use strict';

import angular from 'angular';
import routes from './manage.routes';
import ManageController from './manage.controller';

export default angular.module('projectApp.admin', ['projectApp.auth', 'ui.router'])
  .config(routes)
  .controller('ManageController', ManageController)
  .name;
