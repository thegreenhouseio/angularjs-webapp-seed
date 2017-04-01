import './components/bootstrap/bootstrap.module';
import uirouter from 'angular-ui-router';

angular
  .module('tgh', [
    uirouter,
    'tgh.component.bootstrap'
  ]).config(routing);

function routing ($urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/home');
}