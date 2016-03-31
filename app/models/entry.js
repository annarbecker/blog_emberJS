import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  tagLine: DS.attr(),
  body: DS.attr(),
  categories: DS.hasMany('category', {async: true}),
  author: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
