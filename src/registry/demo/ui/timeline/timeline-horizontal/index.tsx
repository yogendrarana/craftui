"use client";

import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineMarker,
	TimelineContent,
	TimelineTitle,
	TimelineDescription,
} from "@/registry/ui/timeline";

export default function TimelineHorizontal() {
	return (
		<Timeline variant="horizontal">
			<TimelineItem>
				<TimelineMarker variant="fill" />
				<TimelineContent>
					<TimelineTitle>2022</TimelineTitle>
					<TimelineDescription>Company Founded</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineMarker variant="fill" />
				<TimelineContent>
					<TimelineTitle>2023</TimelineTitle>
					<TimelineDescription>
						First Major Client
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineMarker variant="fill" />
				<TimelineContent>
					<TimelineTitle>2024</TimelineTitle>
					<TimelineDescription>
						Expanded to 50 Employees
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineMarker variant="empty" />
				<TimelineContent>
					<TimelineTitle>2025</TimelineTitle>
					<TimelineDescription>
						International Expansion
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
