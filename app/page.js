import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubHeaders from './components/SubHeaders'
import { myData } from '../utils/data'
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
                      className="rounded-md h-[25rem] w-[35rem] mb-3 mt[3rem]"
                    />

                    <Link
                      href={`department/${department.slug}`}
                      className="slug"
                    >
                      {department.name}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
