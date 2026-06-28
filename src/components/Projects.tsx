import {
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const MOCK_PROJECTS = [
	{
		id: 1,
		title: "Space M",
		description: "Plataforma inmersiva de exploración espacial.",
		tags: ["UX/UI", "Desarrollo Web"],
		status: "Finalizado en 2023",
		image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		title: "BA-SS",
		description:
			"App colaborativa que permite a músicos crear y producir en equipo.",
		tags: ["App", "Música"],
		status: "Finalizado en 2024",
		image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Harmony CLC",
		description: "Dashboard administrativo para control logístico avanzado.",
		tags: ["Dashboard", "Gestión"],
		status: "En desarrollo",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
	},
];

export function Projects() {
	const [activeIndex, setActiveIndex] = useState(1);

	return (
		<section id="projects" className="py-16 md:py-20 relative border-t border-white/5">
			{/* subtle grid background */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMzBoNmY2djZoLTZ2LTZ6TTEwIDIwaDEwdjEwSDEwVjIweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6 md:gap-10">
					<div>
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-5 leading-tight">
							Proyectos <span className="text-brand-accent">&</span> Producción
						</h2>
						<p className="text-gray-400 text-base md:text-lg max-w-xl font-light">
							Explora nuestro portafolio de soluciones reales creadas para
							evolucionar y destacar en su industria.
						</p>
					</div>
					<div className="flex gap-4 self-end md:self-auto">
						<button
							type="button"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent/20 hover:border-brand-accent/50 hover:text-brand-accent-bright transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-white/20 disabled:hover:text-white text-white group"
							onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
							disabled={activeIndex === 0}
						>
							<ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
						</button>
						<button
							type="button"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent/20 hover:border-brand-accent/50 hover:text-brand-accent-bright transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-white/20 disabled:hover:text-white text-white group"
							onClick={() =>
								setActiveIndex(
									Math.min(MOCK_PROJECTS.length - 1, activeIndex + 1),
								)
							}
							disabled={activeIndex === MOCK_PROJECTS.length - 1}
						>
							<ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
						</button>
					</div>
				</div>

				<div className="relative flex items-center justify-center h-[560px] md:h-[500px] overflow-hidden w-full max-w-[100vw]">
					<div className="flex items-center justify-center gap-4 md:gap-8 w-full h-full perspective-1000 px-4">
						{MOCK_PROJECTS.map((project, index) => {
							const isActive = index === activeIndex;
							// Determinar si debe ser visible en pantallas pequeñas
							const isVisibleOnMobile = isActive || (index === activeIndex - 1 && activeIndex > 0) || (index === activeIndex + 1 && activeIndex < MOCK_PROJECTS.length - 1);

							return (
								<motion.div
									key={project.id}
									layout="position"
									initial={false}
									animate={{
										opacity: isActive ? 1 : 0.4,
										scale: isActive ? 1 : 0.9,
										zIndex: isActive ? 20 : 10,
										display: !isVisibleOnMobile && typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'flex'
									}}
									transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.8 }}
									className={`glass-card rounded-[2rem] overflow-hidden flex flex-col cursor-pointer shrink-0 will-change-transform
										${isActive
											? "w-[85vw] sm:w-[450px] h-[520px] md:h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-accent/40"
											: "w-[0px] md:w-[300px] h-[0px] md:h-[400px] border-white/10 hover:opacity-80"
										}
									`}
									onClick={() => setActiveIndex(index)}
								>
									{/* Image Container */}
									<div className="h-[50%] md:h-[55%] w-full relative flex items-center justify-center overflow-hidden border-b border-white/5 pointer-events-none">
										<motion.img
											src={project.image}
											alt={project.title}
											className="absolute inset-0 w-full h-full object-cover"
											animate={{
												scale: isActive ? 1.05 : 1,
												filter: isActive ? 'grayscale(0%)' : 'grayscale(50%)'
											}}
											transition={{ duration: 0.5 }}
										/>
									</div>

									{/* Content */}
									<div className="p-6 md:p-8 flex-1 flex flex-col bg-brand-secondary/90 pointer-events-none">
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-semibold text-gray-300"
												>
													{tag}
												</span>
											))}
										</div>
										<h3 className="font-bold text-2xl md:text-3xl mb-3 text-white">
											{project.title}
										</h3>

										<motion.div
											animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
											className="overflow-hidden"
										>
											<p className="text-sm md:text-base text-gray-400 mb-6 flex-1 leading-relaxed font-light pointer-events-auto">
												{project.description}
											</p>
										</motion.div>

										<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
											<div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400">
												<CheckCircle2 size={18} className="text-brand-accent" />
												<span>{project.status}</span>
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				<div className="mt-10 md:mt-12 text-center">
					<a
						href="http://localhost:5174"
						className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white backdrop-blur-sm text-base md:text-lg"
					>
						Ver portafolio completo
					</a>
				</div>
			</div>
		</section>
	);
}
