'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const UserInfo = () => {
  // const { data: session } = useSession()
  return (
    <div className="grid place-items-center h-screen">
      <div className="">
       

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          log out
        </button>
      </div>
    </div>
  )
}

export default UserInfo


// {/* <div className="">
// Name: <span className="font-bold">
//   vitech
//   {/* {session?.user?.name} */}
//   </span>
// </div>

// <div className="">
// Email: <span className="font-bold">
//   vitech@gmail.com
//   {/* {session?.user?.email} */}
//   </span>
// </div> */}