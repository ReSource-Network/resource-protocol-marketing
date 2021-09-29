import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";

const cloudName = "https://res.cloudinary.com/resource-network/image/upload/";

// interface CloudinaryImageProps extends ImageProps {
//   src?: string
//   quality?: "low" | "eco" | "good" | "best" | number
//   placeholder?: "blur" | "pixelate" | "vectorize" | "predominant"
//   minH?: string
// }

const CoudinaryImage = (props) => {
  const { quality, placeholder, minH, ...rest } = props;
  const optimizedSrc = optimizeImage(props.src, { quality, placeholder });

  return (
    <Image
      minHeight={minH}
      data-testid="cloudinary-image"
      {...rest}
      src={optimizedSrc}
    ></Image>
  );
};

// type OptimizationOptions = {
//   quality?: "low" | "eco" | "good" | "best" | number
//   placeholder?: "blur" | "pixelate" | "vectorize" | "predominant"
// }

export const optimizeImage = (url, options) => {
  if (!url.includes("res.cloudinary.com")) return url;
  const { quality, placeholder } = options;
  let optimizations = `${map.quality(quality)}${map.placeholder(placeholder)}`;
  optimizations =
    quality || placeholder
      ? optimizations.substr(0, optimizations.length - 1) + "/"
      : optimizations + "/";
  const newUrl =
    url.substr(0, cloudName.length) +
    optimizations +
    url.substr(cloudName.length);
  return newUrl;
};

const map = {
  quality: (q) => {
    if (typeof q === "number") {
      return `q_${q < 0 ? 0 : q > 100 ? 100 : q},`;
    }
    return q ? `q_auto:${q},` : "";
  },
  placeholder: (p) => {
    return p ? `e_${p},` : "";
  },
};

export default React.memo(CoudinaryImage);
