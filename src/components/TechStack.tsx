import {
	SiTypescript,
	SiReact,
	SiVite,
	SiBun,
	SiPostgresql,
	SiRedis,
	SiTailwindcss,
	SiDocker,
	SiDrizzle
} from "react-icons/si";

const TECHNOLOGIES = [
	{ name: "TypeScript", Icon: SiTypescript },
	{ name: "React", Icon: SiReact },
	{ name: "Vite", Icon: SiVite },
	{ name: "Bun", Icon: SiBun },
	{ name: "PostgreSQL", Icon: SiPostgresql },
	{ name: "Redis", Icon: SiRedis },
	{ name: "Tailwind CSS", Icon: SiTailwindcss },
	{ name: "Docker", Icon: SiDocker },
	{ name: "Drizzle", Icon: SiDrizzle },
];

export function TechStack() {
	return (
		<section className="py-16 md:py-24 relative border-y border-white/5 overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-brand-accent/5 to-transparent"></div>

			<div className="max-w-[100vw] mx-auto relative z-10">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight mb-8 md:mb-12 text-white px-4">
					Stack <span className="text-brand-accent">Tecnológico</span>
				</h2>

				<div className="relative flex items-center h-[100px] md:h-[140px] w-full overflow-hidden">
					{/* Fade edges */}
					<div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-brand-primary to-transparent z-20 pointer-events-none"></div>
					<div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-brand-primary to-transparent z-20 pointer-events-none"></div>

					<div className="flex flex-nowrap w-max animate-marquee">
						{[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
							<div
								key={`${tech.name}-${i}`}
								className="flex flex-col items-center justify-center text-white/30 hover:text-brand-accent-bright hover:scale-125 hover:-translate-y-2 transition-all duration-300 w-[80px] md:w-[120px] mx-6 md:mx-10"
								title={tech.name}
							>
								<tech.Icon aria-label={tech.name} className="w-12 h-12 md:w-20 md:h-20 drop-shadow-lg" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
