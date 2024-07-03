"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./_components/Model";
import { Button } from "@/components/ui/button";

export default function JawModel() {
  const [selectedMeshNames, setSelectedMeshNames] = useState([]);
  const { copied, setCopied } = useState(false);

  function handleClick(meshName, _, __) {
    if (selectedMeshNames.includes(meshName)) {
      setSelectedMeshNames(
        selectedMeshNames.filter((mesh) => mesh !== meshName)
      );
    } else {
      setSelectedMeshNames([...selectedMeshNames, meshName]);
    }
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(selectedMeshNames.join(", "))
      .then(() => {
        console.log("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <div className="container-fluid my-4 p-1">
      <div className="flex justify-center items-center border rounded-sm p-1 h-[75vh]">
        <Canvas>
          <Stage environment="forest">
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Model
              scale={[0.5, 0.5, 0.5]}
              handleClick={handleClick}
              selectedMeshNames={selectedMeshNames}
            />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Stage>
        </Canvas>
      </div>
      <div className="my-2 flex justify-between items-center gap-5">
        {selectedMeshNames.length > 0 && (
          <h2>{selectedMeshNames.join(", ")}</h2>
        )}
        {selectedMeshNames.length > 0 && (
          <Button className="btn" onClick={handleCopy}>
            Copy
          </Button>
        )}
      </div>
    </div>
  );
}
