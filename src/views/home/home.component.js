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

    this.UsersService = UsersService;
    this.getPrimaryUser();
  }

  getPrimaryUser() {
    let primaryUser = this.UsersService.getPrimaryUser();

    this.name = `${primaryUser.firstName} ${primaryUser.lastName}`;
  }
}