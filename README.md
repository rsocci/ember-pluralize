# ember-pluralize
[![Build
Status](https://travis-ci.org/rsocci/ember-pluralize.svg?branch=master)](https://travis-ci.org/rsocci/ember-pluralize)

Word pluralizer based on count.

Installation
------------------------------------------------------------------------------

`npm install ember-pluralize --save-dev`

with ember-cli:

`ember install ember-pluralize`

## Usage

```hbs
{{pluralize-word 2 "dancing penguins"}} {{! => 2 dancing penguins}}
{{pluralize-word 3 "octopus"}} {{! => 3 octopi}}
```

Pass `omitCount=true` option to print the pluralized word without the
count.

```hbs
{{pluralize-word 5 "hamster" omitCount=true}} {{! => hamsters}}
```

## Development
* `git clone` this repository
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
