export default function MeshGradient() {
  return (
    <>
      <div className="mesh-gradient pointer-events-none"></div>
      <div className="ambient-glow top-[-10%] left-[-10%] pointer-events-none"></div>
      <div className="ambient-glow bottom-[10%] right-[-5%] opacity-50 pointer-events-none"></div>
    </>
  );
}
