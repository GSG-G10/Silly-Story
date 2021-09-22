
import React, { useState, useEffect } from 'react';
import FetchData from './Data/fetchData';
import Form from './Components/Form/Form';
import './App.css';



function App() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    getData();
  }, [click])

  const getData = () => {
    FetchData().then((data) => { setData(data) })
  }

  const handleChange = () => {
    setClick((click) => !click);
  };


  return (
    <div className="App">
      <Form data={data.blanks} handleChange={handleChange} />
    </div>
  );
}

export default App;
