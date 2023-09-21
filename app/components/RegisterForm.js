'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!fname || !lname || !email || !password) {
      setError('All fields are required')
      return
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExists.json()

      if (user) {
        setError('User already exists')
        return
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      })

      if (res.ok) {
        const form = e.target
        form.reset()
        router.push('signin')
      } else {
        console.log('User registration failed')
      }
    } catch (error) {
      console.log('Error while  registring: ', error)
    }
  }

  //   console.log('Name:', fname, lname)
  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4 uppercase text-center">
            register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setFname(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLname(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
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
              sign up
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link href={'/signin'} className="text-right text-sm mt-3">
              Already have an account?{' '}
              <span className="underline capitalize">sign in</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
