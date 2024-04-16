import React from "react";

interface FormItemProps {
  name: string;
  labelText: string;
  className?: string;
  placeholder: string;
  isTextArea?: boolean;
  hidePointer?: boolean;
  onFormChange?: (name: string, value: string) => void; // Optional callback function
}

const FormItem = ({
  name,
  className,
  labelText,
  isTextArea,
  placeholder,
  hidePointer,
  onFormChange
}: FormItemProps) => {
  
  const handleFormItemChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onFormChange && onFormChange(name, value);
  }
  
  return (
    <div className={`d-flex flex-column ${className}`}>
      <label htmlFor={name} className="text-xxs pb-3">
        {labelText} <span className="text-color-red">{hidePointer ? "" : " *"}</span>
      </label>
      {isTextArea ? (
        <textarea
          onChange = {handleFormItemChange}
          required
          name={name}
          placeholder={placeholder}
          className="form-item input-textarea text-xs rounded-6-px p-7 no-resize"
        ></textarea>
      ) : (
        <input
          onChange = {handleFormItemChange}
          required
          type="text"
          name={name}
          placeholder={placeholder}
          className="form-item text-xs rounded-6-px p-7"
        />
      )}
    </div>
  );
};

export default FormItem;
