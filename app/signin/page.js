'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Signin = () => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res.error) {
        setError('Invalid credentials')
        return
      }

      router.replace('dashboard')
    } catch (error) {}
  }

  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4 uppercase text-center">
            login
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className=""
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
              className=""
            />
            <button className="capitalize bg-yellow-400 text-red-500/50 font-bold px-6 py-2">
              sign in
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link href={'/register'} className="text-right text-sm mt-3">
              Don`t have an account?{' '}
              <span className="underline capitalize">sign up</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
