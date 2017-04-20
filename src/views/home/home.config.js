import HomeTemplate from './home.template.html';
import HomeController from './home.controller';

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