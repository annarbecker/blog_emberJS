import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },
  actions: {
    update(entry, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          entry.set(key, params[key]);
        }
      });
      entry.save();
    },
    deleteEntry(entry) {
      var comment_deletions = entry.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        entry.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var entry = params.entry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return entry.save();
      });
    },
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
