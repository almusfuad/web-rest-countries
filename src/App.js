
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <div className = "App">
          <LoadCountries> </LoadCountries>  
        </div>
    );
}


function LoadCountries() {

  const [countries, setCountries] = useState ([]);

  useEffect ( () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, 
  
  []);
    return ( 
      <div>
        <h1>Every country of the world </h1> 
        <p>Total countries here: {countries.length}</p> 
        {
          countries.map(country => <Country name= {country.name.common} population= {country.population}></Country> )
        }
      </div>
    );
}

function Country (props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>popoulation: {props.population}</p>
    </div>
  );
}

export default App;