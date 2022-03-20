// import core files
import React from 'react';

// import css file
import './Country.css';

const Country = (props) => {
      return (
            <div>
                  <h1>Name: {props.name}</h1>
                  <p>popoulation: {props.population}</p>
            </div>
      );
};

export default Country;