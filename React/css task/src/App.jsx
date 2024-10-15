import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DynamicStyleComponent = () => {
  const [bgColor, setBgColor] = useState('bg-primary');

  const handleClick = () => {
    setBgColor(prevColor => (prevColor === 'bg-primary' ? 'bg-danger' : 'bg-primary' ));
  };

  return (
    <div className="container mt-5">
      <h1>Dynamic Bootstrap </h1>
      <div className={`card ${bgColor}`} style={{ padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
        <div className="card-body">
          <h5 className="card-title">Dynamic Bootstrap</h5>
          <p className="card-text">
            The background color will change when you click the button
          </p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Background Color
      </button>
    </div>
  );
};

export default DynamicStyleComponent;
