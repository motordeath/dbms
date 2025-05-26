import { useEffect } from 'react';

export function useLockBodyScroll(lock: boolean = true): void {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Prevent scrolling on mount
    if (lock) {
      document.body.style.overflow = 'hidden';
    }
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lock]); // Update effect if lock changes
}