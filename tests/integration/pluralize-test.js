import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'helper:pluralize', {
  integration: true
});

test('returns true for equal values', function(assert) {
  this.setProperties({
    count: 1,
    word: 'thing',
    omit: false
  });

  this.render(hbs`
    {{pluralize-word count word omitCount=omit}}
  `);

  assert.equal(this.$().text().trim(), '1 thing');

  this.set('count', 2);

  assert.equal(this.$().text().trim(), '2 things');

  this.set('omit', true);

  assert.equal(this.$().text().trim(), 'things');
});
