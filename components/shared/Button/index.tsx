import React from "react";

// Load Vendors
import classNames from "classnames";

interface ButtonProps {
  block?: boolean;
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  iconClass?: string;
  textClass?: string;
  dataTestId?: string;
  size?: string;
  children?: any;
  icon?: any;
  iconPosition?: string;
  type?: "button" | "submit" | "reset";
  appearance?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = "button",
  appearance = "default",
  size,
  icon,
  iconPosition = "left",
  iconClass = "",
  block,
  rounded,
  className,
  disabled,
  children,
  onClick = () => {},
  dataTestId,
  textClass = "",
}: ButtonProps) => {
  const Icon = icon;
  const classes = classNames("btn", `btn-${appearance}`, className, {
    [`btn-${size}`]: size,
    "btn-rounded": rounded,
    "btn-icon": icon && !children,
    "btn-block": block,
    "no-events": disabled,
  });
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-test-id={dataTestId}
    >
      {Icon && iconPosition === "left" && <Icon className={iconClass} />}
      {children && <span className={textClass}>{children}</span>}
      {Icon && iconPosition === "right" && <Icon className={iconClass} />}
    </button>
  );
};

export default Button;
