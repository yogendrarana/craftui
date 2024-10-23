import * as React from "react";

interface ComponentInterface {
    name: string;
    description: string;
    component: React.LazyExoticComponent<React.FC>;
    path: string;
    published: boolean;
    date: Date;
}

export const Components: Record<string, ComponentInterface[]> = {
    button: [
        {
            name: "Shimmer Button",
            description: "",
            component: React.lazy(() => import("@/content/elements/button/shimmer-button")),
            path: "src/content/elements/button/shimmer-button",
            published: true,
            date: new Date("2024-12-12")
        }
    ],
    input: [
        {
            name: "demo-input",
            description: "A demo input",
            component: React.lazy(() => import("@/content/elements/input/demo-input")),
            path: "src/content/elements/input/demo-input",
            published: true,
            date: new Date("2024-12-12")
        }
    ],
    loader: [
        {
            name: "Three body loader",
            description: "",
            component: React.lazy(() => import("@/content/elements/loader/three-body-loader")),
            path: "src/content/elements/loader/three-body-loader",
            published: true,
            date: new Date("2024-12-12")
        }
    ],
    toggle: [
        {
            name: "Classic Switch",
            description: "A classic toggle",
            component: React.lazy(() => import("@/content/elements/toggle-switch/classic-switch")),
            path: "src/content/elements/toggle-switch/classic-switch",
            published: true,
            date: new Date("2024-12-23")
        },
        {
            name: "Day night switch",
            description: "",
            component: React.lazy(
                () => import("@/content/elements/toggle-switch/day-night-switch")
            ),
            path: "src/content/elements/toggle-switch/day-night-switch",
            published: true,
            date: new Date("2024-10-23")
        },
        {
            name: "Brutalist Switch",
            description: "",
            component: React.lazy(
                () => import("@/content/elements/toggle-switch/brutalist-switch")
            ),
            path: "src/content/elements/toggle-switch/brutalist-switch",
            published: true,
            date: new Date("2024-10-23")
        }
    ],
    checkbox: [
        {
            name: "Checkbox",
            description: "",
            component: React.lazy(() => import("@/content/elements/checkbox/demo-checkbox")),
            path: "src/content/elements/checkbox/demo-checkbox",
            published: true,
            date: new Date("2024-10-25")
        }
    ]
};
