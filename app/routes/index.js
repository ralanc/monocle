import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      title: 'What went well?',
      color: 'background-color: #99ff99;',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      propertyType: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      title: 'I am wondering about...',
      color: 'background-color: #ffff99;',
      owner: 'Mike TV',
      city: 'Seattle',
      propertyType: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'

    }, {
      title: "What didn't go so well?",
      color: 'background-color: #ff6666;',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      propertyType: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'

    }];
  }
});
