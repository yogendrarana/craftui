"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { MDXProvider } from '@mdx-js/react';

interface MdxProviderProps {
    children: React.ReactNode;
    className?: string;
}

const MdxProvider = ({ children, className }: MdxProviderProps) => {
    return (
        <div className={cn("prose prose-lg", className)}>
            <MDXProvider>
                {children}
            </MDXProvider>
        </div>
    );
};

export default MdxProvider;