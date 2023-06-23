import React, { useState, useEffect } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('API Aquired');
    async function getData() {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${requestParams.url}`);
      setData(response.data);
      setLoading(false);
    }
    if(requestParams.url && requestParams.method) {
      getData();
    }
  }, [requestParams]);

  const callApi = (requestParams) => {
    setLoading(true);
    // mock output
    setTimeout(() => {
      setRequestParams(requestParams);
      setLoading(false);
    }, 2000);
  }

  return (
    <React.Fragment>
      <Header />
      <div data-testid="app-div-req">Request Method: {requestParams.method}</div>
      <div data-testid="app-div-url">URL: {`https://pokeapi.co/api/v2/${requestParams.url}`}</div>
      <Form handleApiCall={callApi} />
      <Results
      data={data}
      loading={loading} 
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
