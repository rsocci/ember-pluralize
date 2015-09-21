import pluralize from 'ember-pluralize/helpers/pluralize';
import { module, test } from 'qunit';

module('PluralizeHelper');

test('it pluralizes correctly when given a count of 1 and a word', function(assert) {
  assert.equal(pluralize([1, 'banana'], {}), '1 banana');
});

test('it pluralizes correctly when given a count greater than 1 and a word', function(assert) {
  assert.equal(pluralize([2, 'banana'], {}), '2 bananas');
});

test("it pluralizes correctly when passed the 'omitCount' option", function(assert) {
  assert.equal(pluralize([2, 'banana'], { omitCount: true }), 'bananas');
});

test("it returns count of 0 when count is undefined or null", function(assert) {
  assert.equal(pluralize([undefined, 'banana'], {}), '0 bananas');
  assert.equal(pluralize([null, 'banana'], {}), '0 bananas');
});
