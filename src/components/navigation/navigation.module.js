import NavigationComponent from './navigation.component';

export default angular
  .module('tgh.component.navigation', [])
  .directive('tghNavigation', () => new NavigationComponent());