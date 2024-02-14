// import React, { useCallback, useEffect, useState } from "react";

// import MoviesList from "./components/MoviesList";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // //1]
//   // const fetchMoviesHandler = () => {
//   //   fetch("https://swapi.dev/api/films/")
//   //     .then((response) => {
//   //       console.log(response.json);

//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       const transformData = data.results.map((movie) => {
//   //         return {
//   //           id: movie.episode_id,
//   //           title: movie.title,
//   //           releaseDate: movie.release_date,
//   //           openingText: movie.opening_crawl,
//   //         };
//   //       });
//   //       setMovies(transformData);
//   //     });
//   // };

//   const fetchMoviesHandler = useCallback(async() => {
//     setIsLoading(true);
//     setError(null);
//     try {

//       const response = await fetch("https://swapi.dev/api/films/");

//       if (!response.ok) {
//         throw new Error("Something went wrong...");
//       }

//       const data = await response.json();

//       const transformData = data.results.map((movie) => {
//         return {
//           id: movie.episode_id,
//           title: movie.title,
//           releaseDate: movie.release_date,
//           openingText: movie.opening_crawl,
//         };
//       });

//       setMovies(transformData);
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   // // if not use any other external state in the fetchMoviesHandler function then it's ok to pass empty dependencies array
//   // // but if we use then we have to add a dependency
//   // useEffect(() => {
//   //   fetchMoviesHandler();
//   // },[]);

//   useEffect(() => {
//     fetchMoviesHandler();
//   }, [fetchMoviesHandler]);

//   let content = <p>No Data Found</p>;

//   if (movies.length > 0) {
//     content = <MoviesList movies={movies} />;
//   }

//   if (error) {
//     content = <p>{error}</p>;
//   }

//   if (isLoading) {
//     content = <p>Loading....</p>;
//   }

//   return (
//     <React.Fragment>
//      <section>
//         <AddMovie onAddMovie={addMovieHandler} />
//       </section>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }

// export default App;

// ____________________________________________________

import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-7a524-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-7a524-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
