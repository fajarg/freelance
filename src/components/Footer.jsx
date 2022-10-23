import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className="w-full border-t-2 border-t-slate-300">
      <div className="max-w-[1200px] m-auto py-[5em] flex gap-10 flex-wrap px-5 xl:px-0">
        <div className="md:w-[40%] w-full pr-20">
          <img
            className="max-w-[240px] mb-5"
            src="/logo_lemondial.png"
            alt="logo-footer"
          />
          <p className="text-sm text-[#989898]">
            Choose your passion in programming by your own from zero to hero.
            What are you waiting for? Go for it now.
          </p>
        </div>
        <div>
          <h1 className="text-[#FF9E4B] font-semibold mb-4">Fields</h1>
          <ul className="text-sm text-[#989898]">
            <li className="mb-2">Graphic design</li>
            <li className="mb-2">Technology</li>
            <li className="mb-2">Digital marketing</li>
            <li className="mb-2">Document</li>
            <li className="mb-2">Music audio</li>
            <li className="mb-2">Business</li>
            <li className="mb-2">Data processing</li>
            <li className="mb-2">Lifestyles</li>
            <li className="mb-2">More else</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#FF9E4B] font-semibold mb-4">
            Lemondial services
          </h1>
          <ul className="text-sm text-[#989898]">
            <li className="mb-2">Find a job</li>
            <li className="mb-2">Lemondial Academy</li>
            <li className="mb-2">Freelance</li>
            <li className="mb-2">Skill Academy</li>
          </ul>
          <h1 className="text-[#FF9E4B] font-semibold mb-4 mt-8">
            Social media
          </h1>
          <div className="flex items-center gap-4 text-2xl text-[#989898]">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
        <div>
          <h1 className="text-[#FF9E4B] font-semibold mb-4">Contact</h1>
          <ul className="text-sm text-[#989898]">
            <li className="mb-2">
              Ciledug Street 05, Jakarta Selatan, Indonesia
            </li>
            <li className="mb-2">example.mail@hackathon.co.id</li>
            <li className="mb-2">+1 233 04124</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
