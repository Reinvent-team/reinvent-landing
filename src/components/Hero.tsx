export function Hero() {
	return (
		<section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-brand-primary">
			<div className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 grayscale-[10%] mix-blend-lighten"
					style={{ backgroundImage: "url('/assets/images/hero_crow.png')" }}
				></div>
				
				{/* Dark overlays to ensure text readability but leaving the center visible */}
				<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-transparent to-brand-primary"></div>
				<div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 md:from-brand-primary/60 via-transparent to-brand-primary/80 md:to-brand-primary/60"></div>
			</div>

			{/* Ambient Light / Glowing orbs - Responsive sizing */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[70vw] h-[100vw] md:h-[50vw] rounded-full bg-brand-accent/15 blur-[150px] md:blur-[250px] pointer-events-none mix-blend-screen animate-pulse duration-[8000ms]"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] h-[70vw] md:h-[40vw] rounded-full bg-white/5 blur-[120px] md:blur-[200px] pointer-events-none mix-blend-screen"></div>
			
			{/* Tech Grid Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMzBoNmY2djZoLTZ2LTZ6TTEwIDIwaDEwdjEwSDEwVjIweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-30 md:opacity-40 pointer-events-none"></div>

			<div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center mt-20 md:mt-16">
				{/* Modern Badge */}


				<h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-6 md:mb-8 tracking-tight">
					<span className="text-white drop-shadow-md">La tecnología deja de ser un misterio.</span>
					<br className="hidden md:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-bright drop-shadow-sm md:mt-2 inline-block">
						Tus proyectos toman vuelo.
					</span>
				</h1>

				<p className="text-base sm:text-lg md:text-2xl text-brand-gray/90 mb-10 md:mb-12 max-w-[90%] md:max-w-3xl mx-auto font-light leading-relaxed">
					Diseño de vanguardia y arquitectura de software escalable para convertir tus ideas en <strong className="text-white font-medium">soluciones reales de alto impacto.</strong>
				</p>

				<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
					<button
						type="button"
						className="group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-white text-brand-primary rounded-full font-bold overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center"
					>
						<span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
							Iniciar un Proyecto
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</span>
					</button>
					
					<button
						type="button"
						className="w-full sm:w-auto px-8 md:px-10 py-4 rounded-full font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all text-white backdrop-blur-sm text-base md:text-lg flex items-center justify-center"
					>
						Ver Portafolio
					</button>
				</div>
			</div>
		</section>
	);
}
