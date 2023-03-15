import React, { useState } from "react";
import "./button.css";

export const Button = ({
  variant,
  children,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size,
  color,
  ...rest
}) => {
  let classVariable;
  const addClass = (newClass) => [classVariable, newClass].join(" ");

  switch (variant) {
    case "outline":
      classVariable = addClass("outline");
      break;
    case "text":
      classVariable = addClass("text");
      break;
    default:
      break;
  }

  switch (size) {
    case "sm":
      classVariable = addClass("sm");
      break;
    case "md":
      classVariable = addClass("md");
      break;
    case "lg":
      classVariable = addClass("lg");
      break;
    default:
      break;
  }

  switch (color) {
    case "default":
      break;
    case "primary":
      classVariable = addClass("primary");
      break;
    case "secondary":
      classVariable = addClass("secondary");
      break;
    case "danger":
      classVariable = addClass("danger");
      break;
    default:
      break;
  }

  if (disableShadow === true) classVariable = addClass("disableShadow");

  return (
    <button
      variant={variant}
      className={classVariable}
      disableShadow={disableShadow}
      disabled={disabled}
      size={size}
      color={color}
      {...rest}
    >
      {startIcon && <img src={startIcon} alt="startIcon" />}
      {children}
      {endIcon && <img src={endIcon} alt="startIcon" />}
    </button>
  );
};
