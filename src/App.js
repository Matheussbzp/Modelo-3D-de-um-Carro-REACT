import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// Componente que carrega o objeto 3D com o hook `useGLTF`
function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    // Componente principal que cria o contexto 3D
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
      {/* Define a cor de fundo do canvas */}
      <color attach="background" args={["#101010"]} />

      {/* Controles de apresentação */}
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 3]}>
        {/* Cenário em que o modelo será renderizado */}
        <Stage environment={"sunset"}>
          {/* Modelo importado com escala personalizada */}
          <Model scale={0.05} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
