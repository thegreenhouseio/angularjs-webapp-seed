import UsersConfig from './users.config';

import uirouter from 'angular-ui-router';

export default angular
  .module('tgh.view.users', [
    uirouter
  ])
  .config(UsersConfig);