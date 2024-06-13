'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const [scrollBar, setScrollBar] = useState(false)
  useEffect(() => {
    if (scrollBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })

  const handleBurgerClick = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
    setScrollBar(!scrollBar)
  }
  const handleNavItemsClick = () => {
    setHamburgerMenuOpen(false)
    setScrollBar(false)
  }
  return (
    <div className="flex items-center justify-start lg:justify-evenly py-2 font-bold text-2xl fixed w-screen bg-white z-50">
      <div className="hidden md:block basis-1/2 flex-shrink ml-5">
        Frank Alvarez
      </div>
      <div className=" ml-6 z-10 flex-grow flex">
        <div
          onClick={handleBurgerClick}
          className="md:hidden cursor-pointer flex gap-1 flex-col"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </div>

      <a
        className="md:hidden px-4 py-1 rounded-md bg-gray-800 text-white text-base mr-8"
        href="Frank_Alvarez_Resume_2023.pdf"
        download
      >
        Download Resume
      </a>
      <div
        className={`fixed flex -top-full gap-0 flex-col bg-white w-full text-center md:block md:basis-1/3 flex-shrink-0 md:static md:flex-row md:w-auto md:top-auto lg:items-center lg:space-x-4 lg:pr-10 lg:gap-x-2 text-sm ${
          hamburgerMenuOpen ? 'top-0 h-screen justify-evenly items-center' : ''
        }`}
      >
        <div className="flex flex-col justify-center  md:justify-evenly text-base md:flex-row">
          <Link
            href={'/?a=#about'}
            onClick={() => {
              handleNavItemsClick()
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            scroll={false}
            className="nav-link hover:underline decoration-2"
          >
            About
          </Link>
          <Link
            href={'/?a=#skills'}
            onClick={() => {
              handleNavItemsClick()
              document
                .getElementById('skills')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            scroll={false}
            className="nav-link hover:underline decoration-2"
          >
            My Skills
          </Link>
          <Link
            href={'/?a=#experience'}
            onClick={() => {
              handleNavItemsClick()
              document
                .getElementById('experience')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            scroll={false}
            className="nav-link hover:underline decoration-2"
          >
            Experience
          </Link>
          <Link
            href={'/?a=#contact'}
            onClick={() => {
              handleNavItemsClick()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            scroll={false}
            className="nav-link hover:underline decoration-2 "
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Header
