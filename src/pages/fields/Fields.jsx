import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import NavCategory from '../../components/NavCategory'
import Card from '../../components/Card'
import { ScrollTop } from '../../function/scrollTop'
import ButtonScrollTop from '../../components/ButtonScrollTop'

function Fields() {
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
          Fields &nbsp; &nbsp; &gt; &nbsp; &nbsp; Technology
        </p>
        <h1 className="mb-10 text-3xl font-semibold">Technology</h1>
        <h1 className="mb-6 font-semibold">
          More specific into a specialized talent for work
        </h1>
        <div className="mb-12 overflow-x-scroll scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md flex items-center justify-center text-center">
              Wordpress
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center">
              Web programming
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center flex-wrap">
              Mobile programming
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center">
              Cyber security
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center">
              Database
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center">
              Machine learning
            </div>
            <div className="bg-[#FFEFE2] border border-[#DADADA] py-6 px-10 rounded-md items-center justify-center text-center">
              Automation
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#FFEFE2] py-2 px-9 font-semibold rounded-3xl block">
            Explore More
          </button>
        </div>
      </div>
      <Footer />
      {showScrollBtn && <ButtonScrollTop />}
    </>
  )
}

export default Fields
