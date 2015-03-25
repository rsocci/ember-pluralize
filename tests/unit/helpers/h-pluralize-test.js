import { hPluralize } from 'ember-pluralize/helpers/h-pluralize';
import { module, test } from 'qunit';

module('PluralizeHelper');

test('it pluralizes correctly when given a count of 1 and a word', function(assert) {
  assert.equal(hPluralize(1, 'banana'), '1 banana');
});

test('it pluralizes correctly when given a count greater than 1 and a word', function(assert) {
  assert.equal(hPluralize(2, 'banana'), '2 bananas');
});

test("it pluralizes correctly when passed the 'omitCount' option", function(assert) {
  assert.equal(hPluralize(2, 'banana', { hash: { omitCount: true }}), 'bananas');
});

test("it returns count of 0 when count is undefined or null", function(assert) {
  assert.equal(hPluralize(undefined, 'banana'), '0 bananas');
  assert.equal(hPluralize(null, 'banana'), '0 bananas');
});
