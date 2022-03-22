// core react import
import React from 'react';
import { useEffect, useState } from 'react';


// import css file
import './LoadCountries.css';


// import other js components
import Country from '../Country/Country';




const LoadCountries = () => {
        const [countries, setCountries] = useState([]);

        useEffect(() => {

                // calling api from internet
                fetch('https://restcountries.com/v3.1/all')
                    .then(res => res.json())
                    .then(data => setCountries(data));
            },

            []);
        return ( <div>
            <h1> Every country of the world </h1>  
            <p > Total countries here: { countries.length } </p>  
            <div className = 'loadCountries' > {
                countries.map(country => < Country country = { country }
                    key = { country.cca3 }
                    // name= {country.name.common} 
                    // population= {country.population}
                    // area = {country.area}
                    >
                    </Country> )
                }

                </div>

                </div>
            );
        };

        export default LoadCountries;