# ember-pluralize
[![Build
Status](https://travis-ci.org/rsocci/ember-pluralize.svg?branch=master)](https://travis-ci.org/rsocci/ember-pluralize)

Word pluralizer based on count.

## Installation

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
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
