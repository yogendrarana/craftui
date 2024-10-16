import * as React from "react";

export const Components: Record<
    string,
    {
        name: string;
        description: string;
        component: any;
        path: string;
        published: boolean;
        date: Date;
    }[]
> = {
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
            name: "demo-toggle",
            description: "A demo toggle",
            component: React.lazy(() => import("@/content/elements/toggle/demo-toggle")),
            path: "src/content/elements/toggle/demo-toggle",
            published: true,
            date: new Date("2024-12-12")
        }
    ],
    checkbox: [
        {
            name: "demo-checkbox",
            description: "A demo checkbox",
            component: React.lazy(() => import("@/content/elements/checkbox/demo-checkbox")),
            path: "src/content/elements/checkbox/demo-checkbox",
            published: true,
            date: new Date("2024-12-12")
        }
    ]
};
