"use client";

import { Square, ToggleLeft, Radio, Loader2, TextCursor } from "lucide-react";

export function ButtonIcon(props: React.ComponentProps<typeof Square>) {
    return <Square {...props} />;
}

export function ToggleIcon(props: React.ComponentProps<typeof ToggleLeft>) {
    return <ToggleLeft {...props} />;
}

export function RadioIcon(props: React.ComponentProps<typeof Radio>) {
    return <Radio {...props} />;
}

export function LoaderIcon(props: React.ComponentProps<typeof Loader2>) {
    return <Loader2 {...props} />;
}

export function InputIcon(props: React.ComponentProps<typeof TextCursor>) {
    return <TextCursor {...props} />;
}
