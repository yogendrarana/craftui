import { cn } from "@/lib/utils";

interface BrutalistButtonProps {
    children?: React.ReactNode;
    className?: string;
}

export default function BrutalistButton({ children, className }: BrutalistButtonProps) {
    return (
        <button
            className={cn(
                "px-3 py-2 border-2 border-black shadow-[4px_4px_0_0_#000] transition-all duration-200",
                "hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000]",
                className
            )}
        >
            {children}
        </button>
    );
}
