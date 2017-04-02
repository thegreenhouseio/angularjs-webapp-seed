import UsersComponent from './users.component';
import uirouter from 'angular-ui-router';

export default angular
  .module('tgh.view.users', [
    uirouter
  ])
  .config(($stateProvider) => {
    $stateProvider.state({
      name: 'users',
      url: '/users',
      template: '<tgh-users-view></tgh-users-view>'
    });
  })
  .directive('tghUsersView', () => new UsersComponent());