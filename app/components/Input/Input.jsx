"use client"
import PropTypes from 'prop-types';
import React from "react";

const Input = ({
  labelFor,
  label,
  inputType,
  inputName,
  placeHolder,
  Icon,
  onChange,
  focus
}) => {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label htmlFor={labelFor} className="text-gray-500 ">
          {label}
        </label>
        <div className={`pl-4 flex gap-x-1 items-center w-full border   border-gray-300 rounded-lg   capitalize text-gray-500  focus-within:border-amber-700`}>
         {
            Icon&&(
            <Icon size={16}/>
            )
         }
          <input
            type={inputType}
            name={inputName}
            placeholder={placeHolder}
            onChange={(e)=>onChange(e.target.value)}
            onFocus={focus}
            className="outline-none  w-full py-2 pr-4"
          />
        </div>
      </div>
    </>
  );
};

Input.propTypes={
    Icon:PropTypes.bool
}
Input.defaultProps={
    Icon:false
}

export default Input;
