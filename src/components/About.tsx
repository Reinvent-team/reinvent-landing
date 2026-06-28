export function About() {
	return (
		<section id="about" className="min-h-[100vh] flex flex-col justify-center py-24 md:py-32 relative overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px]"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
					{/* Text Side (First on Mobile) */}
					<div className="w-full lg:w-1/2 order-1 lg:order-2">


						<h2 className="text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
							Donde las ideas <br />
							<span className="text-brand-accent">
								toman vuelo.
							</span>
						</h2>

						<div className="space-y-6 text-base md:text-lg text-brand-gray font-light leading-relaxed max-w-[95%] lg:max-w-xl pr-4 text-justify">
							<p>
								<strong className="text-white font-semibold">Re Invent</strong>{" "}
								es el espacio donde el desarrollo tecnológico se encuentra con
								la creación estratégica de marca. Ofrecemos soluciones reales
								que destacan por su funcionalidad, rendimiento y simplicidad.
							</p>
							<p>
								Acompañamos a nuestros clientes en cada paso de su evolución
								digital. Nos aseguramos de que cada proyecto no solo nazca, sino
								que tenga la estructura arquitectónica necesaria para escalar y
								evolucionar de forma totalmente independiente.
							</p>
						</div>

						<div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
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
									src="/assets/images/about_office.png"
									alt="Workspace"
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
