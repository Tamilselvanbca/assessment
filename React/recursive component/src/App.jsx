import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const treeData = {
    name: 'Root',
    children: [
      {
        name: 'Tamilselvan',
        children: [
          { name: 'Tamil' },
          { name: 'English' },
        ],
      },
      {
        name: 'Mani',
        children: [
          { name: 'Tamil' },
          {
            name: 'English',
            children: [
              { name: 'English-1 Grammar' },
            ],
          },
        ],
      },
    ],
  };

  const TreeNode = ({ node }) => (
    <div className="ms-3">
      <div className="fw-bold">{node.name}</div>
      {node.children && node.children.length > 0 && (
        <div>
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );

  const Tree = ({ data }) => (
    <div>
      <TreeNode node={data} />
    </div>
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center">Recursive Structure</h1>
      <div>
      <Tree data={treeData} />
    </div>
    </div>
  );
};


export default App;