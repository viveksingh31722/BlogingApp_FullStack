import React, {useId} from 'react'

 function Select({
  options, // Here options are going to have the array.
  label,
  className = "",
  ...props
}, ref) {
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select 
      {...props} 
      id={id} 
      ref={ref} 
      className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>
    </div>
  )
}

export default React.forwardRef(Select); // This forwardRef is hook used pass or get the values using ref.
