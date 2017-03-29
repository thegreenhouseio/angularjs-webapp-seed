import BootstrapComponent from './bootstrap.component';
import FooterComponent from '../footer/footer.module';
import HeaderComponent from '../header/header.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent);