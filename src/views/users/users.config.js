import UsersController from './users.controller';
import UsersTemplate from './users.template.html';

export default function UsersConfig($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'users',
    url: '/users',
    template: UsersTemplate,
    controller: UsersController,
    controllerAs: 'vm',
    resolve: {
      primaryUser: ['UsersService', function (UsersService) {
        return UsersService.getPrimaryUser();
      }]
    }
  });
}