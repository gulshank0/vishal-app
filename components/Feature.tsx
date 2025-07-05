"use client";
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Sample projects data - replace with your actual projects
const projects = [
	{
		id: 1,
		title: "Wedding Cards",
		description:
			"We make Wedding Cards of all types, including digital and printed.",
		image: "/n2.webp",
		link: "https://ustrdroneportal.in/",
		className: "bg-gradient-to-r from-purple-500 to-pink-500 target:blank",
	},
	{
		id: 2,
		title: "Poster and Banner",
		description:
			"All type of political poster, cards, and banners.",
		image: "/poster.jpeg",
		link: "https://gis-siidcul.com/",
	},
	{
		id: 3,
		title: "Banner And Poster",
		description:
			"Banners, visiting cards, and posters for all types of events.",
		image: "/poli.jpeg",
		link: "#",
	},
	{
		id: 4,
		title: "Personalized Frames",
		description:
			"We create personalized frames for all occasions.",
		image: "/frame.jpeg",
		link: "#",
	},
	{
		id: 5,
		title: "Hard Copy Printing",
		description:
			"Printing hard copies for various needs.",
		image: "/n5.webp",
		link: "#",
	},
	{
		id: 6,
		title: "Advertisement Design",
		description:
			"We design the best advertisements banners and posters of your business and visiting card of that too.",
		image: "/ads.jpeg",
		link: "#",
	},
	
];

export default function ServicePage() {
	return (
		<div className="bg-black min-h-screen ">
			<Navbar />

			<div className="container mx-auto px-4 py-16 pt-25">
				<motion.h1
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl font-bold text-center mb-4 text-stone-100 bg-clip-text"
				>
					Our Services
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-xl text-center max-w-3xl mx-auto mb-10 text-gray-400"
				>
				
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
							className="bg-gradient-b from-black to-slate-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
						>
							<div className="h-80 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-right-top transition-all duration-500 hover:scale-110"
								/>
							</div>
							<div className="p-6 bg-gradient-to-b from-zinc-950 to-slate-950">
								<h3 className="text-2xl font-bold mb-2 text-white">
									{project.title}
								</h3>
								<p className="text-gray-400 mb-2">
									{project.description}
								</p>	
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}