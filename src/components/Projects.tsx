import {
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
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
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [isDesktop, setIsDesktop] = useState(true);
	const [isTablet, setIsTablet] = useState(false);

	const springTransition = { type: "spring" as const, stiffness: 250, damping: 30, mass: 1 };

	useEffect(() => {
		const handleResize = () => {
			setIsTablet(window.innerWidth >= 1024 && window.innerWidth < 1280);
			setIsDesktop(window.innerWidth >= 1280);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStart === null) return;
		const touchEnd = e.changedTouches[0].clientX;
		const distance = touchStart - touchEnd;

		if (distance > 50 && activeIndex < MOCK_PROJECTS.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else if (distance < -50 && activeIndex > 0) {
			setActiveIndex(Math.max(0, activeIndex - 1));
		}
		setTouchStart(null);
	};

	return (
		<section id="projects" className="py-16 md:py-20 relative border-t border-white/5">
			{/* subtle grid background */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMzBoNmY2djZoLTZ2LTZ6TTEwIDIwaDEwdjEwSDEwVjIweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6 md:gap-10">
					<div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-5 leading-tight">
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

				<div
					className="relative flex items-center justify-center h-[460px] sm:h-[560px] lg:h-[500px] overflow-hidden w-full max-w-[100vw] touch-pan-y"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<div className="flex items-center justify-center gap-0 lg:gap-8 xl:gap-12 w-full h-full perspective-1000 px-0 sm:px-4">
						{MOCK_PROJECTS.map((project, index) => {
							const isActive = index === activeIndex;
							
							// Tablet window logic: only 2 cards visible
							const startIndexTablet = Math.min(activeIndex, Math.max(0, MOCK_PROJECTS.length - 2));
							const isVisibleTablet = index >= startIndexTablet && index <= startIndexTablet + 1;
							
							let opacity = 0;
							if (isActive) opacity = 1;
							else if (isDesktop) opacity = 0.4;
							else if (isTablet) opacity = isVisibleTablet ? 0.4 : 0;
							else opacity = 0;

							let xPos = 0;
							if (!isActive) {
								if (isDesktop) xPos = 0;
								else if (isTablet) xPos = isVisibleTablet ? 0 : (index < activeIndex ? -200 : 200);
								else xPos = index < activeIndex ? -200 : 200;
							}

							return (
								<motion.div
									key={project.id}
									layout
									initial={false}
									animate={{
										opacity,
										scale: isActive ? 1 : (isDesktop || isTablet ? 0.9 : 0.8),
										zIndex: isActive ? 20 : 10,
										x: xPos
									}}
									transition={springTransition}
									className={`glass-card rounded-[2rem] overflow-hidden flex flex-col cursor-pointer shrink-0 will-change-transform
										${isActive
											? "relative w-[84vw] max-w-[320px] sm:max-w-none sm:w-[450px] lg:w-[400px] xl:w-[450px] h-[420px] sm:h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-accent/40"
											: `h-[420px] lg:h-[400px] border-transparent lg:border-white/10 hover:opacity-80 pointer-events-none lg:pointer-events-auto ${
												isDesktop
													? 'relative xl:w-[300px]'
													: (isTablet
														? (isVisibleTablet ? 'relative lg:w-[280px]' : 'absolute w-[84vw] max-w-[320px] sm:max-w-none sm:w-[450px] opacity-0 pointer-events-none')
														: 'absolute w-[84vw] max-w-[320px] sm:max-w-none sm:w-[450px]')
											}`
										}
									`}
									onClick={() => setActiveIndex(index)}
								>
									{/* Image Container */}
									<motion.div layout transition={springTransition} className="h-[50%] md:h-[55%] w-full relative flex items-center justify-center overflow-hidden border-b border-white/5 pointer-events-none">
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
									</motion.div>

									{/* Content */}
									<motion.div layout transition={springTransition} className="p-6 md:p-8 flex-1 flex flex-col bg-brand-secondary/90 pointer-events-none">
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
											layout
											initial={false}
											animate={{ opacity: isActive ? 1 : 0 }}
											transition={springTransition}
											className={`overflow-hidden ${isActive ? 'h-auto mt-2' : 'h-0 mt-0'}`}
										>
											<p className="text-sm md:text-base text-gray-400 flex-1 leading-relaxed font-light pointer-events-auto pb-4">
												{project.description}
											</p>
										</motion.div>

										<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
											<div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400">
												<CheckCircle2 size={18} className="text-brand-accent" />
												<span>{project.status}</span>
											</div>
										</div>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				</div>

				<div className="mt-10 md:mt-12 text-center">
					<a
						href="http://localhost:5174"
						className="inline-block w-auto px-8 md:px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white backdrop-blur-sm text-base md:text-lg"
					>
						Ver portafolio completo
					</a>
				</div>
			</div>
		</section>
	);
}
