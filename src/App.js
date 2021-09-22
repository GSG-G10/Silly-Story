
import React, { useState, useEffect } from 'react';
import FetchData from './Data/fetchData';
import Form from './Components/Form/Form';
import Story from './Components/Story/Story';
import './App.css';



function App() {
  const [data, setData] = useState({
    'title': '',
    'blanks': [],
    'value': []
  });
  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    getData();
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
  };

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInputs({ ...inputs, [key]: value });
  };

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }


  return (
    <div className="App">
      <Form data={data.blanks} handleClick={handleClick} handleChange={handleChange} inputs={inputs} />
      <Story title={data.title} userInputs={inputs} story={data.value} />


    </div>
  );
}

export default App;
