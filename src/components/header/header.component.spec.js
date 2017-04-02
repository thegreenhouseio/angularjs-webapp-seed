import './header.module';

describe('tgh.component.header', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.header'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-header></tgh-header>');

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
    expect(element.find('header').length).toBe(1);
  });

  it('should test the banner text is correct is correct', () => {
    let banner = element.find('h2');

    expect(banner.html()).toBe('The Greenhouse.io - AngularJS / Webpack Starter Kit');
    expect(banner.length).toBe(1);
  });

});