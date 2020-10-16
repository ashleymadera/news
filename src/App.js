import React, { useEffect, useState } from 'react';
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';
import ResultList from './components/ResultList';
import { Row, Col, Form } from 'react-bootstrap';
import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY

  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [liveFeed, setLiveFeed] = useState([])

  useEffect(() => {
    const apiCallLiveFeed = async (e) => {
      const resp = await axios(`https://newsapi.org/v2/top-headlines?country=us&totalResults=4&apiKey=${API_KEY}`)

      setLiveFeed(resp.data.articles)
      console.log(resp.data.articles)
    }
    apiCallLiveFeed()
  }, [])

  const apiCall = async (e) => {
    e.preventDefault()
    console.log(data)

    if (setData == null) {
      const response = await axios(`https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}&totalResults=20&language=en`)
      // console.log(response.data.articles)
      setSearchResults(response.data.articles)
    } else {
      const response = await axios(`https://newsapi.org/v2/everything?q=${input}&sortBy=${data}&apiKey=${API_KEY}&language=en`)
      // console.log(response.data.articles)
      setSearchResults(response.data.articles)
    }
  }

  function handleSortTypeChange(e) {
    setData(e.target.value);
    console.log(setData)
  }

  return (
    <Container>

      <Row className='justify-content-center'>
        <Col xs={5} md={8} lg={8}>
          <Form.Control
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </Col>
        <Col >
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            onChange={handleSortTypeChange}
            custom
          >
            defaultValue={setData}
            <option selected value='null'>Sort Article</option>
            <option value="publishedAt">date</option>
            <option value="relevancy">relevance</option>
            <option value="popularity">popularity</option>
          </Form.Control>
        </Col>
        <Col>
          <Button variant="light" onClick={apiCall}>Search</Button>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <h3>Your News</h3>
      </Row>

      <Row className='justify-content-center'>
        <h4>All the news you need just a click away</h4>
      </Row>

      <Row className='justify-content-center'>
        {searchResults.map(result =>
          <ResultList
            key={result.author}
            result={result}
          />)}
      </Row>
    </Container>
  );
}

export default App;
