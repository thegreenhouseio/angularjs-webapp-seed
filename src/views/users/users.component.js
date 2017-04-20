import template from './users.component.html';

export default class UsersComponent {
  constructor() {
    this.template = template;
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

    this.UsersService = UsersService;
    this.getUsers();
  }

  getUsers() {
    this.users = this.UsersService.getUsers();
  }

  createUser(user) {
    if (user) {
      this.UsersService.addUser(user.firstName, user.lastName);
      this.reset();
    }
  }

  deleteUser(id) {
    this.UsersService.deleteUser(id);
    this.getUsers();
  }

  reset() {
    this.user = {
      firstName: '',
      lastName: ''
    };
  }
}