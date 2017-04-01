import BootstrapComponent from './bootstrap.component';
import '../footer/footer.module';
import '../header/header.module';
import '../../views/home/home.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.view.home'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent());