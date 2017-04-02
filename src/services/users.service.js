export default class UsersService {
  constructor() {
    this.users = [{
      id: 1,
      firstName: 'Owen',
      lastName: 'Buckley',
      isPrimary: true
    }];
  }

  getUsers() {
    return this.users;
  }

  getPrimaryUser() {
    // console.log('this.users', this.users);  // eslint-disable-line no-console
    let primaryUser = this.users.filter((user) => {
      return user.isPrimary;
    });

    return primaryUser[0];
  }

  addUser(id, firstName, lastName) {
    this.users.push({
      id,
      firstName,
      lastName
    });
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => {
      return user.id !== id;
    });
  }
}