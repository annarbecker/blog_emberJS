import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        tagLine: this.get('tagLine'),
        category: this.get('category'),
        body: this.get('body')
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', entry, params);
    }
  }
});
