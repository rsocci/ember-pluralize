import { pluralize } from 'ember-inflector';

export default function(params, options) {
  let [count, word] = params;
  const { omitCount } = options;

  if (count !== 1) {
    count = count || 0;
    word = pluralize(word);
  }

  return (omitCount ? '' : count + ' ') + word;
}
