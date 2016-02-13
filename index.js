var _       = require('lodash')
var api     = require('superagent')
var baseUrl = 'http://www.anapioficeandfire.com/api/'

var cache = {
	books:      {},
	characters: {},
	houses:     {}
}

function get(type, index) {
	return new Promise((resolve, reject) => {
		var request = api(baseUrl + type + '/' + index)

		request.set({
			Accept: 'application/vnd.anapioficeandfire+json; version=1'
		})

		if (cache[type][index]) {
			request.set({'If-None-Match': cache[type][index].etag})
		}

		request.end((err, res) => {
			if (err && (!res || res.status != 304)) {
				return reject(err)
			}

			if (res.status != 304) {
				// Save result in cache
				cache[type][index] = {
					etag: res.headers.etag,
					data: res.body
				}
			}

			resolve(cache[type][index].data)
		})
	})
}

function getBook     (index) {return get('books',      index)}
function getHouse    (index) {return get('houses',     index)}
function getCharacter(index) {return get('characters', index)}

function getBooks(list) {
	if (list) {
		var promises = _.map(list, index => getBook)
		return Promise.all(promises)
	}
	else {
		// TODO
		return Promise.resolve([])

		// return new Promise((resolve, reject) => {
		// })
	}
}

module.exports = {
	get: get,
	getBook,
	getHouse,
	getCharacter
}