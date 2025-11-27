"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import MaxWidthContainer from "@/components/website/max-width-container";

export default function Hero() {
	return (
		<section className="flex-1 flex border-b border-dashed">
			<MaxWidthContainer className="flex-1 sm:border-l sm:border-r border-dashed">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="h-full flex flex-col items-center justify-center space-y-10 text-center"
				>
					<div className="px-3 py-1 text-sm inline-flex items-center rounded-full border">
						<Sparkles className="mr-2 h-3 w-3" />
						Beautifully crafted UI components
					</div>

					<h1 className="text-primary mb-6 text-6xl md:text-8xl font-black tracking-tight space-x-4">
						<span>Craft</span>
						<span className="px-5 rounded-sm">UI</span>
					</h1>

					<p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl">
						{siteConfig.description}
					</p>
				</motion.div>
			</MaxWidthContainer>
		</section>
	);
}
