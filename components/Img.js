import { useState } from "react";

const Img = (props) => {
    const {src, className} = props
  const [imgError, setImgError] = useState(false);
  return (
    <img
      className={className}
      src={`${
        imgError
          ? "https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png"
          : src
      }`}
      onError={(e) => setImgError(true)}
    />
  );
};

export default Img;
