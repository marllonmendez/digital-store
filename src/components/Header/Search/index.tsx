import React from 'react'
import { LuSearch } from 'react-icons/lu'

const Search: React.FC = () => {
  return (
    <>
      <form className="relative w-full md:flex-1">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="font-normal text-[1rem] p-2 pl-5 w-full h-[60px] rounded-[8px] text-darkGray2 bg-lightGray3 md:flex-1"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2">
          <LuSearch size={20} className="text-darkGray3" />
        </button>
      </form>
    </>
  )
}

export default Search
