export default class UsersController {
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