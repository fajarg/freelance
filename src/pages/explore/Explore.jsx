import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import NavCategory from '../../components/NavCategory'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { ScrollTop } from '../../function/scrollTop'
import ButtonScrollTop from '../../components/ButtonScrollTop'

function Explore() {
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
      <Nav />
      <NavCategory />
      <div className="max-w-[1200px] m-auto pb-14 px-5 xl:px-0">
        <p className="mt-12 mb-4 text-sm text-[#989898]">
          Explore &nbsp; &nbsp; &gt; &nbsp; &nbsp; Recommended for you
        </p>
        <h1 className="mb-4 text-3xl font-semibold">Recommended for you</h1>
        <div className="w-full min-h-[200px] bg-[#FFF0E2] rounded flex flex-col-reverse lg:flex-row items-center p-5 lg:p-12 gap-8 lg:gap-40">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-center lg:text-left">
              Need a <span className="text-[#FE5D40]">talent</span> as your
            </h1>
            <h1 className="text-2xl font-semibold text-[#FE5D40] text-center lg:text-left">
              requirement?
            </h1>
            <p className="my-6 text-[#969696] text-sm text-center lg:text-left">
              Your talent will message you for asking more about your needs and
              make a deal with you.
            </p>
            <button className="bg-[#FE5D40] text-white text-sm py-2 px-8 rounded-md">
              WRITE DOWN YOUR REQUIREMNTS
            </button>
          </div>
          <img
            className="hidden max-w-full lg:block"
            src="/image-explore2.png"
            alt="explore"
          />
          <img className="lg:hidden" src="/image-explore.png" alt="explore" />
        </div>
        <h1 className="mt-[6rem] mb-2 font-semibold text-[#FE5D40]">
          What your needs
        </h1>
        <h1 className="text-2xl font-semibold mb-14">Most talent for work</h1>
        <div className="overflow-x-scroll scrollbar-hide mb-[6rem]">
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
        <h1 className="mt-[5rem] mb-2 font-semibold text-[#FE5D40]">
          By the fields
        </h1>
        <h1 className="text-2xl font-semibold mb-14">
          The most popular fields
        </h1>
        <div className="overflow-x-scroll scrollbar-hide mb-[7rem]">
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
        <h1 className="mt-[5rem] mb-2 font-semibold text-[#FE5D40]">
          Trend for you
        </h1>
        <h1 className="text-2xl font-semibold mb-14">Trending for work</h1>
        <div className="overflow-x-scroll scrollbar-hide mb-[6rem]">
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
      </div>
      <Footer />
      {showScrollBtn && <ButtonScrollTop />}
    </>
  )
}

export default Explore
