import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  entries: DS.hasMany('entry', {async: true})
});
