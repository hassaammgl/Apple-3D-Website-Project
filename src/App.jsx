import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer.jsx";

const App = () => {
	return (
		<div className="w-full h-screen">
			<div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
				{[
					"iPhone",
					"iPad",
					"services",
					"ios",
					"mac",
					"products",
					"iPhone",
					"iPad",
					"services",
					"ios",
					"mac",
					"products",
				].map((e, i) => (
					<a
						key={i}
						href=""
						className="text-white font-[500] text-sm capitalize"
					>
						{e}
					</a>
				))}
			</div>
			<div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Dispaly']">
				<h3 className="masked text-7xl tracking-tighter font-[700]">
					macbook pro.
				</h3>
				<h5>Oh so pro !</h5>
				<p className="text-center w-3/4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Pariatur nulla vel excepturi quos!
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
