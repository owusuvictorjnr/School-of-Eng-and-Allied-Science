'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubHeaders from './components/SubHeaders'
import { myData } from '../utils/data'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ImBooks } from 'react-icons/im'
import { BsArrowRight } from 'react-icons/bs'
import { HiGlobeEuropeAfrica } from 'react-icons/hi2'
import { TbCertificate } from 'react-icons/tb'
import { FaUniversity } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-1">
        <div className="card">
          <div className="mt-[3rem] md:mt-[3rem]">
            <div className="sticky top-[4rem] md:top-[2rem] text-blue-900 text-sm text-center  md:text-xl lg:text-3xl">
              <SubHeaders
                label=" welcome to all nations university school of engineering and allied science koforidua
            ghana west africa"
              />
            </div>
          </div>

          {/* Landing page */}
          <div className="min-h-[20rem]">
            <Image
              src="/images/main.jpg"
              alt="main campus"
              width="1000"
              height="1000"
              quality={100}
              className="w-screen rounded-md mx-auto  pb-5 h-[20rem] md:h-[35rem] lg:h-[60rem]"
            />
          </div>

          {/* Departments */}
          <div className="">
            <div className="sticky top-[3rem] text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
              <SubHeaders label="our departments " />
            </div>

            <div className="grid grid-cols-1 gap-10 mb-5 mt-[1rem] rounded-lg px-[1rem] pb-5 mx-auto  lg:pl-[3rem] lg:grid-cols-3 md:grid-cols-2">
              {myData.homeScreen.map((department, _index) => {
                return (
                  <div className="" key={_index.slug}>
                    <Image
                      src={department.image}
                      alt={department.name}
                      height="1000"
                      width="1000"
                      className="rounded-md cursor-pointer h-[25rem] w-[35rem] mb-3 mt[3rem]"
                    />

                    <Link href={`department/${department.slug}`} className="">
                      <div className="slug">
                        {department.name}
                        <AiOutlineArrowRight size={25} />
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* About */}
          <div>
            <div className="sticky top-[3rem] z-20 md:z-50 text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
              <SubHeaders label="about" />
            </div>
            <div className="mb-5">
              <div className="min-h-[30rem] relative">
                <div>
                  <div className="flex gap-2 pt-10 px-5 lg:mt-10">
                    <Image
                      src="/logo/anulogo.png"
                      alt="about"
                      height="1000"
                      width="1000"
                      className="h-[3rem] w-[3rem] rounded-full bg-yellow-600"
                    />
                    <div className="pt-3 capitalize text-blue-700 text-sm md:text-lg">
                      all nations university
                    </div>
                  </div>
                </div>
                <div className="pt-2 mt-[1rem] flex justify-center  capitalize text-sm text-blue-800 font-bold md:text-2xl lg:text-3xl">
                  about the school of engineering and allied science
                </div>

                <div className="pt-5 container mx-auto px-5">
                  <p className="text-sm text-blue-500 md:text-xl lg:px-[10rem]">
                    {' '}
                    We are one of the largest, most diverse universities in the
                    ghana with over 5,000 students in ghana, and a further 1,000
                    studying across 20 countries for all nations University. all
                    nations University was established by dr. donkor in 1983 for
                    the public benefit and it is recognized globally. Throughout
                    our great history, all nations has offered access to a wide
                    range of academic opportunities. As a world leader in higher
                    education, the University has pioneered change in the
                    sector.
                  </p>

                  <div title="Read More" className="pt-2 flex justify-center">
                    <Link
                      href="/about/ehassa"
                      type="submit"
                      className="about-readmore"
                      // className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                    >
                      <h2 className="">read more</h2>

                      {/* TODO: Arrow to indicate read more*/}
                    </Link>
                  </div>
                  <div className="mt-[3rem]">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <div className="px-5 py-5">
                        <div className="flex gap-2">
                          <ImBooks size={40} color="red" />
                          <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize  md:text-xl">
                            library
                          </h2>
                        </div>
                        <div className="">
                          <p className="pt-2 text-sm text-blue-500 md:text-lg ">
                            We are one of the largest, most diverse universities
                            in the ghana with over 5,000 students in ghana, and
                            a further 1,000 studying across 20 countries for all
                            nations University.
                          </p>
                        </div>
                        <div
                          title="Read More"
                          className="pt-2 flex justify-center"
                        >
                          <Link
                            href="/about/ehassa"
                            type="submit"
                            className="about-readmore"
                            // className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                          >
                            <h2 className="flex justify-center">
                              <BsArrowRight size={30} />
                            </h2>
                          </Link>
                        </div>
                      </div>
                      <div className="px-5 py-5">
                        <div className="flex gap-2">
                          <HiGlobeEuropeAfrica size={40} color="red" />
                          <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize md:text-xl">
                            global partners
                          </h2>
                        </div>
                        <div className="">
                          <p className="pt-2 text-sm text-blue-500 md:text-lg ">
                            We are one of the largest, most diverse universities
                            in the ghana with over 5,000 students in ghana, and
                            a further 1,000 studying across 20 countries for all
                            nations University.
                          </p>
                        </div>
                        <div
                          title="Read More"
                          className="pt-2 flex justify-center"
                        >
                          <Link
                            href="/about/ehassa"
                            type="submit"
                            className="about-readmore"
                            // className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                          >
                            <h2 className="flex justify-center">
                              <BsArrowRight size={30} />
                            </h2>
                          </Link>
                        </div>
                      </div>

                      <div className="px-5 py-5">
                        <div className="flex gap-2">
                          <TbCertificate size={40} color="red" />
                          <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize  md:text-xl">
                            awards
                          </h2>
                        </div>
                        <div className="">
                          <p className="pt-2 text-sm text-blue-500 md:text-lg">
                            We are one of the largest, most diverse universities
                            in the ghana with over 5,000 students in ghana, and
                            a further 1,000 studying across 20 countries for all
                            nations University.
                          </p>
                        </div>
                        <div
                          title="Read More"
                          className="pt-2 flex justify-center"
                        >
                          <Link
                            href="/about/ehassa"
                            type="submit"
                            className="about-readmore"
                            // className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                          >
                            <h2 className="flex justify-center">
                              <BsArrowRight size={30} />
                            </h2>
                          </Link>
                        </div>
                      </div>

                      <div className="px-5 py-5">
                        <div className="flex gap-2">
                          <FaUniversity size={40} color="red" />
                          <h2 className="pt-1 text-sm text-blue-800 font-bold capitalize md:text-xl">
                            education services
                          </h2>
                        </div>
                        <div className="">
                          <p className="pt-2 text-sm text-blue-500 md:text-lg">
                            We are one of the largest, most diverse universities
                            in the ghana with over 5,000 students in ghana, and
                            a further 1,000 studying across 20 countries for all
                            nations University.
                          </p>
                        </div>
                        <div
                          title="Read More"
                          className="pt-2 flex justify-center"
                        >
                          <Link
                            href="/about/ehassa"
                            type="submit"
                            className="about-readmore"
                            // className="bg-yellow-500 w-full py-2 mt-5 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
                          >
                            <h2 className="flex justify-center">
                              <BsArrowRight size={30} />
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*News & Updates*/}

          <div>
            <div>
              <div className="sticky top-[3rem] z-20  text-blue-900 text-sm text-center md:text-xl lg:text-3xl">
                <SubHeaders label="News & Updates" />
              </div>
            </div>
            <div className="min-h-[20rem] mt-[10rem]">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Image
                      src="/images/sir.jpg"
                      alt="event picture"
                      height="1000"
                      width="1000"
                      className="rounded-md w-[30rem] h-[20rem] "
                    />
                  </div>
                  <div className="mt-5 mb-10">
                    <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                      Professor Albert joint research on mobile money in
                      Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Image
                      src="/images/sir.jpg"
                      alt="event picture"
                      height="1000"
                      width="1000"
                      className="rounded-md w-[30rem] h-[20rem] "
                    />
                  </div>
                  <div className="mt-5  mb-10">
                    <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                      Professor Albert joint research on mobile money in
                      Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Image
                      src="/images/sir.jpg"
                      alt="event picture"
                      height="1000"
                      width="1000"
                      className="rounded-md w-[30rem] h-[20rem] "
                    />
                  </div>
                  <div className="mt-5 mb-10">
                    <p className="text-blue-800 text-sm text-center px-5 md:text-xl lg:text-3xl lg:px-10 hover:text-amber-300 ">
                      Professor Albert joint research on mobile money in
                      Tanzania
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button
              title="Read More"
              type="submit"
              className="about-readmore"
              // className="bg-yellow-500 flex justify-center mx-auto w-full py-2 rounded-full text-blue-900 capitalize text-sm border-2 border-red-300 hover:bg-blue-600/50 hover:text-white md:text-xl lg:text-2xl md:w-[20rem]"
            >
              <h2 className="flex justify-center">
                <BsArrowRight size={30} />
              </h2>
            </button>
          </div>

          {/* Apply */}
          <div className="bg-yellow-600 h-[5rem">
            <div className="flex gap-2 justify-center items-center">
              <Link href="/">
                <Image
                  src="/logo/anulogo.png"
                  alt="logo"
                  height="100"
                  width="100"
                  className="rounded-full h-10 w-10 flex items-center"
                />
              </Link>
              <div className="text-sm font-bold text-white hover:text-blue-300 md:text-xl lg:text-3xl">
                <button title="Apply Now" className="capitalize ">
                  apply to all nations university school of engineering now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
