import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      entries: this.store.findAll('entry'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    save(params) {
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
