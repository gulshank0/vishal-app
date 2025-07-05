"use client";
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Sample projects data - replace with your actual projects
const projects = [
	{
		id: 1,
		title: "Cards",
		description:
			"A comprehensive Urban Studies platform with real-time data visualization.",
		image: "/n2.webp",
		link: "https://ustrdroneportal.in/",
		className: "bg-gradient-to-r from-purple-500 to-pink-500 target:blank",
	},
	{
		id: 2,
		title: "Invitation Cards",
		description:
			"Full-stack solution with payment integration and inventory management.",
		image: "/n3.webp",
		link: "https://gis-siidcul.com/",
	},
	{
		id: 3,
		title: "Banner And Poster",
		description:
			"Secure financial application with biometric authentication.",
		image: "/n1.jpg",
		link: "#",
	},
	{
		id: 4,
		title: "Personalized Marketing Content",
		description:
			"ML-powered tool that creates personalized marketing content.",
		image: "/n4.webp",
		link: "#",
	},
	{
		id: 5,
		title: "Hard Copy Printing",
		description:
			"AI-driven analytics platform for real-time business insights.",
		image: "/n5.webp",
		link: "#",
	},
	{
		id: 6,
		title: "Wedding Invitation Cards",
		description:
			"Cloud-based collaboration tool with project management features.",
		image: "/n6.webp",
		link: "#",
	},
	
];

export default function ServicePage() {
	return (
		<div className="bg-black min-h-screen ">
			<Navbar />

			<div className="container mx-auto px-4 py-16 pt-25">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
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
					className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-400"
				>
				
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
							className="bg-gradient-b from-black to-slate-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
						>
							<div className="h-64 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-2 text-white">
									{project.title}
								</h3>
								<p className="text-gray-400 mb-4">
									{project.description}
								</p>
							
								<a
									href={project.link}
									className="inline-block px-6 py-2 bg-gradient-to-r from-slate-900 to-gray-900 rounded-md hover: hover: transition-all duration-300 text-white font-medium"
								>
									View Project
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}