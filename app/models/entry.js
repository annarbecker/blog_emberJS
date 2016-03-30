import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  tagLine: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  author: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
