import { useEffect } from "react";

/**
 * useBodyScrollLock
 * Locks or unlocks scrolling on the body element.
 *
 * @param isLocked - true to disable scroll, false to enable
 */
export default function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      // Restore original overflow on unmount
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}
