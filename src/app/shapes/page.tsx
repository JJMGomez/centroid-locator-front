'use client';
import React from 'react';

var inputs = [
  {"x": 200.0000000000001,"y": 177.9422863405994,"Diameter": 20.0, "id":'1'}, 
  {"x": 145.0000000000001,"y":177.9422863405994,"Diameter": 20.0, "id":'2'}
]
var current



const App = () => {
  
  const sayHello = (event) => {
    alert(event.target.id)
  };

  return (
    <>
      {inputs.map((e)=>
      <button onClick={sayHello} id={e.id}>
        <div className='circle'
        style={{width: e.Diameter, height: e.Diameter, position: 'relative', top: e.y, left: e.x}}
        />
      </button>
      )}   
</>
  );
};
export default App;