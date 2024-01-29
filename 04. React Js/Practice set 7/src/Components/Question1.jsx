import { useState } from "react"
import { useEffect } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/weather') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            temperature: 21,
            humidity: 50,
            windSpeed: 10,
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Weather data not found.',
        })
      }
    }, 2000)
  })
}

export const Weather = () => {
  const [constantWeather, setConstantWeather] = useState({});
  const [weather, setWeather] = useState({});
  const [celsius, setCelsius] = useState(true);
  const [loading, setLoading] = useState(false);
  const fetchWeather = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setWeather(result.data);
      setConstantWeather(result.data);
    } catch (error) {
      setLoading(false);
      setWeather(error.message);
    }
  }

  useEffect(() => {
    fetchWeather("https://example.com/api/weather");
  },[])

  useEffect(() => {
    
  }, [celsius, weather])

  const clickHandler = () => {
    const newValue = !celsius;
    setCelsius(newValue);
    if(!newValue) {
      const newTemperature = weather.temperature * (9/5) + 32;
      setWeather( prev => ({...prev, temperature : newTemperature.toFixed(2)})); 
    } else {
      setWeather(constantWeather);
    }
    console.log("result", weather);
    console.log("celsius" , celsius);
  }

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Weather</h2>
    {
      !loading ? typeof weather !== 'string' ? <div>
        {
          Object?.keys(weather).map((item,index) => <div key={index}>
          <div>{item} : {weather[item]}</div>
        </div>)
        }
        <button onClick={clickHandler} className="text-white mt-2">{celsius ? "Switch to Fahrenheit" : "Switch to Celsius"}</button>
      </div> : <div>{weather}</div> : <div>Loading ...</div>
    }
  </div>
}