import UsersService from './users.service';

describe('tgh.services.users', () => {

  it('should test the service exists', () => {
    let service = new UsersService();

    expect(UsersService).toBeDefined();
    expect(service).toBeDefined();
    expect(service.getUsers).toBeDefined();
    expect(service.getPrimaryUser).toBeDefined();
    expect(service.addUser).toBeDefined();
    expect(service.deleteUser).toBeDefined();
  });

  it('should test that first call to getUsers returns expected default users', () => {
    let users = new UsersService().getUsers();

    expect(users.length).toBe(2);

    expect(users[0].id).toBe(1);
    expect(users[0].firstName).toBe('Owen');
    expect(users[0].lastName).toBe('Buckley');
    expect(users[0].isPrimary).toBe(true);

    expect(users[1].id).toBe(2);
    expect(users[1].firstName).toBe('The');
    expect(users[1].lastName).toBe('Greenhouse');
    expect(users[1].isPrimary).toBe(false);
  });

  it('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = new UsersService().getPrimaryUser();

    expect(primaryUser.id).toBe(1);
    expect(primaryUser.firstName).toBe('Owen');
    expect(primaryUser.lastName).toBe('Buckley');
    expect(primaryUser.isPrimary).toBe(true);
  });

  it('should test that addUsers call works as expected', () => {
    let service = new UsersService();
    let users = [];
    let found = false;
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    service.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = service.getUsers();

    // test new user was added
    users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        found = true;
      }
    });

    expect(found).toBe(true);
  });

  it('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = new UsersService().getPrimaryUser();

    expect(primaryUser.id).toBe(1);
    expect(primaryUser.firstName).toBe('Owen');
    expect(primaryUser.lastName).toBe('Buckley');
    expect(primaryUser.isPrimary).toBe(true);
  });

  it('should test that deleteUsers call works as expected when starting with default users', () => {
    let service = new UsersService();
    let users = [];
    let user = {};
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    service.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = service.getUsers();

    // get our user
    user = users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        return user;
      }
    })[0];

    // add a user
    service.deleteUser(user.id);

    // get users
    users = service.getUsers();

    expect(users.length).toBe(2);

    expect(users[0].id).toBe(1);
    expect(users[0].firstName).toBe('Owen');
    expect(users[0].lastName).toBe('Buckley');
    expect(users[0].isPrimary).toBe(true);

    expect(users[1].id).toBe(2);
    expect(users[1].firstName).toBe('The');
    expect(users[1].lastName).toBe('Greenhouse');
    expect(users[1].isPrimary).toBe(false);
  });

});