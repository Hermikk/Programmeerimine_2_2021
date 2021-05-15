const expect = require('chai').expect;

const usersService = require('../api/services/usersService');

const existingUser = {
    id: 1,
    firstName: 'Mikk',
    lastName: 'MH',
    email: 'mh@mh.ee',
  };


  
describe('Users service', function () { 
    describe('GetUsers', function () {
        it('should return array of users', function () {
            users = usersService.getUsers();
            expect(users).to.be.a('array');
        });
        it('should contain at least 1 user', function () {
            expect(users.length).to.be.gt(1);
        });
    });
    describe('GetUser by ID', function () {
        it('should return user object with keys', function () {
          const user = usersService.getUserById(existingUser.id);
          expect(user).to.be.a('object');
          expect(user).to.have.keys(['id', 'firstName', 'lastName', 'email', 'role','password']);
        });
    });
    describe('GetUser by email', function () {
        it('should return user object with keys',  function () {
            const user =  usersService.getUserByEmail(existingUser.email);
            expect(user).to.be.a('object');
            expect(user).to.have.keys(['id', 'firstName', 'lastName', 'email', 'role','password']);
        });
    });
});
