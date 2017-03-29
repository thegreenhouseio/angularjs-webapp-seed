import BootstrapComponent from './bootstrap.component';
import '../footer/footer.module';
import '../header/header.module';

export default angular
  .module('tgh.component.bootstrap', [
    'ngMaterial',
    'tgh.component.footer',
    'tgh.component.header'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent);
