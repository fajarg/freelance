import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function NavLanding() {
  const [navOpen, setNavOpen] = useState(false)
  const wrapperRef = useRef(null)

  const handleNav = () => {
    setNavOpen(!navOpen)
  }

  // outside click menu handle
  const useHandleOutside = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useHandleOutside(wrapperRef)
  // end of outside click menu handle

  return (
    <>
      <div className="flex justify-between text-sky-50 max-w-[1200px] m-auto items-center py-4 px-5 xl:px-0">
        <img className="w-[160px]" src="/logo_white_nav.png" alt="logo-nav" />
        <ul className="hidden gap-8 md:flex">
          <NavLink to="/explore">
            <li>Explore</li>
          </NavLink>
          <li>Fields</li>
          <li>Why us</li>
          <li>Find work?</li>
          <li>Sign In</li>
        </ul>
        <button onClick={handleNav} className="block cursor-pointer md:hidden">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
      <div
        ref={wrapperRef}
        className={
          navOpen
            ? 'fixed top-0 left-0 w-[75%] h-full border-r-gray-900 bg-[#FE5D40] ease-in-out duration-500 md:hidden'
            : 'ease-in-out duration-200 top-0 h-full w-0 fixed left-[-100%]'
        }
      >
        <ul className="p-4 text-white uppercase">
          <li className="p-4 border-b border-slate-50">explore</li>
          <li className="p-4 border-b border-slate-50">fields</li>
          <li className="p-4 border-b border-slate-50">why us</li>
          <li className="p-4 border-b border-slate-50">find work?</li>
          <li className="p-4">sign in</li>
        </ul>
      </div>
    </>
  )
}

export default NavLanding
