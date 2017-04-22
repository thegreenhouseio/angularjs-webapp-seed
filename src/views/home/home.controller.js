export default class HomeController {
  constructor (primaryUser) {
    'ngInject';

    this.name = `${primaryUser.firstName} ${primaryUser.lastName}`;
  }
}