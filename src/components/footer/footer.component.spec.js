import './footer.module';

describe('tgh.component.footer', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.footer'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-footer></tgh-footer>');

    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function () {
    scope = null;
    element = null;
  });

  it('should test the component exists', () => {
    expect(scope).toBeDefined();
    expect(element).toBeDefined();
    expect(element.find('footer').length).toBe(1);
  });

  it('should test the year is correct', () => {
    let year = new Date().getFullYear();
    let copyright = element.find('p');

    expect(copyright.html()).toBe('© 2014 - ' + year);
    expect(copyright.length).toBe(1);
    expect(copyright.hasClass('copyright')).toBe(true);
  });

});