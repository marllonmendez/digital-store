import React from 'react'
import { IButton } from '@/interface'

const Button: React.FC<IButton> = ({ label, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-2 rounded-[8px] text-[1rem] ${className}`}
      >
        {label}
      </button>
    </>
  )
}

export default Button
