export default class HomeController {
  constructor (UsersService) {
    'ngInject';

    this.primaryUser = UsersService.getPrimaryUser();
    this.name = `${this.primaryUser.firstName} ${this.primaryUser.lastName}`;
  }
}