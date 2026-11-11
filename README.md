# CA Lab Exam - Section 3MCA06 - Set D

**Cinema Movie List**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** cinema
- **Collection:** movies
- **Fields:** title (text), genre (text), year (number), rating (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use cinema
db.movies.insertMany([
  { title: "Orbit Seven", genre: "Sci-Fi", year: 2014, rating: 7.8 },
  { title: "The Last Letter", genre: "Drama", year: 2009, rating: 8.1 },
  { title: "Laugh Lane", genre: "Comedy", year: 2018, rating: 6.9 },
  { title: "Mars Garden", genre: "Sci-Fi", year: 2021, rating: 8.4 },
  { title: "Quiet Harbour", genre: "Drama", year: 2016, rating: 7.2 },
  { title: "Office Chaos", genre: "Comedy", year: 2011, rating: 6.5 },
  { title: "Time Loop", genre: "Sci-Fi", year: 2008, rating: 7.5 },
  { title: "River of Dreams", genre: "Drama", year: 2022, rating: 8.7 },
  { title: "Wedding Mix-Up", genre: "Comedy", year: 2019, rating: 7.0 },
  { title: "Silent Planet", genre: "Sci-Fi", year: 2017, rating: 8.0 },
  { title: "Old Friends", genre: "Drama", year: 2012, rating: 7.6 },
  { title: "Pizza Party", genre: "Comedy", year: 2023, rating: 6.2 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Movies".  
   Expected: 12 movies.
3. **Search.** Choose Drama and click Search.  
   Expected: 4 movies: The Last Letter, Quiet Harbour, River of Dreams, Old Friends.
4. **Filter.** Type 2018 in "Released in or after" and click Filter.  
   Expected: 5 movies: Laugh Lane, Mars Garden, River of Dreams, Wedding Mix-Up, Pizza Party.
5. **Top 3 Rated Movies.** Click "Top 3 Rated Movies".  
   Expected: River of Dreams (8.7), Mars Garden (8.4), The Last Letter (8.1), in this order.
6. **Add Movie.** Fill the form with Title: Exam Day, Genre: Comedy, Year: 2026, Rating: 7.4. Click "Add Movie".  
   Expected: The message "Movie saved" appears and the list shows 13 movies, including Exam Day.
