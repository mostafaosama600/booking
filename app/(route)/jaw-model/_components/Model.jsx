"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Grid from "./Grid";

function Model({ handleClick, selectedMeshNames, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sceneModel.gltf");

  const handleMeshClick = (nodeName, geometry, index) => {
    handleClick(nodeName, geometry, index);
  };

  return (
    <group ref={group} {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      {Object.keys(nodes)
        .filter((nodeName) => nodeName.startsWith("Teeth_TeethMaterial_"))
        .map((nodeName, index) => (
          <mesh
            key={index}
            geometry={nodes[nodeName].geometry}
            material={materials.TeethMaterial}
            onClick={() =>
              handleMeshClick(nodeName, nodes[nodeName].geometry, index)
            }
          />
        ))}
      {selectedMeshNames.map((selectedMesh, index) => (
        <Grid key={index} meshName={selectedMesh} nodes={nodes} />
      ))}
    </group>
  );
}

export default Model;
