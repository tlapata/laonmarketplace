import { useEffect, useState } from "react";

const useViewport = (
  calculateNavBottomLineHeight: boolean = false,
  calculateTopbarHeight: boolean = false
) => {
  const getNavBottomLineHeight = () =>
    document.getElementById("nav-bottom-line")?.offsetHeight;
  const getTopbarHeight = () => document.getElementById("topbar")?.offsetHeight;

  const [width, setWidth] = useState(window.innerWidth);
  const [navBottomLineHeight, setNavBottomLineHeight] = useState(
    getNavBottomLineHeight()
  );
  const [topbarHeight, setTopbarHeightHeight] = useState(getTopbarHeight());

  const handleSetTopbarHeight = () => setTopbarHeightHeight(getTopbarHeight());

  window.onload = () => {
    calculateTopbarHeight && handleSetTopbarHeight();
  };

  useEffect(() => {
    const target = document.getElementById("topbar");
    target &&
      new ResizeObserver(() =>
        setTopbarHeightHeight(target.offsetHeight)
      ).observe(target);

    const handleWindowResize = () => setWidth(window.innerWidth);
    const handleSetNavBottomLineHeight = () =>
      setNavBottomLineHeight(getNavBottomLineHeight());

    calculateNavBottomLineHeight && handleSetNavBottomLineHeight();
    calculateTopbarHeight && handleSetTopbarHeight();

    window.addEventListener("resize", () => {
      handleWindowResize();
      calculateNavBottomLineHeight && handleSetNavBottomLineHeight();
      calculateTopbarHeight && handleSetTopbarHeight();
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { width, navBottomLineHeight, topbarHeight };
};

export default useViewport;
