// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: cinema



// Step 3: Create the schema and the model here.
//         Model name: Movie   (Mongoose saves it in the "movies" collection)
//         Fields: title (String), genre (String), year (Number), rating (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the movies in the collection.
export async function getAllMovies() {

}


// genre comes from the "Search by genre" box on the page, for example "Drama".
// Return the movies whose genre matches it.
export async function findMoviesByGenre(genre) {

}


// fromYear is a number typed on the page, for example 2018.
// Return the movies whose year is greater than or equal to fromYear.
export async function findMoviesFromYear(fromYear) {

}


// Return the 3 movies with the highest rating, highest first.
export async function getTopThreeRatedMovies() {

}


// movie comes from the "Add Movie" form, for example:
//   { title: "Summer Rain", genre: "Comedy", year: 2026, rating: 7.4 }
// Save it in the database and return the saved movie.
export async function addMovie(movie) {

}
