import UsersService from './users.service';

describe('tgh.services.users', () => {
  let usersService;

  beforeEach(inject(function() {
    usersService = new UsersService();
  }));

  afterEach(function() {
    usersService = null;
  });

  it('should test the service exists', () => {
    expect(UsersService).toBeDefined();
    expect(usersService).toBeDefined();
    expect(usersService.getUsers).toBeDefined();
    expect(usersService.getPrimaryUser).toBeDefined();
    expect(usersService.addUser).toBeDefined();
    expect(usersService.deleteUser).toBeDefined();
  });

  it('should test that first call to getUsers returns expected default users', () => {
    let users = usersService.getUsers();

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
    let users = [];
    let found = false;
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    usersService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = usersService.getUsers();

    // test new user was added
    users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        found = true;
      }
    });

    expect(found).toBe(true);
  });

  it('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = usersService.getPrimaryUser();

    expect(primaryUser.id).toBe(1);
    expect(primaryUser.firstName).toBe('Owen');
    expect(primaryUser.lastName).toBe('Buckley');
    expect(primaryUser.isPrimary).toBe(true);
  });

  it('should test that deleteUsers call works as expected when starting with default users', () => {
    let users = [];
    let user = {};
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    usersService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = usersService.getUsers();

    // get our user
    user = users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        return user;
      }
    })[0];

    // add a user
    usersService.deleteUser(user.id);

    // get users
    users = usersService.getUsers();

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