import { useEffect, useState } from "react";

/**
 * Hook to safely handle client-side only code and prevent hydration mismatches
 * @returns boolean indicating if the component has hydrated
 */
export function useHydrated() {
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);
	}, []);

	return isHydrated;
}
