"use client";

import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../components/tabs";

export default function TabsDemo() {
    return (
        <div>
            <Tabs defaultTab="tab1" instanceId="tabs-basic">
                <TabList>
                    <Tab value="tab1">First Tab</Tab>
                    <Tab value="tab2">Second Tab</Tab>
                    <Tab value="tab3">Third Tab</Tab>
                    <Tab value="tab4">Fourth Tab</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="tab1">
                        <div className="h-20 text-sm">Content for first tab</div>
                    </TabPanel>
                    <TabPanel value="tab2">
                        <div className="h-20 text-sm">Content for second tab</div>
                    </TabPanel>
                    <TabPanel value="tab3">
                        <div className="h-20 text-sm">Content for third tab</div>
                    </TabPanel>
                    <TabPanel value="tab4">
                        <div className="h-20 text-sm">Content for fourth tab</div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}
