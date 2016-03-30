import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        tagLine: this.get('tagLine') ? this.get('tagLine') : "",
        category: this.get('category') ? this.get('category') : "",
        body: this.get('body')
      };
      this.sendAction('save', params);
    }
  }
});
