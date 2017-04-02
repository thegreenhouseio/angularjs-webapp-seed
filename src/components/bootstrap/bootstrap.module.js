import BootstrapComponent from './bootstrap.component';
import '../footer/footer.module';
import '../header/header.module';
import '../navigation/navigation.module';
import '../../services/users.module';
import '../../views/home/home.module';
import '../../views/users/users.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.component.navigation',
    'tgh.services.users',
    'tgh.view.home',
    'tgh.view.users'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent());