'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const NavBar = () => {
  // sidebar
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      <div className="bg-yellow-200  shadow-md fixed z-50 left-0 right-0 top-0 h-[3rem] flex justify-center md:gap-[10rem]">
        <div className="flex">
          <Link href="/" className="">
            <Image
              src="/logo/ehassa.png"
              alt="EHASSA"
              height="1000"
              width="1000"
              className="h-[3rem] w-[3rem] py-1 px-1 mx-5 mt-1 pb-2"
            />
          </Link>

          <div>
            <Link href="/" className="">
              <h2 className="text-blue-500 text-xl py-4 capitalize md:text-xl md:py-3">
                school of engineering
              </h2>
            </Link>
          </div>
        </div>

        {/* main NavBar */}
        <div className="">
          <nav className=" py-4 mx-5 text-sm text-blue-500 capitalize flex justify-between md:text-xl">
            <ul className="md:flex md:gap-5 hidden">
              <Link href="/">
                <h1 className=" px-2  rounded  hover:underline duration-500">
                  home
                </h1>
              </Link>

              {/* About */}
              <div className="about">
                <Link href="/about/ehassa" className=" px-2 hover:underline">
                  <div className="">about</div>
                </Link>
                <div className="dropDownItems">
                  <Link href="/department/computer-science">
                    <div className="dropDownDiv">computer science</div>
                  </Link>

                  <Link href="/department/computer-engineering">
                    <div className="dropDownDiv">computer engineering</div>
                  </Link>

                  <Link href="/department/biomedical-engineering">
                    <div className="dropDownDiv">biomedical-engineering</div>
                  </Link>

                  <Link href="/department/nursing">
                    <div className="dropDownDiv">nursing</div>
                  </Link>

                  <Link href="/department/electrical-&-communication-engineering">
                    <div className="dropDownDiv">electrical comm</div>
                  </Link>

                  <Link href="/department/oil-&-gas">
                    <div className="dropDownDiv">oil & gas</div>
                  </Link>
                </div>
              </div>

              <Link href="/contact">
                <h1 className=" px-2 hover:underline ">contact us</h1>
              </Link>

              {/* <Link href="/signin">
                <h1 className=" px-2 hover:underline ">sign in</h1>
              </Link> */}
            </ul>

            {/* sidebar */}
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <AiOutlineMenu size={20} />
            </div>
            <div
              className={
                nav ? 'bg-black/70 h-screen w-full top-0 left-0 fixed' : ''
              }
            >
              <div
                className={
                  nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-blue-900/90 p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
              >
                {/* sidebar image */}
                <div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex mx-auto items-center gap-5 md:gap-[4rem]">
                      <Link href="/" className="flex">
                        <Image
                          src="/logo/ehassa.png"
                          alt="EHASSA"
                          height="1000"
                          width="1000"
                          className="h-[3rem] w-[3rem] py-1 px-1 mt-1 pb-2"
                        />
                        <div className="flex items-center px-4">
                          <p className="text-sm text-yellow-400 ">
                            school of engineering
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* outline close Button */}
                    <div onClick={handleNav} className="cursor-pointer">
                      <AiOutlineClose
                        size={20}
                        color="red"
                        className="rounded-full mx-2 hover:bg-white"
                      />
                    </div>
                  </div>
                  {/* line */}
                  <div className="h-[0.01rem] w-full bg-yellow-100" />

                  <div className="">
                    <h2 className="flex justify-center container mx-auto w-[85%] md:w-[90%] py-4 text-yellow-400 ">
                      all nations university
                    </h2>
                  </div>
                  <div className="">
                    <ul className="py-4 flex flex-col text-yellow-400 gap-[5rem] text-md">
                      <Link href="/">
                        <h1 className=" px-2  rounded  hover:underline">
                          home
                        </h1>
                      </Link>

                      <Link href="/about">
                        <h1 className=" px-2  hover:underline">about</h1>
                      </Link>

                      <Link href="/contact">
                        <h1 className=" px-2  hover:underline ">contact</h1>
                      </Link>

                      <Link href="/signin">
                        <h1 className=" px-2  hover:underline ">sign in</h1>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="h-[0.01rem] w-full bg-yellow-100" />

                {/* socials */}
                <div className="mt-[5rem] flex justify-center mx-auto">
                  <p className="text-white text-lg">let`s connect</p>
                </div>

                <div className="flex items-center justify-between my-4 w-full sm:w-[80%] mt-[2rem]">
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500  p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <Link href="/">
                      <FaLinkedinIn color="blue" size={18} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500  p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <Link href="/">
                      <AiOutlineMail color="blue" size={18} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500  p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <Link href="/">
                      <FaFacebook color="blue" size={18} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500  p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <Link href="/">
                      <FaInstagram color="blue" size={18} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <Link href="/">
                      <FaTwitter color="blue" size={18} />
                    </Link>
                  </div>
                </div>
                {/* Developer */}
                <div className="mt-[13rem] flex justify-center mx-auto">
                  <Link href="/">
                    <p className="text-white/40">developed by cr8ive inc</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar
