import { useState } from "react";

export function About() {
	const [showMore, setShowMore] = useState(false);

	return (
		<section id="about" className="min-h-[100vh] flex flex-col justify-center py-16 md:py-32 relative overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-brand-accent/5 to-transparent"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
					{/* Text Side (First on Mobile) */}
					<div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start bg-white/[0.03] lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-[2rem] lg:rounded-none border border-white/5 lg:border-transparent shadow-2xl lg:shadow-none relative overflow-hidden">
						{/* Mobile Decorative Glow */}
						<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl lg:hidden pointer-events-none"></div>

						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 lg:mb-8 leading-[1.15] text-center lg:text-left relative z-10 w-full">
							Donde las ideas <br className="hidden lg:block" />
							<span className="text-brand-accent inline mt-1 lg:mt-0">
								toman vuelo.
							</span>
						</h2>

						<div
							className="text-base md:text-lg text-brand-gray/90 lg:text-brand-gray font-light leading-relaxed w-full lg:max-w-xl text-justify hyphens-auto relative z-10"
							lang="es"
						>
							<p>
								<strong className="text-white font-semibold">Re Invent</strong>{" "}
								es el espacio donde el desarrollo tecnológico se encuentra con
								la creación estratégica de marca. Ofrecemos soluciones reales
								que destacan por su funcionalidad, rendimiento y simplicidad.
							</p>

							<div className={`grid transition-all duration-500 ease-in-out md:grid-rows-[1fr] ${showMore ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:opacity-100'}`}>
								<div className="overflow-hidden">
									<p className="pt-4 lg:pt-6">
										Acompañamos a nuestros clientes en cada paso de su evolución
										digital. Nos aseguramos de que cada proyecto no solo nazca, sino
										que tenga la estructura arquitectónica necesaria para escalar y
										evolucionar de forma totalmente independiente.
									</p>
								</div>
							</div>

							<button
								onClick={() => setShowMore(!showMore)}
								className="md:hidden text-brand-accent-bright font-semibold text-sm hover:opacity-80 transition-opacity mt-4 mx-auto block"
							>
								{showMore ? "Ver menos ↑" : "Ver más ↓"}
							</button>
						</div>

						<div className="mt-8 lg:mt-12 w-full lg:w-auto flex justify-center lg:justify-start relative z-10">
							<button
								type="button"
								className="w-full sm:w-auto px-8 md:px-10 py-4 bg-white text-brand-primary rounded-full font-bold hover:scale-[1.03] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center"
							>
								Conócenos
							</button>
						</div>
					</div>

					{/* Image Side */}
					<div className="w-full lg:w-1/2 relative group perspective-1000 order-2 lg:order-1 mt-8 lg:mt-0">
						{/* Glow behind image */}
						<div className="absolute inset-0 bg-brand-accent/20 blur-2xl md:blur-3xl transform group-hover:scale-110 transition-transform duration-1000 rounded-full"></div>

						<div className="relative glass-card p-2 md:p-3 rounded-[2rem] transform transition-transform duration-700 ease-out lg:group-hover:rotate-y-[5deg] lg:group-hover:rotate-x-[5deg]">
							<div className="aspect-square md:aspect-[4/3] rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden relative">
								<img
									src="/assets/images/about_office.webp"
									alt="Workspace"
									loading="lazy"
									decoding="async"
									className="object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 md:from-brand-primary/80 to-transparent"></div>
							</div>

							{/* Floating badge */}
							<div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 glass-card p-4 md:p-6 rounded-2xl flex flex-col gap-1 items-start shadow-2xl scale-90 md:scale-100 origin-bottom-right transition-transform hover:scale-105">
								<span className="text-3xl md:text-4xl font-extrabold text-white">5+</span>
								<span className="text-xs md:text-sm text-brand-gray font-medium leading-tight">
									Años de <br />
									Experiencia
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
