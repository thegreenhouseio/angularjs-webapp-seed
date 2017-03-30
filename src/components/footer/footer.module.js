import FooterComponent from './footer.component';

export default angular
  .module('tgh.component.footer', [])
  .directive('tghFooter', () => new FooterComponent);  // eslint-disable-line new-parens