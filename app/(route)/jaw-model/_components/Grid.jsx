import * as THREE from "three";

function Grid({ meshName, nodes }) {
  const geometry = nodes[meshName].geometry;
  const [vertices, faces] = [
    geometry.attributes.position.array,
    geometry.index.array,
  ];
  const lines = [];

  for (let i = 0; i < faces.length; i += 3) {
    const v1 = new THREE.Vector3().fromArray(
      vertices.slice(faces[i] * 3, faces[i] * 3 + 3)
    );
    const v2 = new THREE.Vector3().fromArray(
      vertices.slice(faces[i + 1] * 3, faces[i + 1] * 3 + 3)
    );
    const v3 = new THREE.Vector3().fromArray(
      vertices.slice(faces[i + 2] * 3, faces[i + 2] * 3 + 3)
    );

    const line1 = new THREE.Line3(v1, v2);
    const line2 = new THREE.Line3(v2, v3);
    const line3 = new THREE.Line3(v3, v1);

    lines.push(line1, line2, line3);
  }

  return (
    <group>
      {lines.map((line, index) => (
        <lineSegments
          key={index}
          geometry={new THREE.BufferGeometry().setFromPoints([
            line.start,
            line.end,
          ])}
        >
          <lineBasicMaterial color={0x00ff00} />
        </lineSegments>
      ))}
    </group>
  );
}

export default Grid;
