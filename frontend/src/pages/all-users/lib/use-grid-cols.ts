import { useMemo } from "react";

export function useGridCols(userCount: number) {
  return useMemo(() => {
    if (userCount === 1) return "grid-cols-1";
    if (userCount === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }, [userCount]);
}
