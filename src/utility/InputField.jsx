import React from 'react'

const InputField = ({label, type, placeholder, onChange}) => {
  return (
    <div className="p-2">
        <label className='text-sm font-roboto font-bold px-1 text-gray-5 00' htmlFor="email">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-2 font-roboto text-gray-800  outline-none border border-green-600 border-solid rounded"  
          onChange={onChange}
          required
        />
        </div>
  )
}

export default InputField
