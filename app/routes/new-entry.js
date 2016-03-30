import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entry');
  },
  actions: {
    save(params) {
      var newEntry=this.store.createRecord('entry', params);
      newEntry.save();
      console.log(params);
      this.transitionTo('index');
    }
  }
});
