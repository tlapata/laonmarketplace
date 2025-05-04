import { useEffect } from "react";

/**
 * Third argument is an array of classes. Elements having these classes will
 * be ignored in outside click.
 */
const useOutsideClick = (ref, callback, ignoreClasses = []) => {
  const handleClick = (event) => {
    if (Array.isArray(ref)) {
      if (
        ref.every(
          (i) =>
            i.current &&
            !i.current.contains(event.target) &&
            !isIgnoredElement(event.target.classList)
        )
      ) {
        callback();
      }
    } else {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !isIgnoredElement(event.target.classList)
      ) {
        callback();
      }
    }
  };

  const isIgnoredElement = (elementClassList) => {
    return ignoreClasses.some((className) =>
      elementClassList.contains(className)
    );
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClick);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useOutsideClick;
