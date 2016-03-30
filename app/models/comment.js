import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  message: DS.attr(),
  entry: DS.belongsTo('entry', {async: true})
});
