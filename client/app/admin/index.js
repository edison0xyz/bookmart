'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('projectApp.admin', ['ui.router', 'projectApp.auth'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
