import { X, User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const [submitted, setSubmitted] = useState(false);

	const contactMutation = useMutation({
		mutationFn: async (formData: { name: string; email: string; message: string }) => {
			// MIGRACIÓN A VERCEL / RAILWAY:
			// Aquí estamos utilizando la variable de entorno VITE_API_URL.
			// En entorno local (vite dev), esto apuntará a http://localhost:3000 (donde corre nuestro backend en la otra carpeta).
			// Cuando se despliegue a producción, asegúrate de añadir la variable VITE_API_URL
			// en el dashboard de Vercel apuntando a tu servidor backend en Railway (ej. https://tu-backend-railway.app).
			const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
			const res = await fetch(`${apiUrl}/api/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!res.ok) throw new Error("Error al enviar");
			return res.json();
		},
		onSuccess: () => {
			setSubmitted(true);
			setTimeout(() => {
				onClose();
			}, 3000);
		},
		onError: (error) => {
			console.error("Error enviando el formulario:", error);
			alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
		}
	});

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
			if (!contactMutation.isPending) setSubmitted(false);
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen, contactMutation.isPending]);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		contactMutation.mutate({
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			message: formData.get("message") as string,
		});
	};

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
			{/* Backdrop */}
			<div 
				className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-500"
				onClick={onClose}
			></div>

			{/* Modal Box */}
			<div className="relative w-full max-w-lg glass-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.15)] transform transition-all duration-500 border border-white/10 bg-brand-primary/95">
				
				{/* Glow Effects */}
				<div className="absolute -top-32 -right-32 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-accent/5 to-transparent pointer-events-none"></div>
				<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent-bright/10 via-brand-accent-bright/5 to-transparent pointer-events-none"></div>

				{/* Header */}
				<div className="flex justify-between items-center px-6 md:px-8 py-5 md:py-6 border-b border-white/5 relative z-10">
					<div>
						<h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Agendar Consulta</h3>
						<p className="text-xs md:text-sm text-brand-gray/60 mt-1">Llevemos tu proyecto al siguiente nivel.</p>
					</div>
					<button 
						onClick={onClose}
						className="p-2 rounded-full hover:bg-white/10 text-brand-gray hover:text-white hover:rotate-90 transition-all duration-300 shrink-0"
					>
						<X size={24} />
					</button>
				</div>

				{/* Content */}
				<div className="p-6 md:p-8 relative z-10">
					{submitted ? (
						<div className="text-center py-10 md:py-12 flex flex-col items-center">
							<div className="relative mb-6 md:mb-8">
								<div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
								<CheckCircle2 size={80} className="text-green-400 relative z-10" strokeWidth={1.5} />
							</div>
							<h4 className="text-2xl md:text-3xl font-bold text-white mb-3">¡Todo Listo!</h4>
							<p className="text-brand-gray text-base md:text-lg max-w-[280px]">Tu solicitud ha sido enviada con éxito. Te contactaremos en breve.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
							{/* Input Group: Name */}
							<div className="relative group">
								<label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Nombre</label>
								<div className="relative flex items-center">
									<User className="absolute left-4 text-gray-500 group-focus-within:text-brand-accent transition-colors" size={20} />
									<input 
										type="text" 
										name="name"
										required
										className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/20 transition-all"
										placeholder="¿Cómo te llamas?"
									/>
								</div>
							</div>

							{/* Input Group: Email */}
							<div className="relative group">
								<label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Email</label>
								<div className="relative flex items-center">
									<Mail className="absolute left-4 text-gray-500 group-focus-within:text-brand-accent transition-colors" size={20} />
									<input 
										type="email" 
										name="email"
										required
										className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/20 transition-all"
										placeholder="tu@correo.com"
									/>
								</div>
							</div>

							{/* Input Group: Message */}
							<div className="relative group">
								<label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Proyecto</label>
								<div className="relative flex items-start">
									<MessageSquare className="absolute left-4 top-3.5 md:top-4 text-gray-500 group-focus-within:text-brand-accent transition-colors" size={20} />
									<textarea 
										name="message"
										required
										minLength={10}
										rows={3}
										className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/20 transition-all resize-none"
										placeholder="Cuéntanos brevemente sobre tu idea..."
									></textarea>
								</div>
							</div>

							{/* Submit Button */}
							<button 
								type="submit" 
								disabled={contactMutation.isPending}
								className="group w-full py-3.5 md:py-4 bg-white text-brand-primary rounded-2xl font-black hover:bg-brand-accent-bright hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4 overflow-hidden relative"
							>
								{contactMutation.isPending ? (
									<span className="w-5 h-5 md:w-6 md:h-6 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></span>
								) : (
									<>
										<span className="relative z-10 text-base md:text-lg">Enviar Solicitud</span>
										<Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-5 md:h-5" />
									</>
								)}
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
}
