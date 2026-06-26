import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Process() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="py-20 md:py-32 relative border-t border-white/5">
			<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
				
				{/* Invisible anchor for precise scrolling to this section */}
				<div id="contact" className="absolute -top-24 w-full"></div>

				<div className="text-center mb-16 md:mb-24">
					<h2 className="text-[2.5rem] md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
						Nuestro <span className="text-brand-accent">Proceso</span>
					</h2>
					<p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg font-light px-4">
						Metodología ágil y transparente para transformar ideas en productos digitales escalables.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative mb-24 md:mb-32">
					{/* Connecting Line (Desktop only) */}
					<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-brand-accent/0 via-brand-accent/50 to-brand-accent/0"></div>
					{/* Connecting Line (Mobile only) */}
					<div className="block md:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/30 to-brand-accent/0"></div>

					{[
						{
							num: "01",
							title: "Ideación & Estrategia",
							desc: "Analizamos tus necesidades y diseñamos la arquitectura técnica y visual perfecta para tu proyecto antes de escribir código."
						},
						{
							num: "02",
							title: "Desarrollo & Producción",
							desc: "Construimos con tecnologías de vanguardia garantizando rendimiento, seguridad y una experiencia de usuario impecable."
						},
						{
							num: "03",
							title: "Lanzamiento & Evolución",
							desc: "Desplegamos tu producto y te acompañamos en su escalamiento. Estará preparado para crecer y adaptarse al mercado."
						}
					].map((step, idx) => (
						<div key={idx} className="flex flex-col items-center text-center relative z-10 group bg-brand-primary/80 md:bg-transparent p-6 md:p-0 rounded-3xl md:rounded-none border md:border-none border-white/5 shadow-xl md:shadow-none">
							<div className="w-16 h-16 rounded-full bg-brand-secondary border border-white/10 flex items-center justify-center text-xl font-bold mb-6 md:mb-8 text-white group-hover:scale-110 group-hover:bg-brand-accent/10 group-hover:text-brand-accent-bright group-hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
								{step.num}
							</div>
							<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{step.title}</h3>
							<p className="text-brand-gray text-sm md:text-base leading-relaxed">
								{step.desc}
							</p>
						</div>
					))}
				</div>

				{/* CTA / Contact */}
				<div className="glass-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center md:text-left relative overflow-hidden border border-white/10 group hover:border-brand-accent/30 transition-colors duration-500">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors duration-700 blur-[100px] pointer-events-none"></div>
					<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
						<div className="w-full lg:w-auto">
							<h2 className="text-[2rem] md:text-4xl font-extrabold mb-4 leading-tight text-white">
								¿Listo para empezar?
							</h2>
							<p className="text-brand-gray text-base md:text-lg max-w-xl mx-auto lg:mx-0">
								Hablemos sobre cómo podemos ayudarte a llevar tu marca y tus herramientas digitales al próximo nivel.
							</p>
						</div>
						<button 
							type="button" 
							onClick={() => setIsModalOpen(true)}
							className="w-full lg:w-auto shrink-0 px-8 md:px-10 py-4 md:py-5 bg-brand-accent text-white rounded-full font-black hover:bg-brand-accent-bright transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 hover:scale-105 cursor-pointer text-base md:text-lg flex justify-center items-center gap-3 group/btn"
						>
							Agendar Consulta
							<span className="group-hover/btn:translate-x-1 transition-transform">→</span>
						</button>
					</div>
				</div>

			</div>
			
			<ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
}
