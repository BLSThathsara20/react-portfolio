import React from "react";
import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Code,
	Cloud,
	Layout,
	Server,
	Star,
	ArrowRight,
	FileText,
	Infinity,
	Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";
import SEO from "../components/SEO";

const HomePage = () => {
	// Recruiter-focused content hierarchy
	const heroContent = {
		title: "Crafting Digital Experiences, Scaling Infinite Possibilities",
		subtitle: "Building scalable applications & automating infrastructure",
		description: "5+ years of full-stack development experience, now transitioning to DevOps engineering. Expert in React, Node.js, AWS, Docker, and CI/CD pipelines.",
		cta: {
			primary: { text: "View Projects", link: "/projects", icon: Code },
			secondary: { text: "Download Resume", link: "/cv.pdf", icon: FileText },
			tertiary: { text: "My Achievements", link: "/activities", icon: Award }
		}
	};

	const coreSkills = {
		webDev: {
			title: "Web Development",
			icon: Layout,
			color: "blue",
			description: "5+ years building modern web applications",
			technologies: [
				"React/Next.js",
				"Vue.js",
				"TypeScript",
				"Node.js",
				"Express",
				"Tailwind CSS",
				"Framer Motion",
			],
		},
		devops: {
			title: "DevOps & Cloud",
			icon: Cloud,
			color: "purple",
			description: "Infrastructure automation & cloud solutions",
			technologies: [
				"AWS",
				"Docker",
				"CI/CD",
				"Git",
				"Kubernetes",
				"Terraform",
				"Monitoring",
			],
		},
		backend: {
			title: "Backend & APIs",
			icon: Server,
			color: "green",
			description: "Scalable server-side solutions",
			technologies: [
				"Node.js",
				"Express",
				"MongoDB",
				"PostgreSQL",
				"REST APIs",
				"GraphQL",
				"Redis",
			],
		},
	};

	const keyProjects = [
		{
			title: "Circular Initiative Global",
			description: "Enterprise CMS with AWS infrastructure, CloudFront CDN, and automated CI/CD pipelines",
			tech: ["Next.js", "AWS", "CloudFront", "CI/CD", "Docker"],
			link: "/projects/circular-initiative",
			featured: true,
			highlight: "DevOps Focus"
		},
		{
			title: "AI Song Generator",
			description: "AI-powered application with real-time processing, Redis caching, and scalable architecture",
			tech: ["React", "Node.js", "TensorFlow", "Redis", "WebSocket"],
			link: "/projects/ai-song-generator",
			featured: true,
			highlight: "Full Stack"
		},
	];

	const achievements = {
		title: "Award-Winning Developer",
		items: [
			{ label: "LSEG Hackathon", value: "1st Place Winner", icon: Award },
			{ label: "Years Experience", value: "5+", icon: Infinity },
			{ label: "Projects Delivered", value: "50+", icon: Code },
			{ label: "Team Leadership", value: "Award-Winning", icon: Star },
		]
	};

	const socialLinks = [
		{
			name: "GitHub",
			icon: Github,
			url: "https://github.com/BLSThathsara20",
			color: "hover:text-gray-400",
		},
		{
			name: "LinkedIn",
			icon: Linkedin,
			url: "https://linkedin.com/in/blsthathsara",
			color: "hover:text-blue-400",
		},
		{
			name: "LinkTree",
			icon: ExternalLink,
			url: "https://linktr.ee/Savinduthathsara",
			color: "hover:text-green-400",
		},
		{
			name: "Email",
			icon: Mail,
			url: "mailto:blsthathsara@gmail.com",
			color: "hover:text-purple-400",
		},
	];

	return (
		<>
			<SEO
				title="Savindu Thathsara - Web Developer & DevOps Engineer"
				description="Experienced Web Developer transitioning to DevOps Engineering. 5+ years building scalable applications with React, Node.js, AWS, Docker, and CI/CD. Award-winning developer with proven track record."
				keywords={[
					"Web Developer",
					"DevOps Engineer",
					"React Developer",
					"AWS Engineer",
					"Docker",
					"CI/CD",
					"Full Stack Developer",
					"Cloud Engineer",
					"Infrastructure Automation",
					"Sri Lankan Developer"
				]}
			/>

			<div className="relative min-h-screen">
				<BackgroundVideo />

				<div className="relative z-10">
					{/* Hero Section - First Thing Recruiters See */}
					<section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-40">
						<div className="max-w-7xl mx-auto w-full">
							{/* Hero Content */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center mb-16"
							>
								{/* Status Badge */}
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5 }}
									className="inline-block mb-6"
								>
									<div className="relative">
										<motion.div
											className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 blur-lg opacity-75"
											animate={{
												scale: [1, 1.1, 1],
												opacity: [0.5, 0.8, 0.5],
											}}
											transition={{
												duration: 4,
												repeat: 9999,
												repeatType: "loop",
												ease: "linear",
												times: [0, 0.5, 1],
											}}
										/>
										<div className="relative bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-6 sm:px-8 sm:py-2 border border-white/10">
											<span className="text-xs sm:text-sm md:text-base font-medium text-white/80">
												5+ Years | Full Stack & Cloud
											</span>
										</div>
									</div>
								</motion.div>

								{/* Main Title - Humanized & Eye-Catching */}
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1, duration: 0.6 }}
									className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight px-2"
								>
									<span className="bg-clip-text text-transparent bg-gradient-to-r 
									                from-white via-blue-200 to-purple-200">
										Turning Ideas into
									</span>
									<br className="hidden sm:block" />
									<span className="bg-clip-text text-transparent bg-gradient-to-r 
									                from-purple-200 via-pink-200 to-blue-200">
										Reality
									</span>
								</motion.h1>

								{/* Subtitle */}
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.15, duration: 0.6 }}
									className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-3 sm:mb-4 px-2"
								>
									{heroContent.subtitle}
								</motion.p>

								{/* Description */}
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2, duration: 0.6 }}
									className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary 
									           max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-4"
								>
									{heroContent.description}
								</motion.p>

								{/* CTA Buttons - Primary Actions */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.6 }}
									className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4"
								>
									<Link
										to={heroContent.cta.primary.link}
										className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 
										         bg-gradient-to-r from-blue-500/30 to-purple-500/30 
										         hover:from-blue-500/40 hover:to-purple-500/40
										         rounded-xl backdrop-blur-sm border border-blue-500/40 
										         hover:border-blue-500/50
										         transition-all duration-300 overflow-hidden
										         shadow-lg hover:shadow-glow
										         font-semibold inline-flex items-center justify-center gap-2 text-text-primary text-sm sm:text-base"
									>
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
											initial={{ x: "-100%" }}
											whileHover={{ x: "100%" }}
											transition={{ duration: 0.8, ease: "easeInOut" }}
										/>
										<heroContent.cta.primary.icon className="w-5 h-5" />
										<span className="relative">{heroContent.cta.primary.text}</span>
										<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
									</Link>

									<Link
										to={heroContent.cta.tertiary.link}
										className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 
										         bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
										         hover:from-yellow-500/30 hover:to-orange-500/30
										         rounded-xl backdrop-blur-sm border border-yellow-500/30 
										         hover:border-yellow-500/40
										         transition-all duration-300 overflow-hidden
										         shadow-lg hover:shadow-glow
										         font-semibold inline-flex items-center justify-center gap-2 text-text-primary text-sm sm:text-base"
									>
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
											initial={{ x: "-100%" }}
											whileHover={{ x: "100%" }}
											transition={{ duration: 0.8, ease: "easeInOut" }}
										/>
										<heroContent.cta.tertiary.icon className="w-5 h-5" />
										<span className="relative">{heroContent.cta.tertiary.text}</span>
										<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
									</Link>

									<a
										href={heroContent.cta.secondary.link}
										download="Savindu_Thathsara_Resume.pdf"
										target="_blank"
										rel="noopener noreferrer"
										className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 
										           glass-enhanced rounded-xl 
										           border border-white/10 hover:border-white/20 
										           transition-all duration-300
										           font-semibold text-text-primary
										           hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm sm:text-base"
									>
										<heroContent.cta.secondary.icon className="w-5 h-5" />
										{heroContent.cta.secondary.text}
									</a>
								</motion.div>
							</motion.div>

							{/* Core Skills - Second Thing Recruiters Look For */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className="mb-12 sm:mb-16 px-4"
							>
								<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-text-primary">
									Core Expertise
								</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
									{Object.values(coreSkills).map((skill, index) => (
										<motion.div
											key={skill.title}
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.5 + index * 0.1,
												duration: 0.5,
												ease: [0.4, 0, 0.2, 1]
											}}
											className="group relative overflow-hidden rounded-2xl card-hover"
										>
											<div
												className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 
								         rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
											/>
											<div className="relative glass-enhanced h-full rounded-2xl p-4 sm:p-6 lg:p-8">
												<motion.div
													className="mb-4 sm:mb-5"
													whileHover={{ scale: 1.1, rotate: 5 }}
													transition={{ type: "spring", stiffness: 300 }}
												>
													<skill.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${skill.color}-400`} />
												</motion.div>

												<h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-text-primary">
													{skill.title}
												</h3>
												<p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
													{skill.description}
												</p>

												<div className="flex flex-wrap gap-2">
													{skill.technologies.map((tech, i) => (
														<motion.span
															key={tech}
															initial={{ opacity: 0, scale: 0.8 }}
															animate={{ opacity: 1, scale: 1 }}
															transition={{
																delay: 0.6 + i * 0.05,
																type: "spring",
																stiffness: 200
															}}
															whileHover={{ scale: 1.05 }}
															className="px-3 py-1.5 text-xs lg:text-sm 
															           bg-white/5 hover:bg-white/10 
															           rounded-full border border-white/10 
															           hover:border-white/20 
															           transition-all duration-200
															           text-text-secondary"
														>
															{tech}
														</motion.span>
													))}
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Key Projects - Third Thing: Proof of Work */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8, duration: 0.5 }}
								className="mb-12 sm:mb-16 px-4"
							>
								<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-text-primary">
									Featured Projects
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
									{keyProjects.map((project, index) => (
										<Link
											key={project.title}
											to={project.link}
											className="group relative glass-enhanced rounded-2xl p-4 sm:p-6 lg:p-8 
											         border border-white/10 hover:border-white/20 
											         transition-all duration-300 overflow-hidden
											         card-hover"
										>
											{project.featured && (
												<motion.div
													initial={{ scale: 0, rotate: -180 }}
													animate={{ scale: 1, rotate: 0 }}
													transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
													className="absolute top-4 right-4 px-3 py-1.5 
													           bg-gradient-to-r from-blue-500/20 to-purple-500/20 
													           rounded-full text-xs lg:text-sm 
													           border border-blue-500/30 
													           backdrop-blur-sm flex items-center gap-2
													           shadow-glow"
												>
													<Star className="w-3 h-3 text-blue-400" />
													<span className="font-medium">{project.highlight}</span>
												</motion.div>
											)}

											<h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 
											          group-hover:text-blue-400 
											          transition-colors duration-300 pr-16 sm:pr-24
											          text-text-primary">
												{project.title}
											</h3>
											<p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
												{project.description}
											</p>

											<div className="flex flex-wrap gap-2 mb-4">
												{project.tech.map((tech) => (
													<motion.span
														key={tech}
														whileHover={{ scale: 1.05 }}
														className="px-3 py-1.5 text-xs lg:text-sm 
														           bg-white/5 hover:bg-white/10 
														           rounded-full border border-white/10 
														           hover:border-white/20
														           transition-all duration-200
														           text-text-secondary"
													>
														{tech}
													</motion.span>
												))}
											</div>

											<motion.div
												className="absolute inset-0 bg-gradient-to-br 
												         from-blue-500/5 via-purple-500/5 to-green-500/5 
												         opacity-0 group-hover:opacity-100 
												         transition-opacity duration-500"
												initial={false}
											/>

											<motion.div
												className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 
												         transition-opacity duration-300"
												initial={false}
											>
												<ArrowRight className="w-5 h-5 text-blue-400" />
											</motion.div>
										</Link>
									))}
								</div>
							</motion.div>

							{/* Achievements - Fourth: Credibility */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.0, duration: 0.5 }}
								className="mb-8 sm:mb-12 px-4"
							>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
									{achievements.items.map((item, index) => (
										<motion.div
											key={item.label}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 1.1 + index * 0.1 }}
											className="glass-enhanced rounded-xl p-4 sm:p-6 text-center border border-white/10
											         hover:border-white/20 transition-all duration-300"
										>
											<item.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
											<div className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-1">
												{item.value}
											</div>
											<div className="text-xs sm:text-sm text-text-secondary">{item.label}</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Social Links - Fifth: Contact */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 }}
								className="flex justify-center gap-4 sm:gap-6 px-4"
							>
								{socialLinks.map((link) => (
									<motion.a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`p-2.5 sm:p-3 rounded-xl glass-enhanced border border-white/10 
										           transition-all duration-300 ${link.color}
										           hover:border-white/20`}
										whileHover={{
											scale: 1.1,
											backgroundColor: "rgba(255, 255, 255, 0.1)",
										}}
										whileTap={{ scale: 0.95 }}
										aria-label={link.name}
									>
										<link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
										<span className="sr-only">{link.name}</span>
									</motion.a>
								))}
							</motion.div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default HomePage;
