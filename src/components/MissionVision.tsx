import { Briefcase, Eye } from "lucide-react";

export function MissionVision() {
	return (
		<section className="relative border-t border-white/10 bg-brand-secondary overflow-hidden">
			{/* Decorative background */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-brand-accent/5 to-transparent pointer-events-none"></div>

			<div className="max-w-7xl mx-auto flex flex-col md:flex-row relative z-10">
				{/* Misión */}
				<div className="flex-1 p-10 md:p-20 lg:p-24 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors duration-500">
					<div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-brand-accent group-hover:scale-110 transition-transform duration-500 shadow-inner">
						<Briefcase size={28} className="md:w-8 md:h-8" />
					</div>
					<h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 md:mb-6">
						Nuestra Misión
					</h3>
					<p className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
						Desarrollar herramientas digitales y de identidad que transformen
						visiones en proyectos sólidos, autónomos y listos para el
						crecimiento sostenido.
					</p>
				</div>

				{/* Visión */}
				<div className="flex-1 p-10 md:p-20 lg:p-24 flex flex-col items-center md:items-start text-center md:text-left group hover:bg-white/5 transition-colors duration-500">
					<div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-brand-accent-bright group-hover:scale-110 transition-transform duration-500 shadow-inner">
						<Eye size={28} className="md:w-8 md:h-8" />
					</div>
					<h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 md:mb-6">
						Nuestra Visión
					</h3>
					<p className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
						Ser el estudio referente en transformar ideas en soluciones
						digitales y marcas estratégicas que destaquen por su simplicidad y
						preparación para el futuro.
					</p>
				</div>
			</div>
		</section>
	);
}
