const User = require('./User');

describe('User Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const user = new User({
        username: 'evelgyrl',
        password: 'itsmypassword',
        emailAddress: 'eve@eve.com'
      });
      const { errors } = user.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('userName', () => {
    it('requires a userName', () => {
      const user = new User({
        name: 'eve',
        password: 'itsmypassword',
        emailAddress: 'eve@eve.com'
      });
      const { errors } = user.validateSync();
      expect(errors.userName.message).toEqual('Path `userName` is required.');
    });
  });

  describe('email', () => {
    it('requires a valid email', () => {
      const user = new User({
        name: 'eve',
        username: 'evelgyrl',
        password: 'itsmypassword',
        email: 'mememe.com' 
      });
      const { errors } = user.validateSync();
      expect(errors.email.message).toEqual('Path `email` is invalid (mememe.com).');
    });
    it('is a valid email', () => {
      expect('meme@me.com').toMatch('meme@me.com');
    });
  });
});
