import './navigation.module';

describe('tgh.component.navigation', () => {
  let scope, element;

  beforeEach(angular.mock.module('tgh.component.navigation'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $rootScope = _$rootScope_, $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<tgh-navigation></tgh-navigation>');

    $compile(element)(scope);
    scope.$digest();
  }));

  afterEach(function () {
    scope = null;
    element = null;
  });

  it('should test the navigation component exists', () => {
    expect(scope).toBeDefined();
    expect(element).toBeDefined();
    expect(element.find('nav').length).toBe(1);
    expect(element.find('ul').length).toBe(1);
  });

  it('should test that links are set correctly', () => {
    let links = element.find('a');

    expect(element.find('li').length).toBe(2);
    expect(element.find('a').length).toBe(2);

    expect(links[0].text).toBe('Home');
    expect(links[1].text).toBe('Users');
  });

});