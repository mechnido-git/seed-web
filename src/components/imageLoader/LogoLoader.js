import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const LogoLoader = ({ src, style }) => {
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
    width={200}
    height={47}
    viewBox="0 0 200 47"
    backgroundColor="#f3f3f3"
    foregroundColor="#00B17B"
    style={{paddingLeft: "10px", paddingTop: "10px"}}
  >
    <rect  x="48" y="12" rx="3" ry="3" width="110" height="17" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
  );
  return <img id="logo" src={src} style={style} alt="" />;
};

export default LogoLoader;