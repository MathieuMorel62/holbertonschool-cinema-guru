import { useState, useEffect } from 'react';


// Custom hook to load an image and set a fallback if it fails
const useImage = (src, fallback) => {
  const [imgSrc, setImgSrc] = useState(src);

  // Load the image and set the fallback if it fails
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
    img.onerror = () => setImgSrc(fallback);
  }, [src, fallback]);

  return imgSrc;
};

export default useImage;
