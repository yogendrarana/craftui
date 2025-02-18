import {
    Timeline,
    TimelineItem,
    TimelineMarker,
    TimelineContent,
    TimelineTitle,
    TimelineDescription
} from "../components/timeline";

export default function App() {
    return (
        <Timeline variant="vertical" className="max-w-md mx-auto">
            <TimelineItem>
                <TimelineMarker variant="fill" />
                <TimelineContent>
                    <TimelineTitle>Step 1</TimelineTitle>
                    <TimelineDescription>
                        This is the first step of the process.
                    </TimelineDescription>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineMarker variant="fill" />

                <TimelineContent>
                    <TimelineTitle>Step 2</TimelineTitle>
                    <TimelineDescription>Intermediate stage of the timeline.</TimelineDescription>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineMarker variant="fill" />

                <TimelineContent>
                    <TimelineTitle>Final Step</TimelineTitle>
                    <TimelineDescription>
                        Congratulations! You’ve completed the journey.
                    </TimelineDescription>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
