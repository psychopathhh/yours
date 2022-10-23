import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off' className='text-gray-400 focus-within:text-white'>
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex justify-start items-center bg-[#293942] rounded-[20px] mx-auto mt-[20px] sm::w-[90%] w-[100%] xl:w-[70%]">
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search artists or songs..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent sm:w-[90%] w-[100%] border-none outline-none placeholder-gray-500 text-xl text-white p-4 shadow-2xl "
        />

        {searchTerm &&
          <div className="bg-[#293942] flex rounded-r-[20px] items-center flex-end sm:pr-4 pr-[5px]">
            <FiX className="w-6 h-6 sm:w-8 sm:h-8  cursor-pointer" onClick={() => setSearchTerm('')} />
            <input type="submit" value="Search" className="text-[#7971E9] sm:text-2xl text-xl ml-2 pl-1 cursor-pointer" />
          </div>
        }
      </div>
    </form>
  )
}

export default Searchbar;
