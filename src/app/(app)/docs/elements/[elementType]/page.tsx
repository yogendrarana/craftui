import React from "react";
import { cn } from "@/lib/utils";
import { Previews } from "@/content/previews";
import { ComponentTypeEnum } from "@/constants/enum";
import ComponentCodePreviewDialog from "@/components/website/component-code-preview-dialog";

interface ElementType {
  label: string;
  type: string;
  rawCode: string;
  path: string;
  component: React.LazyExoticComponent<React.FC>;
}

export default async function Page({
  params,
}: {
  params: Promise<{ elementType: string }>;
}) {
  const { elementType } = await params;

  const elements: ElementType[] = Object.values(Previews[ComponentTypeEnum.ELEMENTS]);
  const filteredElements = elements.filter((elt) => elt.type === elementType);

  if (!filteredElements || filteredElements.length === 0) {
    return <div>No element found</div>;
  }

  return (
    <div className={cn("grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5")}>
      {filteredElements.map((comp, index) => (
        <ComponentCodePreviewDialog
          key={index}
          component={React.createElement(comp.component)}
          label={comp.label}
          code={comp.rawCode}
        />
      ))}
    </div>
  );
}
