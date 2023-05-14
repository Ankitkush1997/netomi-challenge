export const getDominantColor = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const colorCounts = {};
      let maxCount = 0;
      let dominantColor = null;
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const rgb = `${r},${g},${b}`;
        if (rgb in colorCounts) {
          colorCounts[rgb]++;
        } else {
          colorCounts[rgb] = 1;
        }
        if (colorCounts[rgb] > maxCount) {
          maxCount = colorCounts[rgb];
          dominantColor = rgb;
        }
      }
      resolve(`rgb(${dominantColor})`);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = imageUrl;
  });
};
