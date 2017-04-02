export default class HomeComponent {
  constructor() {
    this.template = require('./home.component.html');
    this.restrict = 'E';
    this.controller = ['UsersService', HomeComponentController];
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {};
  }
}

class HomeComponentController {
  constructor (UsersService) {
    'ngInject';

    let primaryUser = UsersService.getPrimaryUser();

    this.name = `${primaryUser.firstName} ${primaryUser.lastName}`;
  }
}