import HomeComponent from './home.component';
import uirouter from 'angular-ui-router';

export default angular
  .module('tgh.view.home', [
    uirouter
  ])
  .config(($stateProvider) => {
    $stateProvider.state({
      name: 'home',
      url: '/home',
      template: '<tgh-home-view></tgh-home-view>'
    });
  })
  .directive('tghHomeView', () => new HomeComponent());