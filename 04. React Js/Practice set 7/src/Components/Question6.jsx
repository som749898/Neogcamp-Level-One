import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/movies') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              title: 'The Godfather',
              year: 1972,
              genre: 'Crime',
            },
            {
              title: 'The Shawshank Redemption',
              year: 1994,
              genre: 'Drama',
            },
            {
              title: 'The Dark Knight',
              year: 2008,
              genre: 'Action',
            },
            {
              title: 'Forrest Gump',
              year: 1994,
              genre: 'Comedy',
            },
            {
              title: 'The Matrix',
              year: 1999,
              genre: 'Science Fiction',
            },
            {
              title: 'Jurassic Park',
              year: 1993,
              genre: 'Science Fiction',
            },
            {
              title: 'Star Wars: Episode IV - A New Hope',
              year: 1977,
              genre: 'Science Fiction',
            },
            {
              title: 'The Terminator',
              year: 1984,
              genre: 'Action',
            },
            {
              title: 'Die Hard',
              year: 1988,
              genre: 'Action',
            },
            {
              title: 'Pulp Fiction',
              year: 1994,
              genre: 'Crime',
            },
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

export const MovieGenre = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("All");

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setMovies(result.data);
      setLoading(false);
    } catch (error) {
      setMovies(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData("https://example.com/api/movies")
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Movies</h2>
    {
      !loading ? movies.length !== 0 && typeof movies !== 'string' ? <div>
        <div>Filter By Genre {" "}
          <select onChange={(event) => setSelected(event.target.value)} className="bg-white" name="filter" id="movies">
            <option value="All">All</option>
            {
              [... new Set(movies.map(item => item.genre))].map((item,index) => <option key={index} value={item}>
                {item}
              </option>)
            }
          </select>
        </div>
        { selected === "All" ? 
          movies.map((item, index) => <li key={index}>
            <div>{item.title}</div>
            <div>{item.year}</div>
            <div>{item.genre}</div>
          </li>) : 
          movies.filter(item => item.genre === selected).map((item, index) => <li key={index}>
          <div>{item.title}</div>
          <div>{item.year}</div>
          <div>{item.genre}</div>
        </li>)
        }
      </div> : <div>{movies}</div> : <div>Loading ....</div>
    }
  </div>
}