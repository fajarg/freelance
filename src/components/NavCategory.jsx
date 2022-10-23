import React from 'react'

function NavCategory() {
  return (
    <div className="w-full pt-[5rem] border-b-2 border-b-slate-300">
      <div className="py-4 max-w-[1200px] m-auto flex flex-col-reverse lg:flex-row lg:items-center text-sm gap-6 xl:gap-8 px-5 xl:px-0">
        <div className="w-full lg:w-[30%] flex">
          <input
            className="w-[70%] h-[38px] rounded-l-md p-2 focus:outline-0 border-2"
            type="text"
            placeholder={`Find service`}
          />
          <button className="w-[30%] font-semibold text-sky-50 bg-[#FE5D40] h-[38px] ml-[-5px] rounded-r-md">
            Find
          </button>
        </div>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="flex gap-6 min-w-max">
            <li>Graphic design</li>
            <li>Technology</li>
            <li>Digital marketing</li>
            <li>Document</li>
            <li>Music audio</li>
            <li>Business</li>
            <li>Lifestyles</li>
            <li>Data processing</li>
            <li>More else</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavCategory
