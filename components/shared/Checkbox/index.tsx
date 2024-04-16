import React from "react";
import classNames from "classnames";

interface CheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: any) => void;
  labelSize?: "sm" | "md" | "lg";
  size?: "sm" | "md";
}

const CheckBox = ({
  id,
  name,
  checked = false,
  label,
  disabled,
  className,
  onChange = () => {},
  labelSize = "sm",
  size = "md",
}: CheckBoxProps) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (!disabled) {
      onChange({ target: { checked: false } });
    }
  };

  const classes = classNames(`checkbox checkbox-${size} mb-0`, className, {
    disabled,
  });
  const labelClasses = classNames(
    "ps-16 text-nowrap d-inline-block pull-t-1-px",
    `text-${labelSize}`
  );
  return (
    <label
      className={classes}
      htmlFor={id}
      onClick={handleClick}
      role="presentation"
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkmark" />
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
};

export default CheckBox;
