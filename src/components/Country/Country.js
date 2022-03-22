// import core files
import React from 'react';

// import css file
import './Country.css';

const Country = (props) => {
      const {name, population, area, capital, currencies, region, timezone, unmember, flags} = props.country;
      return (
            <div className='country'>
                  <h1>Name: {name.common}</h1>
                  <img src={flags.png} alt="" srcset="" />
                  <p>popoulation: {population}</p>
                  <p>area: {area}</p>
                  <p>Capital: {capital}</p>

            </div>
      );
};

export default Country;