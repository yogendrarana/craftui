import { Hero } from "@/components/layout/hero";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
	return (
		<section className="min-h-screen flex flex-col">
			<Header />
			<Hero />
			<Footer />
		</section>
	);
}
