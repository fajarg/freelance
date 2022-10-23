import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Card() {
  return (
    <div className="w-full xl:w-[282px] bg-white p-3 rounded-md border-[1px] border-[#9A9A9A] box-border">
      <img
        className="object-cover w-full rounded-md"
        src="card1.png"
        alt="image-card"
      />
      <div className="flex items-center gap-3 mt-4">
        <img className="rounded-full" src="/profile.png" alt="profile" />
        <div>
          <div className="mb-1 text-base">Sergio</div>
          <div className="text-xs font-semibold text-[#989898]">
            Video and editor
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] mb-12">
        I am a professional video editor with skills that could help you work
        with it
      </p>
      <hr />
      <div className="flex items-center justify-between mt-2 text-xs">
        <div className="text-[#989898]">Start from IDR 500,000</div>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-400" />
          <p>4,9 (1k+)</p>
        </div>
      </div>
    </div>
  )
}

export default Card
