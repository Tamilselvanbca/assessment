import React from 'react';

const files = [
  {
    name: 'book',
    type: 'tamil',
    children: [
      { name: 'thirukural', type: 'history', children: [] },
      { name: 'ramayanam', type: 'history', children: [] },
      { name: 'mahabaratham', type: 'history', children: [] },
    ],
  },
  {
    name: 'greatest of all time',
    type: 'tamil',
    children: [
      { name: 'poor dad rich dad', type: 'drama', children: [] },
      { name: 'the ocean', type: 'drama', children: [] },
    ],
  },
  { name: 'others', type: 'none', children: [] },
];

const FileList = ({ files }) => {
  return (
    <ul>
      {files.map((file, index) => (
        <li key={index}>
          {file.type === 'tamil' ? (
            <>
              <strong>{file.name}</strong>
              <FileList files={file.children} />
            </>
          ) : (
            <span>{file.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h1>File Structure</h1>
      <FileList files={files} />
    </div>
  );
};

export default App;
