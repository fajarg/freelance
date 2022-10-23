import React from 'react'

function CardReview() {
  return (
    <div className="w-[320px] bg-white p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <img className="rounded-full" src="profile.png" alt="profile-card" />
        <h1>Sergio</h1>
      </div>
      <p className="text-[#989898]">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.”
      </p>
    </div>
  )
}

export default CardReview
