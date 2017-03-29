import HeaderComponent from './header.component';

export default angular
  .module('tgh.component.header', [])
  .directive('tghHeader', () => new HeaderComponent);