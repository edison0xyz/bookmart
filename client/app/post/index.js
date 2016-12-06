'use strict';

import angular from 'angular';
import routes from './post.routes';
import PostController from './post.controller';

export default angular.module('projectApp.admin', ['projectApp.auth', 'ui.router'])
  .config(routes)
  .controller('Post', PostController)
  .name;
