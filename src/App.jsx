import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer.jsx";

const App = () => {
	return (
		<div className="w-full h-screen">
			<div className="absolute text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Dispaly']">
				<h3 className="text-7xl tracking-tighter font-[700]">
					macbook pro.
				</h3>
				<h5>Oh so pro !</h5>
				<p className="text-center w-3/4">
					Macbook Pro is the perfect combination of performance and
					design
				</p>
			</div>
			<Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
				<Environment
					files={[
						"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
					]}
				/>
				<ScrollControls>
					<MacContainer />
				</ScrollControls>
			</Canvas>
		</div>
	);
};

export default App;
