import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const href = e.currentTarget.getAttribute("href");
		setIsMobileMenuOpen(false);
		if (href && href.startsWith("#")) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				const elementRect = element.getBoundingClientRect();
				const absoluteElementTop = elementRect.top + window.scrollY;

				// Calculate position to align the top of the section slightly higher behind the navbar padding
				const offsetPosition = Math.max(0, absoluteElementTop - 40);

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const navLinks = [
		{ name: "Acerca de", href: "#about" },
		{ name: "Servicios", href: "#services" },
		{ name: "Proyectos", href: "#projects" },
	];

	return (
		<header
			className={`fixed w-full top-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? "bg-brand-primary/80 backdrop-blur-lg shadow-2xl py-4" : "bg-transparent py-6"
				}`}
		>
			<div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
				<Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center z-[60]">
					<img src="/assets/images/Recurso 6.png" alt="Re-invent" className="h-5 md:h-5.5 w-auto object-contain drop-shadow-md" />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-10 text-xl font-semibold tracking-wide items-center">
					<Link
						to="/"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="group relative text-brand-gray hover:text-white transition-colors duration-300"
					>
						Inicio
						<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
					</Link>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={handleNavClick}
							className="group relative text-brand-gray hover:text-white transition-colors duration-300"
						>
							{link.name}
							<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>

				<div className="hidden md:block z-[60]">
					<a
						href="#contact"
						onClick={handleNavClick}
						className="inline-flex items-center justify-center leading-none px-6 pt-[12px] pb-[10px] rounded-full border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 text-xl font-semibold"
					>
						Contacto
					</a>
				</div>

				{/* Mobile Menu Toggle Button */}
				<button
					onClick={toggleMobileMenu}
					className="md:hidden text-white p-2 z-[60] focus:outline-none"
					aria-label="Toggle Menu"
				>
					{isMobileMenuOpen ? (
						<FiX className="w-8 h-8" />
					) : (
						<FiMenu className="w-8 h-8" />
					)}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`fixed inset-0 bg-brand-primary/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'}`}
			>
				<nav className="flex flex-col gap-8 items-center text-3xl font-semibold tracking-wide">
					<Link
						to="/"
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							setIsMobileMenuOpen(false);
						}}
						className="text-brand-gray hover:text-white transition-colors duration-300"
					>
						Inicio
					</Link>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={handleNavClick}
							className="text-brand-gray hover:text-white transition-colors duration-300"
						>
							{link.name}
						</a>
					))}
					<a
						href="#contact"
						onClick={handleNavClick}
						className="mt-4 px-8 py-3 rounded-full border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
					>
						Contacto
					</a>
				</nav>
			</div>
		</header>
	);
}
