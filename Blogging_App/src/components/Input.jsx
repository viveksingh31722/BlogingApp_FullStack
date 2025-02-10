import React, {useId, forwardRef} from 'react'

const Input = forwardRef( function Input({ 
  label,
  type = "text",
  className = "",
  ...props
}, ref){
  const id = useId();
  return (
    <div className='w-full '>
      {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
        {label}
      </label>
      }
      <input type={type}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} />
      ref={ref}
      {...props}
      id={id}
    </div>
  )
})

export default Input

//Imp Note about forwardRef Hook.
// The forwardRef hook allows the parent component to pass a ref to the child component.
// This is useful for accessing the DOM element directly or using it with other hooks.
 
