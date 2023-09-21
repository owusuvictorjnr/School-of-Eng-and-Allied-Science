import User from '@/models/user'
import { connectMongoDB } from '@/utils/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { fname, lname, email, password } = await req.json()

    const hashedPassword = await bcrypt.hash(password, 10)

    await connectMongoDB()

    await User.create({fname, lname, email, password:hashedPassword})

    return NextResponse.json({ message: 'User registered' }, { status: 201 })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { message: 'An error occurred while registring the user' },
      { status: 500 }
    )
  }
}
