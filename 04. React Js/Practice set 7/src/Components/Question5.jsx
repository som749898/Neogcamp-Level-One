import { useEffect, useState } from "react"

const fakeFetch = () => {
  const quotes = [
    {
      content: 'Be yourself; everyone else is already taken.',
      author: 'Oscar Wilde',
    },
    {
      content:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: 'Albert Einstein',
    },
    {
      content: 'So many books, so little time.',
      author: 'Frank Zappa',
    },
    {
      content: 'A room without books is like a body without a soul.',
      author: 'Marcus Tullius Cicero',
    },
    {
      content:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: 'Robert Frost',
    },
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      resolve(randomQuote)
    }, 1000)
  })
}

export const RandomQuote = () => {

  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fakeFetch();
      setLoading(false);
      setQuote(result);
    } catch (error) {
      setQuote(error);
    }
  } 

  useEffect(() => {
    fetchData()
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Random Quote</h2>
    {
      !loading ? typeof quote !== 'string' ? <div>
        {
          <div>
            <div>&ldquo;{quote.content}&ldquo;</div>
            <div>-{quote.author}</div>
          </div>
        }
        <button onClick={() => fetchData()} className="bg-white">New Quote</button>
      </div> : <div>{quote}</div> : <div>Loading ....</div>
    }
  </div>
}