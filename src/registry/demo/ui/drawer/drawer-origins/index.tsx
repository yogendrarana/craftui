"use client";

import React from "react";
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerClose,
	DrawerDescription,
} from "@/registry/ui/drawer";

export default function DrawerOrigins() {
	return (
		<div className="grid grid-cols-2 gap-2">
			<Drawer origin="left">
				<DrawerTrigger>Left</DrawerTrigger>
				<DrawerContent className="flex flex-col">
					<DrawerHeader className="flex justify-between items-center">
						<div>
							<DrawerTitle>Title</DrawerTitle>
							<DrawerDescription>
								This is the description of the drawer
							</DrawerDescription>
						</div>
						<DrawerClose className="p-2 rounded-xl" />{" "}
					</DrawerHeader>

					{/* your content */}
					<div className="py-4 flex-grow overflow-auto">
						<p>The content of the drawer goes here.</p>
					</div>

					<DrawerFooter className="flex gap-2 justify-end">
						<button className="px-5 py-1.5 text-sm border rounded-sm shadow-sm hover:bg-accent">
							Close
						</button>
						<button className="px-5 py-1.5 text-sm bg-black text-white border rounded-sm">
							Save
						</button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<Drawer origin="right">
				<DrawerTrigger>Right</DrawerTrigger>
				<DrawerContent className="flex flex-col">
					<DrawerHeader className="flex justify-between items-center">
						<div>
							<DrawerTitle>Title</DrawerTitle>
							<DrawerDescription>
								This is the description of the drawer
							</DrawerDescription>
						</div>
						<DrawerClose className="p-2 rounded-xl" />{" "}
					</DrawerHeader>

					{/* your content */}
					<div className="py-4 flex-grow overflow-auto">
						<p>The content of the drawer goes here.</p>
					</div>

					<DrawerFooter className="flex gap-2 justify-end">
						<button className="px-5 py-1.5 text-sm border rounded-sm shadow-sm hover:bg-accent">
							Close
						</button>
						<button className="px-5 py-1.5 text-sm bg-black text-white border rounded-sm">
							Save
						</button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<Drawer origin="top">
				<DrawerTrigger>Top</DrawerTrigger>
				<DrawerContent className="flex flex-col">
					<DrawerHeader className="flex justify-between items-center">
						<div>
							<DrawerTitle>Title</DrawerTitle>
							<DrawerDescription>
								This is the description of the drawer
							</DrawerDescription>
						</div>
						<DrawerClose className="p-2 rounded-xl" />{" "}
					</DrawerHeader>

					{/* your content */}
					<div className="py-4 flex-grow overflow-auto">
						<p>The content of the drawer goes here.</p>
					</div>

					<DrawerFooter className="flex gap-2 justify-end">
						<button className="px-5 py-1.5 text-sm border rounded-sm shadow-sm hover:bg-accent">
							Close
						</button>
						<button className="px-5 py-1.5 text-sm bg-black text-white border rounded-sm">
							Save
						</button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<Drawer origin="bottom">
				<DrawerTrigger>Bottom</DrawerTrigger>
				<DrawerContent className="flex flex-col">
					<DrawerHeader className="flex justify-between items-center">
						<div>
							<DrawerTitle>Title</DrawerTitle>
							<DrawerDescription>
								This is the description of the drawer
							</DrawerDescription>
						</div>
						<DrawerClose className="p-2 rounded-xl" />{" "}
					</DrawerHeader>

					{/* your content */}
					<div className="py-4 flex-grow overflow-auto">
						<p>The content of the drawer goes here.</p>
					</div>

					<DrawerFooter className="flex gap-2 justify-end">
						<DrawerClose className="px-5 py-0.5 border">
							Close
						</DrawerClose>
						<button className="px-5 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black border rounded-sm">
							Save
						</button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
