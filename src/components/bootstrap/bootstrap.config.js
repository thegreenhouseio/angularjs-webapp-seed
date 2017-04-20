export default function BootstrapConfig ($urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/home');
}