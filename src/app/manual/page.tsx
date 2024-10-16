const inputs = [
  { x: 200.0000000000001, y: 177.9422863405994, Diameter: 20.0, id: "1" },
  { x: 145.0000000000001, y: 177.9422863405994, Diameter: 20.0, id: "2" },
];

export default function Page() {
  return (
    <>
      {inputs.map((e) => (
        <button key={e.id}>
          <div
            className="circle"
            style={{
              position: "relative",
              backgroundColor: "orangered",
              borderRadius: "60%",
              width: e.Diameter,
              height: e.Diameter,
              top: e.y,
              left: e.x,
            }}
          />
        </button>
      ))}
    </>
  );
}
