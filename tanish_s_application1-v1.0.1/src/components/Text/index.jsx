import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[78px]",
  h2: "font-bold sm:text-[48px] md:text-[48px] text-[68px]",
  h3: "font-bold sm:text-[38px] md:text-[44px] text-[52px]",
  h4: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h5: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h6: "sm:text-[18px] md:text-[20px] text-[22px]",
  body1: "font-normal text-[20px]",
  body2: "text-[18px]",
  body3: "text-[16px]",
  body4: "text-[15px]",
  body5: "text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
