import classNames from "classnames";
import React from "react";

interface RangeProps {
  value: number;
  step: number;
  min: number;
  max: number;
  size?: "sm" | "lg";
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Range = ({
  value,
  step,
  min,
  max,
  size,
  className,
  onChange,
  onMouseDown,
  onMouseUp,
}: RangeProps) => {
  const classes = classNames("range-input", className, {
    [`range-input-${size}`]: size,
  });
  return (
    <div className={classes}>
      <div className="range-input-content">
        <div className="range-input-progress">
          <span style={{ width: `${(value * 100) / max}%` }} />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      </div>
    </div>
  );
};

Range.defaultProps = {
  value: 0,
  step: 0.1,
  min: 0,
  max: 10,
  onChange: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
};

export default Range;
