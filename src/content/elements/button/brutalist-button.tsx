import { cn } from "@/lib/utils";

interface BrutalistButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function BrutalistButton({ children, className, onClick }: BrutalistButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-3 py-2 border-2 border-black shadow-[4px_4px_0_0_#000] transition-all duration-200",
                "active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000]",
                className
            )}
        >
            {children}
        </button>
    );
}
