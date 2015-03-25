import Ember from 'ember';
import { hPluralize } from 'ember-pluralize/helpers/h-pluralize';

export var initialize = function() {
  Ember.Handlebars.helper('h-pluralize', hPluralize);
};

export default {
  name: 'ember-pluralize',
  initialize: initialize
};
