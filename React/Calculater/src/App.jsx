import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Calculator</h2>
      <div className="card">
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3"
            value={input}
          />
          <div className="row">
            {['7', '8', '9', '/'].map((item) => (
              <div className="col" key={item}>
                <button
                  className="btn btn-secondary btn-block"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {['4', '5', '6', '*'].map((item) => (
              <div className="col" key={item}>
                <button
                  className="btn btn-secondary btn-block mt-2"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {['1', '2', '3', '-'].map((item) => (
              <div className="col" key={item}>
                <button
                  className="btn btn-secondary btn-block mt-2"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-secondary btn-block mt-2"
                onClick={() => handleClick('0')}
              >
                0
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-secondary btn-block mt-2"
                onClick={() => handleClick('.')}
              >
                .
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary btn-block mt-2"
                onClick={handleCalculate}
              >
                =
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-danger btn-block mt-2"
                onClick={handleClear}
              >
                C
              </button>
              <button
                className="btn btn-secondary btn-block btn-lg mt-2 mx-2 px-5 py-2"
                onClick={() => handleClick('+')}
              >
                +
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
