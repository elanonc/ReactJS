import React from 'react';

function Checkbox({options, value, setValue}) {

  function handleChange({target}){
    if(target.checked) {
        setValue([...value,target.value]);
    } else {
        setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <>
        {options.map((option) => (
            <label key={option}>
                <input type="checkbox" checked={value.includes(option)} value={option} onChange={handleChange}/>
                {option}
            </label>            
        ))}  
    </>
  );
};

export default Checkbox;