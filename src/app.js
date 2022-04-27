const yargs = require('yargs')

const { connection, client } = require('./database/connection')
const { addMovie, listMovies, updateMovie, deleteMovie, searchMovies } = require('./utils')

const app = async (yargsObj) => {
	const collection = await connection()
	if (yargsObj.add) {
		await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating})
		console.log('successfully added to database')
	} else if (yargsObj.list) {
		await listMovies(collection)
	} else if (yargsObj.update) { 
		await updateMovie(collection, yargsObj)
	} else if (yargsObj.delete) {
		await deleteMovie(collection, {title: yargsObj.title})
	} else if (yargsObj.search) {
		await searchMovies(collection, {title: yargsObj.title})
		await searchMovies(collection, {actor: yargsObj.actor})
		await searchMovies(collection, {rating: yargsObj.rating})
	} else {
		console.log('Incorrect command')
	}
	await client.close() //this is how to close the connection
}

app(yargs.argv)

