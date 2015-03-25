import Ember from 'ember';
var pluralize = Ember.String.pluralize;

function hPluralize(count, word, options) {
  var omitCount = options && options.hash.omitCount;

  if (count !== 1) {
    count = count || 0;
    word = pluralize(word);
  }

  return (omitCount ? '' : count + ' ') + word;
}

export { hPluralize };

export default Ember.Handlebars.makeBoundHelper(hPluralize);
