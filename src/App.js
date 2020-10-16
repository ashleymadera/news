import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
import Input from "./components/Input"
import { Route } from 'react-router-dom'
import ResultList from './components/ResultList';
import Country from "./components/Country"


function App() {
  const [countries, updateCountries] = useState([])

  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [liveNews, setLiveNews] = useState([])

  useEffect(() => {
    const apiCallLiveNews = async (e) => {
      const response = await axios(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9e74ed0cdd63453bab817d916b088ae6`)
    }
    apiCallLiveNews()
  }, [])


  const apiCall = async (e) => {
    e.preventDefault()
    const response = await axios(`https://newsapi.org/v2/everything?q=${input}&apiKey=9e74ed0cdd63453bab817d916b088ae6&totalResults=20`)
    console.log(response.data.articles)
    setSearchResults(response.data.articles)
  }



  return (

    <div className="App">
      <form>
        <Input
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <button onClick={apiCall}>Go</button>
      </form>
      <div>
        <h2>live news</h2>
        {searchResults.map(result =>
          <ResultList
            key={result.author}
            result={result}
          />
        )}
      </div>

    </div>

  );
}

export default App;
