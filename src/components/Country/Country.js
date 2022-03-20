import React from 'react';

const Country = (props) => {
      return (
            <div>
                  <h1>Name: {props.name}</h1>
                  <p>popoulation: {props.population}</p>
            </div>
      );
};

export default Country;