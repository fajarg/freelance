import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import NavCategory from '../../components/NavCategory'
import Card from '../../components/Card'
import { ScrollTop } from '../../function/scrollTop'
import ButtonScrollTop from '../../components/ButtonScrollTop'
import Select from 'react-select'

function FieldsSubCategory() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

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
          Fields &nbsp; &nbsp; &gt; &nbsp; &nbsp; Technology &nbsp; &nbsp; &gt;
          &nbsp; &nbsp; Wordpress
        </p>
        <h1 className="mb-10 text-3xl font-semibold">Technology</h1>
        <div className="gap-4 mb-6 md:flex">
          <Select
            className="mb-6 md:w-[200px]"
            options={options}
            placeholder="Price"
            isClearable={true}
          />
          <Select
            className="mb-6 md:w-[200px]"
            options={options}
            placeholder="Rating"
            isClearable={true}
          />
          <Select
            className="mb-6 md:w-[200px]"
            options={options}
            placeholder="Talent"
            isClearable={true}
          />
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

export default FieldsSubCategory
