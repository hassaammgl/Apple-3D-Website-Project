import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer.jsx";

const App = () => {
	return (
		<Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
			{/* <OrbitControls /> */}
			<Environment
				files={[
					"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
				]}
			/>
			<ScrollControls>
				<MacContainer />
			</ScrollControls>
		</Canvas>
	);
};

export default App;
