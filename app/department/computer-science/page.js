import { myData } from '@/utils/data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

// export async function getServerSideProps(context) {
//   const department = jsonData[context.params.slug]
//   return {
//     props: {
//       department,
//     },
//   }
// }

const CS = ({ department }) => {
  const [data, setData] = useState(jsonData)
  // const { query } = useRouter
  // const { slug } = query
  return (
    <>
      <div className="min-h-screen mt-[3rem]">
        <div className="cs-about">about</div>

        <div className="">
          <div className="md:flex bg-gray-100 mt-3 text-sm md:text-xl lg:items-center">
            <Image
              src="/images/inside.jpg"
              alt="computer science"
              width={1000}
              height={1000}
              className="px-5 h-[30rem] md:w-[30rem] lg:w-full"
            />
            <div className="">
              <p className="p-5 lg:px-[10rem] lg:flex ">
                Id elit sit eu tempor ut sunt adipisicing dolor. Cillum amet
                Lorem commodo ullamco officia in do commodo dolor qui aliquip
                eu. Mollit exercitation nulla cupidatat ut voluptate
                reprehenderit. Amet anim dolor voluptate ad commodo laborum
                culpa tempor esse anim culpa consequat ut elit. Nostrud
                adipisicing pariatur voluptate amet occaecat. Magna veniam
                exercitation Lorem quis. Enim sunt incididunt commodo occaecat
                enim exercitation ipsum eiusmod occaecat cupidatat. Excepteur
                laborum labore dolor aliqua proident pariatur id ut et nostrud.
                Culpa tempor amet nisi ut eu eu nulla ut exercitation et. Veniam
                cillum non officia et velit in veniam magna veniam fugiat.
              </p>
            </div>
          </div>
          <div className="lg:mt-1">
            <h1 className="bg-pink-500 w-full text-center uppercase text-white py-2">
              mission
            </h1>
            <p className="p-10">
              laborum labore dolor aliqua proident pariatur id ut et nostrud.
              Culpa tempor amet nisi ut eu eu nulla ut exercitation et. Veniam
              cillum non officia et velit in veniam magna veniam fugiat.
            </p>
          </div>

          <div className="lg:mt-1">
            <h1 className="bg-pink-500 w-full text-center uppercase text-white py-2">
              vision
            </h1>
            <p className="p-10">
              laborum labore dolor aliqua proident pariatur id ut et nostrud.
              Culpa tempor amet nisi ut eu eu nulla ut exercitation et. Veniam
              cillum non officia et velit in veniam magna veniam fugiat.
            </p>
          </div>
        </div>

        {/* Exwcutives */}
        <div className="min-h-[20rem]">
          <div className="cs-exec">faculty</div>

          {/* <div className="">
            <div className="capitalize">
              <div className="pt-5 flex justify-center">
                <Image
                  src="/images/sir.jpg"
                  alt="HOD"
                  width={1000}
                  height={1000}
                  className="h-[15rem] w-[20rem] flex justify-center rounded-md"
                />
              </div>
              <div className="flex justify-center">dr. daniel</div>
              <div className="flex justify-center">head of department</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:flex lg:justify-center lg:gap-[5rem]">
              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className="">mr. osei kofi ralph</h1>
                <h1 className=""> patron</h1>
              </div>
              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className="">mr. osei kofi ralph</h1>
                <h1 className="">assistant patron</h1>
              </div>

              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className=" ">assistant patron 2</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className=" ">president</h1>
              </div>
              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className=" ">assistant president</h1>
              </div>

              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className="">secretary</h1>
              </div>

              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className=" ">financial secretary</h1>
              </div>

              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className="">mr. osei kofi ralph</h1>
                <h1 className="">organizer</h1>
              </div>

              <div className="capitalize text-center">
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/sir.jpg"
                    alt="HOD"
                    width={1000}
                    height={1000}
                    className="h-[15rem] w-[20rem] rounded-md"
                  />
                </div>
                <h1 className=" ">mr. osei kofi ralph</h1>
                <h1 className=" ">assistant organizer</h1>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* executives */}
        <div className="min-h-[40rem]">
          <div className="cs-exec">executives</div>
        </div>

        {/* courses */}
        <div className="min-h-[40rem]">
          <div className="cs-exec">programs</div>
        </div>

        {/* awards */}
        <div className="min-h-[40rem]">
          <div className="cs-exec">awards</div>
        </div>
      </div>
    </>
  )
}

export default CS
