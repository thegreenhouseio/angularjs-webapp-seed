export default class UsersService {
  constructor() {
    this.users = [{
      id: 1,
      firstName: 'Owen',
      lastName: 'Buckley',
      isPrimary: true
    }, {
      id: 2,
      firstName: 'The',
      lastName: 'Greenhouse'
    }];
  }

  getUsers() {
    return this.users;
  }

  getPrimaryUser() {
    return this.users.filter((user) => {
      return user.isPrimary;
    })[0];
  }

  addUser(firstName, lastName) {
    this.users.push({
      id: new Date().getTime(),
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