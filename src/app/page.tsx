import Hero from "@/components/website/layout/hero";
import Header from "@/components/website/layout/header";
import Footer from "@/components/website/layout/footer";

export default function HomePage() {
	return (
		<section className="min-h-screen flex flex-col">
			<Header />
			<Hero />
			<Footer />
		</section>
	);
}
