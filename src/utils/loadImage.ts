const loadImage = (src: string) => {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.src = src;
    window[src] = img;
    img.onload = () => resolve("");
    img.onerror = () => reject("");
  });
};
export default loadImage;
