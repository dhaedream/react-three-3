import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import Queen from "./components/chess-queen/Chess-q.js";

import "./App.css";

export default function App() {
  return (
    <Canvas id="canvas-container">
      <Suspense fallback={null}>
        <Queen />
      </Suspense>
    </Canvas>
  );
}
