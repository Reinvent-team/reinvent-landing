import { Code, Cpu, MonitorCheck, Layers, Settings, Cloud, Database } from "lucide-react";

export function Services() {
	return (
		<section id="services" className="pt-20 pb-20 md:pt-24 md:pb-24 relative">
			{/* Suble background glows */}
			<div className="absolute top-1/2 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 pointer-events-none"></div>
			<div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-5 leading-tight">
						Soluciones <span className="text-brand-accent">Estratégicas</span>
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-base px-4 text-balance">
						Diseñamos ecosistemas digitales completos que impulsan el crecimiento y la eficiencia de tu negocio.
					</p>
				</div>

				{/* Bento Box Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
					{/* Large Main Feature */}
					<div className="md:col-span-2 glass-card rounded-[2rem] p-5 sm:p-6 md:p-8 group overflow-hidden relative border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-1">
						<div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
						<div className="relative z-10">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-500 bg-brand-accent/10 shadow-inner">
								<Code size={26} strokeWidth={2} />
							</div>
							<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
								Desarrollo y acompañamiento
							</h3>
							<p className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base font-light">
								Creamos soluciones digitales a medida y te acompañamos en cada
								etapa del proceso, desde la idea inicial hasta que tu proyecto
								esté funcionando. Todo claro y útil.
							</p>
						</div>
						<Layers className="absolute -bottom-10 -right-10 text-brand-accent/5 w-64 h-64 md:w-72 md:h-72 group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />
					</div>

					{/* Standard Feature 1 */}
					<div className="glass-card rounded-[2rem] p-5 sm:p-6 md:p-8 group overflow-hidden relative border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-1">
						<div className="relative z-10">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500 bg-purple-500/10 shadow-inner">
								<Settings size={26} strokeWidth={2} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Automatización</h3>
							<p className="text-gray-400 leading-relaxed text-sm font-light">
								Optimizamos tareas repetitivas mediante sistemas automatizados
								que ahorran tiempo y reducen errores.
							</p>
						</div>
					</div>

					{/* Standard Feature 2 */}
					<div className="glass-card rounded-[2rem] p-5 sm:p-6 md:p-8 group overflow-hidden relative border border-white/5 hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.15)] hover:-translate-y-1">
						<div className="relative z-10">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-500 bg-teal-500/10 shadow-inner">
								<MonitorCheck size={26} strokeWidth={2} />
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Mantenimiento</h3>
							<p className="text-gray-400 leading-relaxed text-sm font-light">
								Nos encargamos del funcionamiento y mejora continua. Brindamos
								soporte para que todo esté siempre operativo.
							</p>
						</div>
					</div>

					{/* Wide Feature */}
					<div className="md:col-span-2 glass-card rounded-[2rem] p-5 sm:p-6 md:p-8 group overflow-hidden relative border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(31,122,140,0.15)] hover:-translate-y-1">
						<div className="relative z-10 w-full md:w-3/5">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-500 bg-brand-accent/10 shadow-inner">
								<Cpu size={26} strokeWidth={2} />
							</div>
							<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
								Integración de ecosistemas
							</h3>
							<p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
								Hacemos que tus herramientas hablen entre sí. Desde pasarelas de
								pago hasta CRMs, conectamos las piezas clave para un flujo
								sin fricciones.
							</p>
						</div>

						{/* Decorative Connection Diagram */}
						<div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
							<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-brand-primary group-hover:border-brand-accent/40 transition-all duration-700 z-10 relative">
								<Cloud size={20} className="text-gray-300 group-hover:text-brand-accent-bright transition-colors duration-700" />
							</div>
							<div className="w-6 lg:w-10 h-[1px] bg-gradient-to-r from-white/20 to-brand-accent/50 group-hover:w-10 lg:group-hover:w-14 transition-all duration-700 -mx-2"></div>
							<div className="w-16 h-16 rounded-full border border-brand-accent/50 flex items-center justify-center bg-[#0a0a0a] shadow-[0_0_20px_rgba(31,122,140,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(31,122,140,0.6)] group-hover:border-brand-accent-bright transition-all duration-700 z-20 relative">
								<Cpu size={28} className="text-brand-accent group-hover:text-brand-accent-bright transition-colors duration-700" />
							</div>
							<div className="w-6 lg:w-10 h-[1px] bg-gradient-to-l from-white/20 to-brand-accent/50 group-hover:w-10 lg:group-hover:w-14 transition-all duration-700 -mx-2"></div>
							<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-brand-primary group-hover:border-brand-accent/40 transition-all duration-700 z-10 relative">
								<Database size={20} className="text-gray-300 group-hover:text-brand-accent-bright transition-colors duration-700" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
