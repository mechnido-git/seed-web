import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = ({ src, style }) => {
  const [imgSrc, setImgSrc] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  if (!imgSrc) return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 2.5 1"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="500" height="100%" />
    </ContentLoader>
  );
  return <img src={src} style={style} alt="" />;
};

export default ImageLoader;
