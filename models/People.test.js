const People = require('./People');

describe('People Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const people = new People({
        age: 15,
        weight: '10 lbs'
      });
      const { errors } = people.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
  describe('is human', () => {
    it('sends error if human is not true or false', () => {
      const people = new People({
        name: 'mayble',
        human: 'alien',
        age: 5,
        weight: '5 lbs'
      });
      const { errors } = people.validateSync();
      expect(errors.human.message).toEqual('Cast to Boolean failed for value "alien" at path "human"');
    });
  });
  describe('age', () => {
    it('should be under 110', () => {
      const people = new People({
        name: 'mayble',
        age: 111,
        weight: '5 lbs'
      });
      const { errors } = people.validateSync();
      expect(errors.age.message).toEqual('Path `age` (111) is more than maximum allowed value (110).');
    });
    it('is over 0', () => {
      const people = new People({
        name: 'mayble',
        age: -1,
        weight: '5 lbs'
      });
      const { errors } = people.validateSync();
      expect(errors.age.message).toEqual('Path `age` (-1) is less than minimum allowed value (0).');
    });
  });
  describe('weight', () => {
    it('is required', () => {
      const people = new People({
        name: 'mayble',
        age: 1
      });
      const { errors } = people.validateSync();
      expect(errors.weight.message).toEqual('Path `weight` is required.');
    });
  });
});
