import React from 'react'
import { GoChevronUp } from 'react-icons/go'
import { ScrollTop } from '../function/scrollTop'

function ButtonScrollTop() {
  const handleScrollTop = () => {
    ScrollTop()
  }
  return (
    <button
      onClick={handleScrollTop}
      className="py-2 px-3 bg-[#FE5D40] text-white fixed right-[25px] bottom-[25px] rounded-md text-3xl"
    >
      <GoChevronUp />
    </button>
  )
}

export default ButtonScrollTop
