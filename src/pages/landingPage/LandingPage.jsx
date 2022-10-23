import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import CardReview from '../../components/CardReview'
import Footer from '../../components/Footer'
import NavLanding from '../../components/NavLanding'
import { ScrollTop } from '../../function/scrollTop'
import ButtonScrollTop from '../../components/ButtonScrollTop'

function LandingPage() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    ScrollTop()
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    })
  }, [])
  return (
    <>
      <div className="w-full h-[550px] bg-gradient-to-b from-black absolute">
        <NavLanding />
        <div className="max-w-[1200px] text-sky-50 text-3xl font-semibold m-auto mt-[9rem] px-5 xl:px-0">
          FIND A <span className="text-[#FE5D40]">SERVICE</span> THAT YOU NEED
        </div>
        <div className="max-w-[1200px] text-sky-50 text-3xl font-semibold m-auto mt-1 px-5 xl:px-0">
          FOR YOUR <span className="text-[#FE5D40]">BUSINESS</span>
        </div>
        <div className="max-w-[1200px] m-auto mt-4 flex px-5 xl:px-0">
          <input
            className="w-[400px] h-[38px] rounded p-2 focus:outline-0"
            type="text"
            placeholder={`Try to find "Web Design"`}
          />
          <button className="font-semibold text-sky-50 w-[150px] bg-[#FE5D40] h-[38px] ml-[-5px] rounded-r-md">
            Find
          </button>
        </div>
      </div>
      <img
        className="w-full h-[550px] object-cover"
        src="/hero.png"
        alt="hero"
      />
      <div className="max-w-[1200px] m-auto py-10 px-5 xl:px-0">
        <h1 className="text-[#FF9E4B] font-semibold mb-3">Find your needs</h1>
        <h1 className="mb-12 text-2xl font-semibold">Find over the fields</h1>
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex gap-10 min-w-max xl:flex-wrap xl:justify-center xl:gap-20">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon1.png" alt="icon-category" />
              <p>Graphic design</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Technology</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Digital marketing</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Document</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Music audio</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Business</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Lifestyles</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>Data processing</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/icon2.png" alt="icon-category" />
              <p>More else</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1200px] m-auto py-12 px-5 xl:px-0">
          <h1 className="text-[#FF9E4B] font-semibold mb-3">What you needs</h1>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold">Most talent for work</h1>
            <button className="bg-[#FFEFE2] py-2 px-9 font-semibold rounded-3xl hidden md:block">
              Explore More
            </button>
          </div>
          <div className="overflow-x-scroll scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#FFEFE2] py-2 px-9 font-semibold rounded-3xl md:hidden block">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF0E2]">
        <div className="max-w-[1200px] m-auto py-14 flex justify-between flex-col-reverse lg:flex-row px-5 xl:px-0 gap-12 lg:gap-0 items-center">
          <div className="lg:w-[40%]">
            <h1 className="mb-10 text-3xl font-semibold">
              The key that makes you{' '}
              <span className="text-[#FE5D40]">trust</span> with us
            </h1>
            <h1 className="mb-2 text-xl font-semibold">Lorem ipsum color</h1>
            <p className="text-base text-[#969696] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              sapiente voluptatibus dolorum eius impedit vel.
            </p>
            <h1 className="mb-2 text-xl font-semibold">Lorem ipsum color</h1>
            <p className="text-base text-[#969696] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              sapiente voluptatibus dolorum eius impedit vel.
            </p>
            <h1 className="mb-2 text-xl font-semibold">Lorem ipsum color</h1>
            <p className="text-base text-[#969696] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              sapiente voluptatibus dolorum eius impedit vel.
            </p>
          </div>
          <div>
            <img
              className="w-full md:max-w-[550px]"
              src="/image-section-2.png"
              alt="image-section-two"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1200px] m-auto py-12 px-5 xl:px-0">
          <h1 className="text-[#FF9E4B] font-semibold mb-3">
            Review from people
          </h1>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold">What they said</h1>
            <button className="bg-[#FFEFE2] py-2 px-9 font-semibold rounded-3xl hidden md:block">
              Explore More
            </button>
          </div>
          <div className="overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              <CardReview />
              <CardReview />
              <CardReview />
              <CardReview />
              <CardReview />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#FFEFE2] py-2 px-9 font-semibold rounded-3xl md:hidden block">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {showScrollBtn && <ButtonScrollTop />}
    </>
  )
}

export default LandingPage
