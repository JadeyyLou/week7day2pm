exports.addMovie = async (collection, yargsObj) => {
	try{
		const addEntry = await collection.insertOne(yargsObj)
        console.log(addEntry)

	} catch(error){
		console.log(error)
	}
}


exports.listMovies = async (collection) => {
	try{
		const movieList = await collection.find().toArray()
        console.log(movieList);

	} catch(error) {
		console.log(error);
	}
};


exports.updateMovie = async (collection, yargsObj) => {
	try{
	const update = await collection.updateOne({title: yargsObj.title}, 
		{$set:{ title: yargsObj.title, actor: yargsObj.actor}})
        console.log('Successfully updated',update)

	} catch(error) {
		console.log(error);
	}
}


exports.deleteMovie = async (collection, yargsObj) => {
	try {
		const remove = await collection.deleteOne(yargsObj)
		console.log('Successfully deleted entry',remove) 

	} catch(error) {
		console.log(error);
	}
}