import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Signup = async () => {
  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard')
  return <RegisterForm>Signup</RegisterForm>
}

export default Signup