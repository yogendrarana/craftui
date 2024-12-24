"use client";

import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../registry/core/tabs";
import { Bell, Home, Settings, User } from "lucide-react";

export default function TabsDemo() {
    return (
        <div>
            <Tabs defaultTab="home" instanceId="tabs-custom-icons">
                <TabList>
                    <Tab value="home" icon={<Home className="h-4 w-4" />}>
                        Home
                    </Tab>
                    <Tab value="profile" icon={<User className="h-4 w-4" />}>
                        Profile
                    </Tab>
                    <Tab value="notifications" icon={<Bell className="h-4 w-4" />}>
                        Notifications
                    </Tab>
                    <Tab value="settings" icon={<Settings className="h-4 w-4" />}>
                        Settings
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="home">
                        <div className="h-20 text-sm">Home content</div>
                    </TabPanel>
                    <TabPanel value="profile">
                        <div className="h-20 text-sm">Profile content</div>
                    </TabPanel>
                    <TabPanel value="notifications">
                        <div className="h-20 text-sm">Notifications content</div>
                    </TabPanel>
                    <TabPanel value="settings">
                        <div className="h-20 text-sm">Settings content</div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}
