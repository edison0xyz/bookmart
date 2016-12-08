'use strict';

import angular from 'angular';
import routes from './manage.routes';
import ManageController from './manage.controller';

export default angular.module('projectApp.manage', ['projectApp.auth', 'ui.router', 'ui.bootstrap'])
  .config(routes)
  .controller('ManageController', ManageController)
  .name;
