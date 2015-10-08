import Ember from 'ember';

export default Ember.Controller.extend({
  hasOwnSuper: Ember.computed(function() {
    return Ember.Object.create().hasOwnProperty('_super');
  })
});
