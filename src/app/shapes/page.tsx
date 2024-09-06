import React from 'react';


var inputs = [
  {"x": 175.0000000000001,"y": 177.9422863405994,"Diameter": 20.0}, 
  {"x": 145.0000000000001,"y":177.9422863405994,"Diameter": 20.0}
]

const App = () => {
  return (
    <>
      {inputs.map((e)=>
        <div className="circle" 
        style={{width: e.Diameter, height: e.Diameter, position: 'relative', top: e.y, left: e.x}}
        />
      )}   
</>
  );
};


export default App;