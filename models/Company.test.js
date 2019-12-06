const Comapany = require('./Company');

describe('Company Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const company = new Comapany({
        phone: '503-777-7777',
        website: true
      });
      const { errors } = company.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('phone number', () => {
    it('has a phone number with less than 20 characters', () => {
      const company = new Comapany({
        name: 'alchemy',
        phone: '503-777-7777-777777777',
        website: true
        
      });
      const { errors } = company.validateSync();
      expect(errors.phone.message).toEqual('Path `phone` (`503-777-7777-777777777`) is longer than the maximum allowed length (20).');
    });
  });

  describe('website', () => {
    it('requires a valid website', () => {
      const company = new Comapany({
        name: 'alchemy',
        phone: '503-777-7777',
        website: 'htppalchemy@websitecom'
      });
      const { errors } = company.validateSync();
      expect(errors.website.message).toEqual('Path `website` is invalid (htppalchemy@websitecom).');
    });
  });
});
