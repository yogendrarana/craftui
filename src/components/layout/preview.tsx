"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export function ComponentPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Button Previews */}
      <PreviewCard
        title="Buttons"
        description="Interactive button components with hover effects."
      >
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
            Gradient
          </Button>
          <Button variant="outline" className="group border-2 transition-all duration-300">
            <span>Explore</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button className="relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-500/25">
            <span className="relative z-10">Glow</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity hover:opacity-100" />
          </Button>
        </div>
      </PreviewCard>

      {/* Input Fields */}
      <PreviewCard
        title="Inputs"
        description="Beautiful input fields with animations."
      >
        <div className="flex flex-col gap-4">
          <div className="group relative">
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-2 transition-all duration-300 focus:border-primary"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 blur transition-opacity group-hover:opacity-20" />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 transition-all duration-300 hover:shadow-md"
            />
            <svg
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </PreviewCard>

      {/* Loaders */}
      <PreviewCard
        title="Loaders"
        description="Animated loading indicators."
      >
        <div className="flex items-center justify-around">
          <div className="relative h-10 w-10">
            <div className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-75"></div>
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-primary">
              <div className="h-5 w-5 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <div className="flex space-x-1">
            <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-primary"></div>
          </div>
        </div>
      </PreviewCard>

      {/* Toggle Switches */}
      <PreviewCard
        title="Toggle Switches"
        description="Smooth animated toggle switches."
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="airplane" className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Airplane Mode
            </Label>
            <Switch id="airplane" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
            </Label>
            <Switch id="notifications" defaultChecked />
          </div>
        </div>
      </PreviewCard>

      {/* Radio Buttons */}
      <PreviewCard
        title="Radio Buttons"
        description="Custom styled radio button groups."
      >
        <RadioGroup defaultValue="comfortable" className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minimal" id="r1" />
            <Label htmlFor="r1" className="flex items-center gap-2">
              Minimal
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" className="flex items-center gap-2">
              Comfortable
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3" className="flex items-center gap-2">
              Compact
            </Label>
          </div>
        </RadioGroup>
      </PreviewCard>
    </div>
  );
}

function PreviewCard({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-lg border bg-card p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="rounded-md bg-accent/50 p-4">
        {children}
      </div>
    </motion.div>
  );
}