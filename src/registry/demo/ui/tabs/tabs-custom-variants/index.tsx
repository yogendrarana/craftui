"use client";

import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/registry/ui/tabs";
import { Transition } from "motion/react";

export default function TabsCustomVariants() {
	const variants = {
		initial: { opacity: 0, y: -20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};

	const transition: Transition = { duration: 0.25, ease: "easeInOut" };

	return (
		<div>
			<Tabs
				defaultTab="tab1"
				instanceId="tabs-custom-variants-transition"
			>
				<TabList>
					<Tab value="tab1">First Tab</Tab>
					<Tab value="tab2">Second Tab</Tab>
					<Tab value="tab3">Third Tab</Tab>
					<Tab value="tab4">Fourth Tab</Tab>
				</TabList>

				<TabPanels>
					<TabPanel
						value="tab1"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">
							Content for first tab
						</div>
					</TabPanel>
					<TabPanel
						value="tab2"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">
							Content for second tab
						</div>
					</TabPanel>
					<TabPanel
						value="tab3"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">
							Content for third tab
						</div>
					</TabPanel>
					<TabPanel
						value="tab4"
						variants={variants}
						transition={transition}
					>
						<div className="h-20 text-sm">
							Content for fourth tab
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}
