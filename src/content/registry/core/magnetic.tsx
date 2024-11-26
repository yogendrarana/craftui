"use client";

import gsap from "gsap";
import { useEffect, useRef, isValidElement, cloneElement } from "react";

type PropType = {
    children: React.ReactNode;
};

export default function Magnetic({ children }: PropType) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        // mouse move event
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const rect = ref.current?.getBoundingClientRect();

            if (rect) {
                const x = clientX - (rect.left + rect.width / 2);
                const y = clientY - (rect.top + rect.height / 2);

                xTo(x);
                yTo(y);
            }
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        ref.current?.addEventListener("mousemove", handleMouseMove);
        ref.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            ref.current?.removeEventListener("mousemove", handleMouseMove);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            ref.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const clonedElement = isValidElement(children) ? (
        cloneElement(children as React.ReactElement<any>, { ref })
    ) : (
        <div />
    );

    return clonedElement;
}
