import React from 'react'
import Nav from '../../components/Nav'
import NavCategory from '../../components/NavCategory'
import Footer from '../../components/Footer'

function Detail() {
  return (
    <>
      <Nav />
      <NavCategory />
      <div className="max-w-[1200px] m-auto pb-14 px-5 xl:px-0">
        <p className="mt-12 mb-4 text-sm text-[#989898]">
          Fields &nbsp; &nbsp; &gt; &nbsp; &nbsp; Technology &nbsp; &nbsp; &gt;
          &nbsp; &nbsp; Wordpress &nbsp; &nbsp; &gt; &nbsp; &nbsp; Create
          landing page
        </p>
        <h1 className="mb-10 text-3xl font-semibold">Create Landing Page</h1>
      </div>
      <Footer />
    </>
  )
}

export default Detail
