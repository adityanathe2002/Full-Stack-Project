import React from "react";
import video1 from "../../assets/image/earthmp4.mp4";
import img1 from "../../assets/image/rocket1.jpg";
import img2 from "../../assets/image/solar.jpg";
import img3 from "../../assets/image/mars1.avif";
import img4 from "../../assets/image/Yuri_Gagarin.jpg";
import img5 from "../../assets/image/Neil_Armstrong.jpg";
import HomeSection2 from "./HomeSection2";

const HomeSection3 = () => {
	return (
		<div className="relative mt-10">
			{/* Background Video - Fixed */}
			<video
				src={video1}
				autoPlay
				loop
				muted
				className="fixed top-0 left-0 right-0 w-full h-full object-cover -z-10"
			/>
			{/* Black Transparent Overlay */}
			<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

			{/* Scrollable Content */}
			<div className="relative z-10 text-white">
				{/* rocket */}
				<div className="w-[100%] h-auto  md:h-[100vh] mb-20 md:mb-0 flex flex-col md:flex-row items-center  px-4">
					<div className="md:w-[40%] w-[100%] flex justify-center ">
						<img
							data-aos="fade-up"
							src={img1}
							alt="Rocket"
							className="w-[100%] h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
						/>
					</div>
					<div data-aos="fade-up" className="w-[100%] md:w-[60%] ">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">
							Journey Beyond Earth – Discover the Wonders of Space.
						</h1>
						<h1 className="text-lg md:text-xl">
							With fire and thunder, we break free from Earth's grasp, soaring into the unknown.
							Every launch is a step closer to unraveling the mysteries of the universe
						</h1>
					</div>
				</div>

				{/* planets */}
				<div className="w-[100%] h-auto md:h-[100vh] mb-20 md:mb-0  flex flex-col-reverse  md:flex-row items-center px-4 ">
					<div data-aos="fade-up" className="w-[100%] md:w-[60%]">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">
							Endless galaxies, infinite wonders." 🌌✨
						</h1>
						<h1 className="text-lg md:text-xl">
							Drifting through the vast cosmic ocean, planets dance around their stars, while galaxies weave the grand tapestry of the universe.
							Beyond our world lies an endless expanse of stars, planets, and galaxies—each holding secrets waiting to be uncovered
						</h1>
					</div>
					<div className="flex justify-center md:w-[40%] w-[100%] ">
						<img
							data-aos="fade-up"
							src={img2}
							alt="Rocket"
							className="w-[100%] h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
						/>
					</div>
				</div>

				{/* Mars */}
				<div className="w-[100%]h-auto md:h-[100vh] mb-20 md:mb-0   flex flex-col md:flex-row items-center px-4">
					<div className="md:w-[40%] w-[100%] flex justify-center ">
						<img
						data-aos="fade-up"
							src={img3}
							alt="Rocket"
							className="w-[100%] h-64 md:w-110 md:h-96 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
						/>
					</div>
					<div data-aos="fade-up" className="w-[100%] md:w-[60%]">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">
							Mars: The Mysterious Red Planet
						</h1>
						<h1 className="text-lg md:text-xl">
							Mars, the fourth planet from the Sun, is often called the Red Planet due to its iron-rich, dusty surface. It has the tallest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris. Mars has a thin atmosphere primarily composed of carbon dioxide, making it incapable of supporting human life naturally
						</h1>
					</div>
				</div>

				{/* Yuri Alekseyevich */}
				<div className="w-[100%] h-auto md:h-[100vh] mb-20 md:mb-0  flex flex-col-reverse  md:flex-row items-center px-4 ">
					<div data-aos="fade-up" className="w-[100%] md:w-[60%]">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">
							April 1961 – First Human Entered Space
						</h1>
						<h1 className="text-lg md:text-xl">
							Yuri Alekseyevich Gagarin (9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who, aboard the first successful crewed spaceflight, became the first person to journey into outer space. Travelling on Vostok 1, Gagarin completed one orbit of Earth on 12 April 1961,
						</h1>
					</div>
					<div className="flex justify-center md:w-[40%] w-[100%] ">
						<img
						data-aos="fade-up"
							src={img4}
							alt="Rocket"
							className="w-[100%] h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
						/>
					</div>
				</div>

				{/* Neil Armstrong */}
				<div className="w-[100%]h-auto md:h-[100vh] mb-20 md:mb-0   flex flex-col md:flex-row items-center px-4">
					<div className="md:w-[40%] w-[100%] flex justify-center ">
						<img
						data-aos="fade-up"
							src={img5}
							alt="Rocket"
							className="w-[100%] h-64 md:w-110 md:h-96 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
						/>
					</div>
					<div data-aos="fade-up"  className="w-[100%] md:w-[60%]">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">
							Neil Armstrong: The First Man on the Moon
						</h1>
						<h1 className="text-lg md:text-xl">
							The first person on the Moon was Neil Armstrong, an American astronaut who set foot on the lunar surface on July 20, 1969, during the Apollo 11 mission. His famous words were:
							"That's one small step for man, one giant leap for mankind."
						</h1>
					</div>
				</div>

			</div>
		</div>
	);
};

export default HomeSection3;
