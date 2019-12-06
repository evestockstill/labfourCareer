const Cat = require('./Cat');

describe('Cat Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const cat = new Cat({
        shortHair: true,
        age: 15,
        weight: '10 lbs' 
      });
      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
  describe('shortHair', () => {
    it('sends error if shortHair is missing', () => {
      const cat = new Cat({
        name: 'sailor',
        age: 5,
        weight: '5 lbs'
      });
      const { errors } = cat.validateSync();
      expect(errors.shortHair.message).toEqual('Path `shortHair` is required.');
    });
  });
  describe('age', () => {
    it('should be under 40', () => {
      const cat = new Cat({
        name: 'sailor',
        shortHair: false,
        age: 50,
        weight: '5 lbs' 
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` (50) is more than maximum allowed value (40).');
    });
    it('is over 0', () => {
      const cat = new Cat({
        name: 'sailor',
        shortHair: false,
        age: -1,
        weight: '5 lbs'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` (-1) is less than minimum allowed value (0).');
    });
  });
  describe('weight', () => {
    it('is required', ()=> {
      const cat = new Cat({
        name: 'sailor',
        shortHair: false,
        age: 1
      });
      const { errors } = cat.validateSync();
      expect(errors.weight.message).toEqual('Path `weight` is required.');
    });
  });
});
