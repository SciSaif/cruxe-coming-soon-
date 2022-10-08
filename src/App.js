import Img from "./dashboardSS.png";

function App() {
	return (
		<div className="sm:flex-row text-slate-600 font-epilogue md:mx-24 flex flex-col h-screen">
			<div className="sm:m-10 md:20 lg:24 m-8 max-w-[500px]">
				<h3 className="sm:mt-16 md:mt-44 lg:mt-32 mt-5 mb-8 text-white">Coming Soon</h3>
				<h1 className="mb-10 text-5xl font-bold text-orange-500">Introducing Cruxe </h1>

				<p className="drop-shadow-md ">
					Commission-free investing, plus the tools you need to put your money in motion. Sign up to be
					notified when we launch and get your first stock for free.
				</p>

				<input
					type="email"
					className="block w-full px-5 py-2 mt-5 font-sans border-2 border-orange-500 rounded-lg outline-none"
					placeholder="Your Email"
				/>
				<button className="btn hover:bg-orange-600 hover:scale-105 w-full py-3 mt-5 mb-5 text-lg font-semibold text-white transition duration-300 ease-in-out bg-orange-400 rounded-full">
					Get Notified
				</button>
				<p className="drop-shadow-md shadow-orange-400 ">
					Get notified when we launch and get your first stock for free.
				</p>
			</div>
			<div className=" flex flex-row items-center justify-center">
				<div className=" sm:w-2/3 md:3/4 sm:mb-0 shadow-orange-400 w-3/4 mb-10 overflow-hidden rounded-lg shadow-lg">
					<img src={Img} alt="img" />
				</div>
			</div>
		</div>
	);
}

export default App;
