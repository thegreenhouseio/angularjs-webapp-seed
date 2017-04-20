import uirouter from 'angular-ui-router';
import HomeConfig from './home.config';

export default angular
  .module('tgh.view.home', [
    uirouter
  ])
  .config(HomeConfig);