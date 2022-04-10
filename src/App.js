import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./component/three";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas id="canvas-container">
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
