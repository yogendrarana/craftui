import type { NavItem } from "@/types/registry";

export type DocsNavItem = {
  title: string;
  items: Array<NavItem>;
};

export const docsNavItems: Array<DocsNavItem> = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started/introduction",
      },
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
      },
    ],
  },
  {
    title: "Craft UI",
    items: [
      {
        title: "Accordion",
        href: "/docs/craftui/components/accordion",
      },
      {
        title: "Animate Tooltip",
        href: "/docs/craftui/components/animated-tooltip",
      },
      {
        title: "Confetti",
        href: "/docs/craftui/components/confetti",
      },
      {
        title: "Cursor",
        href: "/docs/craftui/components/cursor",
      },
      {
        title: "Dialog",
        href: "/docs/craftui/components/dialog",
      },
      {
        title: "Dock",
        href: "/docs/craftui/components/dock",
      },
      {
        title: "Drawer",
        href: "/docs/craftui/components/drawer",
      },
      {
        title: "Magnetic",
        href: "/docs/craftui/components/magnetic",
      },
      {
        title: "Marquee",
        href: "/docs/craftui/components/marquee",
      },
      {
        title: "Select",
        href: "/docs/craftui/components/select",
      },
      {
        title: "Stepper",
        href: "/docs/craftui/components/stepper",
      },
      {
        title: "Tabs",
        href: "/docs/craftui/components/tabs",
      },
      {
        title: "Text Scramble",
        href: "/docs/craftui/components/text-scramble",
      },
      {
        title: "Text Typing",
        href: "/docs/craftui/components/text-typing",
      },
      {
        title: "Timeline",
        href: "/docs/craftui/components/timeline",
      },
    ],
  },

  {
    title: "Hooks",
    items: [
      {
        title: "use-callback",
        href: "/docs/hooks/use-callback",
      },
      {
        title: "use-click-outside",
        href: "/docs/hooks/use-click-outside",
      },
      {
        title: "use-debounce",
        href: "/docs/hooks/use-debounce",
      },
      {
        title: "use-hydrated",
        href: "/docs/hooks/use-hydrated",
      },
      {
        title: "use-is-mobile",
        href: "/docs/hooks/use-is-mobile",
      },
      {
        title: "use-media-query",
        href: "/docs/hooks/use-media-query",
      },
      {
        title: "use-mounted",
        href: "/docs/hooks/use-mounted",
      },
      {
        title: "use-optimistic",
        href: "/docs/hooks/use-optimistic",
      },
      {
        title: "use-query-string",
        href: "/docs/hooks/use-query-string",
      },
    ],
  },
];
