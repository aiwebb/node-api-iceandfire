# node-api-iceandfire

## About

Node module for interacting with [An API of Ice and Fire](https://anapioficeandfire.com/).

More information available on [Reddit](https://www.reddit.com/r/asoiaf/comments/45lt0o/spoilers_everything_introducing_an_api_of_ice_and/).

## Installation

`npm install --save api-iceandfire`

`require('api-iceandfire')`

## Methods

*All methods return promises for a JSON object.*

- `get(type, index)`
- `getBook(index)`
- `getCharacter(index)`
- `getHouse(index)`

Conforms to data caching guidelines via `etag` method.

## Example

```js
var iaf = require('api-iceandfire')

iaf.getBook(1).then(book => console.dir(book))

/*
{ url: 'http://www.anapioficeandfire.com/api/books/1',
  name: 'A Game of Thrones',
  isbn: '978-0553103540',
  authors: [ 'George R. R. Martin' ],
  numberOfPages: 694,
  publisher: 'Bantam Books',
  country: 'United States',
  mediaType: 'Hardcover',
  released: '1996-08-01T00:00:00',
  characters:
   [ 'http://www.anapioficeandfire.com/api/characters/2',
     'http://www.anapioficeandfire.com/api/characters/12',
     'http://www.anapioficeandfire.com/api/characters/13',
	 ...
*/
```

## TODO

- API versioning support
- `getAllX` methods