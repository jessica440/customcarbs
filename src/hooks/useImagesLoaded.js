import { useEffect, useState } from "react";

const useImagesLoaded = (imageUrls = []) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const imageElements = [];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setLoaded(true);
        }
      };
      imageElements.push(img);
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagesLoaded;
