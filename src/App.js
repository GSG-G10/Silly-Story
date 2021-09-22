import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import FetchData from './Data/fetchData';
import Form from './Components/Form/Form';
import Story from './Components/Story/Story';
import Favorites from './Components/Favorites/Favorites';
import './App.css';



function App() {
  const [data, setData] = useState({
    'title': '',
    'blanks': [],
    'value': []
  });
  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isFormValid, setFormValidation] = useState(false);


  useEffect(() => {
    const abortController = new AbortController();
    getData();
    return () => abortController.abort();
  }, [click])

  const getData = () => {
    setLoading(true);
    FetchData()
      .then((data) => { setData({ ...data }) })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleClick = () => {
    setClick((click) => !click);
    setFormValidation(false);
  };


  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInputs({ ...inputs, [key]: value });
    console.log({ 'value': value, 'key': key, 'input': inputs })
  };

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }

  const validateForm = () => {
    if (Object.keys(inputs).length === data.blanks.length) {
      setFormValidation(true)
    } else {
      setFormValidation(false)
    }
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Form data={data.blanks} handleChange={handleChange} inputs={inputs} isFormValid={isFormValid} validateForm={validateForm} /></Route>
        <Route exact path='/story'><Story title={data.title} userInputs={inputs} story={data.value} handleClick={handleClick} /></Route>
        <Route exact path='/favorites'><Favorites /></Route>
      </Switch>
    </div>
  );
}

export default App;
