import React from "react";
import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	ArrowRight,
	Code,
	Brain,
	Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/unnamed.png";

const AboutPage = () => {
	const specialties = [
		{
			icon: Code,
			title: "AI-Powered App Developer",
			description:
				"Leveraging OpenAI models, Gemini, and Replicate AI to build intelligent applications that transform user experiences.",
			skills: ["OpenAI API", "Gemini Model", "Replicate AI"],
		},
		{
			icon: Brain,
			title: "Problem Solver",
			description:
				"Passionate about finding elegant solutions to complex problems through clean and efficient code.",
			skills: ["Performance", "Optimization", "Clean Code"],
		},
		{
			icon: Rocket,
			title: "Innovation Focused",
			description:
				"Always exploring new technologies and approaches to create better user experiences.",
			skills: ["Modern UI", "Animations", "User Experience"],
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="min-h-screen p-4 sm:p-8 pb-32"
		>
			<div className="max-w-6xl mx-auto pt-20">
				{/* Hero Section */}
				<div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
					{/* Profile Image */}
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", duration: 0.8 }}
						className="relative"
					>
						<div
							className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden 
                          border-2 border-white/20 backdrop-blur-lg"
						>
							<img
								src={profileImage}
								alt="Savindu Thaththsara"
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Animated background elements */}
						<motion.div
							className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                       rounded-2xl blur-xl"
							animate={{
								scale: [1, 1.2, 1],
								rotate: [0, 45, 0],
							}}
							transition={{
								duration: 8,
								repeat: 9999,
								repeatType: "loop",
								ease: "linear",
							}}
						/>
					</motion.div>

					{/* Intro Text */}
					<div className="flex-1 text-center lg:text-left">
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="space-y-6"
						>
							<h1 className="text-4xl sm:text-5xl font-bold">
								Hi, I'm Savindu 👋
							</h1>
							<p className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-2xl">
								Crafting immersive digital experiences that captivate and
								inspire. I transform ideas into interactive realities, blending
								innovation with seamless design to create interfaces that users
								not only use, but love. Let's build the future of the web
								together.
							</p>

							{/* Social Links */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="flex flex-wrap gap-4 justify-center lg:justify-start"
							>
								<motion.a
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									href="https://github.com/BLSThathsara20"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-6 py-3 glass-enhanced 
									           hover:border-white/20 rounded-xl 
									           border border-white/10 transition-all duration-300
									           font-medium text-text-primary
									           hover:shadow-lg"
								>
									<Github className="w-5 h-5" />
									GitHub
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									href="https://linkedin.com/in/blsthathsara"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-6 py-3 glass-enhanced 
									           hover:border-white/20 rounded-xl 
									           border border-white/10 transition-all duration-300
									           font-medium text-text-primary
									           hover:shadow-lg"
								>
									<Linkedin className="w-5 h-5" />
									LinkedIn
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									href="mailto:blsthathsara@gmail.com"
									className="flex items-center gap-2 px-6 py-3 glass-enhanced 
									           hover:border-white/20 rounded-xl 
									           border border-white/10 transition-all duration-300
									           font-medium text-text-primary
									           hover:shadow-lg"
								>
									<Mail className="w-5 h-5" />
									Email Me
								</motion.a>
							</motion.div>
						</motion.div>
					</div>
				</div>

					{/* Specialties Section - Enhanced UI */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
					>
						{specialties.map((specialty, index) => (
							<motion.div
								key={index}
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ 
									delay: 0.5 + index * 0.1,
									duration: 0.5,
									ease: [0.4, 0, 0.2, 1]
								}}
								whileHover={{ y: -5 }}
								className="group glass-enhanced rounded-2xl p-6 lg:p-8 
								           border border-white/10 hover:border-white/20 
								           transition-all duration-300 card-hover"
							>
								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="mb-5"
								>
									<specialty.icon
										className="w-10 h-10 lg:w-12 lg:h-12 text-text-tertiary 
										         group-hover:text-blue-400 transition-colors duration-300"
									/>
								</motion.div>
								<h3 className="text-xl lg:text-2xl font-bold mb-3 text-text-primary">
									{specialty.title}
								</h3>
								<p className="text-text-secondary mb-6 leading-relaxed">
									{specialty.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{specialty.skills.map((skill) => (
										<motion.span
											key={skill}
											whileHover={{ scale: 1.05 }}
											className="px-3 py-1.5 bg-white/5 hover:bg-white/10 
											           rounded-full text-xs lg:text-sm 
											           border border-white/10 hover:border-white/20
											           transition-all duration-200
											           text-text-secondary"
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>

				{/* Resume Link */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					className="text-center"
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to="/resume"
							className="inline-flex items-center gap-2 px-8 py-4 lg:px-10 lg:py-5 
							         bg-gradient-to-r from-blue-500/20 to-purple-500/20 
							         hover:from-blue-500/30 hover:to-purple-500/30
							         rounded-xl backdrop-blur-sm 
							         border border-blue-500/30 hover:border-blue-500/40
							         transition-all duration-300 group
							         font-medium text-text-primary
							         shadow-lg hover:shadow-glow"
						>
							<span>View Full Resume</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
