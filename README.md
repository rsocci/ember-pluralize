# H-pluralize
[![Build
Status](https://travis-ci.org/rsocci/ember-pluralize.svg)](https://travis-ci.org/rsocci/ember-pluralize)

Word pluralizer based on count.

## Installation

`ember install:addon ember-pluralize`

## Usage

```hbs
{{h-pluralize 2 "dancing penguins"}} {{! => 2 dancing penguins}}
{{h-pluralize 3 "octopus"}} {{! => 3 octopi}}
```

Pass `omitCount=true` option to print the pluralized word without the
count.

```hbs
{{h-pluralize 5 "hamster" omitCount=true}} {{! => hamsters}}
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
