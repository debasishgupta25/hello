import './App.css';
import React, { useState } from 'react';

const CountryNode = ({ data }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggleExpansion}>
        {data.name} <b className='button'>{data.children && (isExpanded ? '-' : '+')}</b>
      </div>
      {isExpanded && data.children && (
        <div style={{ paddingLeft: 20 }}>
          {data.children.map((eachChild) => (
            <CountryNode key={eachChild.id} data={eachChild} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryNode;
