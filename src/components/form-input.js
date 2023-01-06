import React from "react";

import Icon from "../assets/svg";

const FormInput = ({
  icon,
  name,
  type,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="input-group input-box-shadow flex items-center p-[10px_14px] w-full max-w-[488px] bg-white border-gray-300 border-[1px] rounded-[8px]">
      <span className="input-group-text mr-[8px] w-[20px] h-[20px]">
        <Icon name={icon} />
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="form-control text-[15px] tracking-[0.01em]"
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
