import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/movies') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            { title: 'The Dark Knight', year: 2008, rating: 9.0 },
            { title: 'Inception', year: 2009, rating: 8.8 },
            { title: 'Interstellar', year: 2010, rating: 8.6 },
            { title: 'Tenet', year: 2009, rating: 7.5 },
            { title: 'Real Steal', year: 2007, rating: 7.5 },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'Movies list not found.',
        })
      }
    }, 2000)
  })
}

export const FilterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState("All");
  const [loading, setLoading] = useState(false);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      console.log("result", result.data);
      setMovies(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMovies(error.message);
    }
  }

  useEffect(() => {
    fetchData("https://example.com/api/movies");
  },[])

  const changeHandler = (newValue) => {
    setYear(newValue);
    console.log("new value" , newValue);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Movies</h2>
    {
      !loading ? movies.length !== 0 && typeof movies !== 'string' ? <div>
        <select onChange={(event) => changeHandler(event.target.value)} className="bg-white" name="movies" id="movies">
          <option value="All">All</option>
          {
            [... new Set(movies.map(item => item.year))].sort((a,b) => a-b).map((year, index) => <option value={year} key = {index}>{year}</option>)
          }
        </select>
        {
          year === "All" ?  movies.map((movie, index) => <div key={index}>
            <li>
              Name: {movie.title}{" "}
              Year: {movie.year}{" "}
              Rating: {movie.rating}
            </li>
          </div>) : movies.filter(item => item.year === Number(year)).map((movie, index) => <div key={index}>
            <li>
              Name: {movie.title}{" "}
              Year: {movie.year}{" "}
              Rating: {movie.rating}
            </li>
          </div>)
        }
      </div> : <div>{movies}</div> : <div>Loading Data ....</div>
    }
  </div>
}