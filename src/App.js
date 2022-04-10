import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Queen from "./components/chess-queen/Chess-q.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas id="canvas-container">
        <Suspense fallback={null}>
          <Queen />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
