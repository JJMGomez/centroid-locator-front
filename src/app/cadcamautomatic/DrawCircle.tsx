'use client';
import React from 'react';

// var inputs = [
//   {"x": 200.0000000000001,"y": 177.9422863405994,"Diameter": 20.0, "id":'1'}, 
//   {"x": 145.0000000000001,"y":177.9422863405994,"Diameter": 20.0, "id":'2'}
// ]
var diameter = 20.0
var current



export default function DrawCircle ({data})  {
  
  const drawHandler = (id) => {
    alert(id)
  };

  console.log(data);
  let inputs = (Array.from(data)).map((element,index) => {
    return {id:index, x: element.Center[0], y: element.Center[1]};
  });

  return (
    <>
      {inputs.map((e)=>
      <button key={e.id} onClick={() => drawHandler(e.id)}>
        <div className='circle' 
        style={{width: diameter, height: diameter, position: 'absolute', top: e.y+300, left: e.x+300}}
        />
      </button>
      )}   
</>
  );
};
