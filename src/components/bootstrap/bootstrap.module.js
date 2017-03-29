import BootstrapComponent from './bootstrap.component';

export default angular
  .module('tgh.component.bootstrap', [])
  .directive('tghBootstrap', () => new BootstrapComponent);