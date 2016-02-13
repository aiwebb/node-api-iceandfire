var iaf = require('api-iceandfire')

iaf.getBook(1).then(book => console.dir(book))