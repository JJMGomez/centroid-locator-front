"use client";

const diameter = 20.0;

export default function DrawCircle({ data }) {
  const drawHandler = (id) => {
    alert(id);
  };

  let inputs = Array.from(data).map((element, index) => {
    return { id: index, x: element.Center[0], y: element.Center[1] };
  });

  let minX = Math.min(...inputs.map((i) => i.x));
  let minY = Math.min(...inputs.map((i) => i.y));
  inputs.forEach((e) => {
    e.x -= minX;
    e.y -= minY;
  });
  let maxY = Math.max(...inputs.map((i) => i.y));

  return (
    <div
      style={{
        position: "relative",
        height: isFinite(maxY) ? maxY + diameter : undefined,
      }}
    >
      {inputs.map((e) => (
        <button
          key={e.id}
          style={{
            position: "absolute",
            backgroundColor: "orangered",
            borderRadius: "60%",
            height: diameter,
            width: diameter,
            top: e.y,
            left: e.x,
          }}
          onClick={() => drawHandler(e.id)}
        />
      ))}
    </div>
  );
}
