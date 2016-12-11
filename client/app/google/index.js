'use strict';

import angular from 'angular';
import routes from './google.routes';

export default angular.module('projectApp.google', ['projectApp.auth', 'ui.router'])
  .config(routes)
  .name;
