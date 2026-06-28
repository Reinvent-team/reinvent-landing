import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
	return (
		<>			{/* Actual Footer */}
			<footer className="bg-[#030303] relative z-20 border-t border-white/5 overflow-hidden">
				{/* Very subtle glow for the footer */}
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

				{/* Watermark Isotype */}
				<img 
					src="/assets/images/ISOTIPO_PNG (6).png" 
					alt="" 
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[200px] h-auto object-contain opacity-[0.02] pointer-events-none z-0" 
				/>

				{/* Main Footer Links Area */}
				<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 relative z-10">
					{/* Brand & Socials */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start mb-6">
							<img src="/assets/images/Recurso 6.png" alt="Re-invent" className="h-6 md:h-7 w-auto object-contain drop-shadow-md relative z-10" />
						</div>
						<p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light">
							Diseñamos y desarrollamos soluciones digitales innovadoras que impulsan el crecimiento y la eficiencia de tu negocio con tecnología de vanguardia.
						</p>
						<div className="flex gap-4">
							<a href="https://github.com" className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)]">
								<FaGithub size={20} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
							</a>
							<a href="https://twitter.com" className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)]">
								<FaTwitter size={20} className="group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500" />
							</a>
							<a href="https://linkedin.com" className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)]">
								<FaLinkedin size={20} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
							</a>
						</div>
					</div>

					{/* Contact */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-auto md:mr-16">
						<h4 className="text-sm md:text-base uppercase tracking-widest text-gray-500 font-semibold mb-6">Contacto</h4>
						<ul className="space-y-5">
							<li className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
								<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:border-brand-accent/50 group-hover:text-brand-accent-bright transition-all duration-300">
									<Mail size={16} />
								</div>
								<span className="text-sm md:text-base tracking-wide font-light">reinvent.contacto@gmail.com</span>
							</li>
							<li className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
								<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:border-brand-accent/50 group-hover:text-brand-accent-bright transition-all duration-300">
									<MapPin size={16} />
								</div>
								<span className="text-sm md:text-base tracking-wide font-light">Lima, PE</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-white/5 relative z-10">
					<div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-[10px] md:text-xs text-gray-500 tracking-[0.15em] uppercase font-semibold text-center md:text-left flex-1">
							© {new Date().getFullYear()} RE-INVENT. Todos los derechos reservados.
						</p>
						<div className="flex gap-6 text-[10px] md:text-xs text-gray-500 tracking-[0.15em] uppercase font-semibold">
							<a href="#" className="hover:text-white transition-colors">Términos</a>
							<a href="#" className="hover:text-white transition-colors">Privacidad</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
