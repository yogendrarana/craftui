import React from "react";
import Marquee from "@/content/registry/core/marquee";

const testimonials = [
    {
        name: "Jack Thompson",
        testimonial: "Amazing service, highly recommend!",
        role: "Product Designer",
        id: 1
    },
    {
        name: "Maria Rodriguez",
        testimonial: "Great experience, will return again.",
        role: "Marketing Director",
        id: 2
    },
    {
        name: "Alex Chen",
        testimonial: "Exceptional quality and friendly staff.",
        role: "Tech Lead",
        id: 3
    },
    {
        name: "Sarah Wilson",
        testimonial: "Loved the atmosphere and support!",
        role: "Startup Founder",
        id: 4
    },
    {
        name: "David Lee",
        testimonial: "Fantastic service from start to finish.",
        role: "Creative Director",
        id: 5
    },
    {
        name: "Nina Patel",
        testimonial: "A wonderful experience overall.",
        role: "UX Researcher",
        id: 6
    }
];

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase();
};

export default function TestimonialsMarquee() {
    return (
        <Marquee
            duration={35}
            repeat={3}
            direction="right"
            gap={12}
            className="w-[90%] py-8"
            pauseOnHover
        >
            {testimonials.map((item) => (
                <div
                    key={item.id}
                    className="h-[250px] border rounded-md p-6 flex flex-col items-center  "
                >
                    <span className="mb-4 font-bold h-[50px] w-[50px] border rounded-full grid place-content-center">
                        {getInitials(item.name)}
                    </span>
                    <span className="text-gray-500 text-sm text-center">{item.name}</span>
                    <span className="mb-2 text-gray-500 text-sm text-center">{item.role}</span>
                    <span className="text-gray-900 text-sm text-center">{item.testimonial}</span>
                </div>
            ))}
        </Marquee>
    );
}
