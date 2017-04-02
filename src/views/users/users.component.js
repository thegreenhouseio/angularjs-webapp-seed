export default class UsersComponent {
  constructor() {
    this.template = require('./users.component.html');
    this.restrict = 'E';
    this.controller = ['UsersService', UsersComponentController];
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {};
  }
}

class UsersComponentController {
  constructor (UsersService) {
    'ngInject';

    this.users = UsersService.getUsers();
  }
}