import Link from 'next/link'
import React from 'react'

import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className="bg-yellow-500">
        <div className="grid grid-cols-2  gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              All Nations University
            </h2>
            <ul className="text-blue-900 ">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>

              <li className="mb-4">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Help center
            </h2>
            <ul className="text-blue-900 ">
              <li className="mb-4">
                <Link href="/linkedin" className="hover:underline">
                  LinkedIn
                </Link>
              </li>

              <li className="mb-4">
                <Link href="/twitter" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/facebook" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <a href="/contactus" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="text-blue-900">
              <li className="mb-4">
                <Link href="/policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/licensing" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/t&c" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Download
            </h2>
            <ul className="text-blue-900">
              <li className="mb-4">
                <Link href="/google/playstore" className="hover:underline">
                  ANU CGPA On Playstore
                </Link>
              </li>
              <li className="mb-4">
                <Link href="apple/appstore" className="hover:underline">
                  ANU CGPA On Appstore
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 px-4 bg-blue-900 text-center md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            &copy; 2022{' '}
            <Link href="https://cre8iveinc.com/">Cre8ive Inc.™</Link>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center sm:justify-center md:mt-0">
            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <BsFacebook size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <BsTwitter size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <AiOutlineGithub size={25} />
            </Link>

            <Link
              href=""
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ease-in duration-300"
            >
              <AiOutlineLinkedin size={25} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
