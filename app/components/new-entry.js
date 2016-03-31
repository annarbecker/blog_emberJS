import Ember from 'ember';
var getCategoryObjects = function(categoryIds, categories) {
  var categoryArray = [];
  categoryIds.forEach(function(categoryId) {
    categories.forEach(function(category, index) {
      if (index === categoryId) {
        categoryArray.push(category);
      }
    })
  })
    return categoryArray;
};

export default Ember.Component.extend({
  actions: {
    save() {
      var categoryObjects = this.get('categories');
      var categoryIds = $('input:checkbox[name="category"]:checked').map(function() {
        return parseInt(this.id);
      }).get();
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        tagLine: this.get('tagLine') ? this.get('tagLine') : "",
        categories: getCategoryObjects(categoryIds, categoryObjects),
        body: this.get('body')
      };
      this.sendAction('save', params);
    }
  }
})
