export const getTableBodyCellsWidth = (ref: any) => {
  if (ref.current) {
    const bodyCells = ref.current.firstChild.children;
    return Array.from(bodyCells).map((c: any) => c.offsetWidth);
  }
};
