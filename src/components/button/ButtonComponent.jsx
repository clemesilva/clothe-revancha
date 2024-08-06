import React from "react";

const BUTTON_TYPE_CLASSES = {
  google:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  inverted:
    "bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-gray-400",
};

const ButtonComponent = ({ buttonType, children, ...otherProps }) => {
  const buttonClass =
    BUTTON_TYPE_CLASSES[buttonType] ||
    "bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonComponent;
