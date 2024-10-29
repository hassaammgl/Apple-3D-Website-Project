/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MacContainer = () => {
	const model = useGLTF("./mac.glb");

	let meshes = {};
	model.scene.traverse((e) => {
		meshes[e.name] = e;
	});
	console.log(meshes);

	meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);

	return (
		<group position={[0, -10, 20]}>
			<primitive object={model.scene} />;
		</group>
	);
};

export default MacContainer;
