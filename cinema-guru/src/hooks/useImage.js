import { useState, useEffect } from 'react';

const useImage = (src, fallback) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
    img.onerror = () => setImgSrc(fallback);
  }, [src, fallback]);

  return imgSrc;
};

export default useImage;
