import React from 'react';
import CountryNode from './CountryNode';
import exampleJson from "./../example/example.json";

const countryData = exampleJson[0];

const App = () => {
  return (
    <div>
      <CountryNode data={countryData} />
    </div>
  );
};

export default App;
