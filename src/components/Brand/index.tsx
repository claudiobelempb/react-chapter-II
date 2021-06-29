import React from "react";
import { BrandContainer, BrandContent } from "./style";

import logoBrand from "../../assets/images/logo.svg";

interface IBrand {
  title?: string;
  alt?: string;
  mw?: number;
  link?: string;
}

const Brand: React.FC<IBrand> = ({ title, alt, mw, link }: IBrand) => {
  return (
    <BrandContainer mw={mw}>
      <BrandContent>
        <img src={logoBrand} alt={alt} />
        <h1>{alt}</h1>
      </BrandContent>
    </BrandContainer>
  );
};

export { Brand };
