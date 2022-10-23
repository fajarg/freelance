import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Nav() {
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
    <div className="fixed z-10 w-full bg-white border-b-2 border-b-slate-300">
      <div className="flex items-center justify-between max-w-[1200px] m-auto py-4 text-sm px-5 xl:px-0">
        <img className="max-w-[170px]" src="/logo_lemondial.png" alt="logo" />
        <ul className="hidden gap-8 lg:flex">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/explore">
            <li>Explore</li>
          </NavLink>
          <NavLink to="/fields">
            <li>Fields</li>
          </NavLink>
          <li>Why us</li>
          <li>Find work?</li>
        </ul>
        <button className="hidden lg:block py-2 px-8 border border-[#FE5D40] rounded-md">
          Sign in
        </button>
        <button onClick={handleNav} className="block cursor-pointer lg:hidden">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
      <div
        ref={wrapperRef}
        className={
          navOpen
            ? 'fixed top-0 left-0 w-[75%] h-full border-r-gray-900 bg-[#FE5D40] ease-in-out duration-500 lg:hidden z-[111]'
            : 'ease-in-out duration-200 top-0 h-full w-0 fixed left-[-100%]'
        }
      >
        <ul className="p-4 text-white uppercase">
          <li className="p-4 border-b border-slate-50">home</li>
          <li className="p-4 border-b border-slate-50">explore</li>
          <li className="p-4 border-b border-slate-50">fileds</li>
          <li className="p-4 border-b border-slate-50">why us</li>
          <li className="p-4 border-b border-slate-50">find work?</li>
          <li className="p-4">sign in</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
