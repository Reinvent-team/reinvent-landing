import {
	ArrowUpRight,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";

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
						<h2 className="text-[2.5rem] md:text-4xl font-extrabold tracking-tight mb-4 md:mb-5 leading-tight">
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

				<div className="relative flex items-center justify-center h-[560px] md:h-[500px]">
					<div className="flex items-center justify-center gap-4 md:gap-6 w-full h-full overflow-hidden perspective-1000">
						{MOCK_PROJECTS.map((project, index) => {
							const isActive = index === activeIndex;
							const isPrev = index === activeIndex - 1;
							const isNext = index === activeIndex + 1;

							if (!isActive && !isPrev && !isNext) return null;

							return (
								<div
									key={project.id}
									className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] glass-card rounded-[2rem] overflow-hidden flex flex-col cursor-pointer shrink-0
										${
											isActive
												? "w-[90vw] sm:w-[450px] h-[540px] md:h-[480px] scale-100 opacity-100 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-accent/30"
												: "w-[280px] md:w-[300px] h-[380px] md:h-[400px] scale-90 opacity-40 z-10 hidden md:flex hover:opacity-60 hover:scale-95"
										}
									`}
									onClick={() => setActiveIndex(index)}
								>
									{/* Image Container */}
									<div className="h-[50%] md:h-[55%] w-full relative flex items-center justify-center overflow-hidden border-b border-white/5 group/img">
										<img 
											src={project.image} 
											alt={project.title} 
											className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover/img:grayscale-0"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent z-10"></div>
									</div>

									{/* Content */}
									<div className="p-6 md:p-8 flex-1 flex flex-col bg-brand-secondary/90">
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
										{isActive && (
											<p className="text-sm md:text-base text-gray-400 mb-6 flex-1 leading-relaxed font-light">
												{project.description}
											</p>
										)}

										<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
											<div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400">
												<CheckCircle2 size={18} className="text-brand-accent" />
												<span>{project.status}</span>
											</div>
											{isActive && (
												<button
													type="button"
													className="group flex items-center gap-2 text-brand-accent text-sm md:text-base font-bold hover:text-brand-accent-bright transition-colors"
												>
													Explorar
													<ArrowUpRight
														size={18}
														className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
													/>
												</button>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="mt-10 md:mt-12 text-center">
					<button
						type="button"
						className="w-full sm:w-auto px-8 md:px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white backdrop-blur-sm text-base md:text-lg"
					>
						Ver portafolio completo
					</button>
				</div>
			</div>
		</section>
	);
}
