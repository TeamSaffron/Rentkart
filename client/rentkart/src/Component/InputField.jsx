import { useState, useCallback } from 'react';

export default function InputField({ inputType, value, onChange = (e)=>{}, tagType, placeHolder = "Enter field", isRequired = true, inputFieldClass }) {
  const [inputVal, setInputVal] = useState(value || "");
  const handleChange = useCallback((event) => {
    setInputVal(event.target.value.trim());
  } , [])

  return (
   <>
   { tagType === 'input' ? 
      <input
        value={inputVal}
        className={inputFieldClass}
        placeholder={placeHolder}
        required={isRequired}
        type={inputType || "text"}
        onChange={() => {
          handleChange();
          onChange(inputVal);
        }}
      />
      : <textarea 
          value={inputVal}
          className={inputFieldClass}
          placeholder={placeHolder}
          required={isRequired}
          type={inputType || "text"}
          onChange={() => {
            handleChange();
            onChange(inputVal);
          }}
        />
   }
   </>
  )
}
