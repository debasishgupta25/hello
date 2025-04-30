import './App.css';
import { useState } from 'react';

const CountryNode = ({ data }) => {
  const [isExpanded, setExpanded] = useState(false);
  if (!data.name) {
    [data] = data;
  }

  const handleToggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (data?.name && 
    <div>
      <div onClick={handleToggleExpansion}>
        {data.name} <b className='button'>{data.children && (data.children.length > 0) && (isExpanded ? '-' : '+')}</b>
      </div>
      {isExpanded && data.children && (data.children.length > 0) && (
        <div style={{ paddingLeft: 20 }}>
          {data.children.map((eachChild) => (
            <CountryNode data={eachChild} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryNode;
