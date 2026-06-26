import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { TechStack } from "../components/TechStack";
import { Process } from "../components/Process";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="min-h-screen bg-brand-primary text-slate-100 font-sans selection:bg-brand-accent selection:text-white">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<TechStack />
				<Projects />
				<Process />
			</main>
			<Footer />
		</div>
	);
}
