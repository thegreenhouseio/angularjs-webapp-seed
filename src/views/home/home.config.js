import HomeController from './home.controller';
import HomeTemplate from './home.template.html';

export default function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'home',
    url: '/home',
    template: HomeTemplate,
    controller: HomeController,
    controllerAs: 'vm',
    resolve: {
      primaryUser: ['UsersService', function (UsersService) {
        return UsersService.getPrimaryUser();
      }]
    }
  });
}