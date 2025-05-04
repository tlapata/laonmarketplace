import { useEffect } from 'react';

const useScrollControl = (condition: boolean): void => {
  useEffect(() => {
    const bodyElement = document.querySelector('body');

    // Apply scroll control based on the condition
    if (bodyElement) {
      if (condition) {
        bodyElement.classList.add('overflow-hidden', 'vh-100');
      } else {
        bodyElement.classList.remove('overflow-hidden', 'vh-100');
      }
    }

    // Cleanup: Remove the classes on component unmount
    return () => {
      if (bodyElement) {
        bodyElement.classList.remove('overflow-hidden', 'vh-100');
      }
    };
  }, [condition]); // Re-run the effect when the condition changes
};

export default useScrollControl;
