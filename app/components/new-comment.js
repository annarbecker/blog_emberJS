import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        message: this.get('message'),
        entry: this.get('entry')
      };
      this.sendAction('saveComment', params);
    }
  }
});
