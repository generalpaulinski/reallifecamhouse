import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
             </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h5 className="text-gray-200 font-medium mb-1">Information</h5>
                <ul>
                  <li className="mb-1">
                    <Link href="https://voyeurhouse.com/cms/tos" target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Terms & Conditions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://voyeurhouse.com/cms/privacy" target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h5 className="text-gray-200 font-medium mb-1">Support & Help</h5>
                <ul>
                  <li className="mb-1">
                    <Link href="https://voyeurhouse.com/cms/faq" target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">FAQ</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://blog.voyeurhouse.com/" target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Voyeur House Blog</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h5 className="text-gray-100 font-medium mb-1">Work with us</h5>
                <ul>
                  <li className="mb-1">
                    <Link href="https://voyeurhouse.com/model/register" target="_blank" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Become a creator</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="mailto:webmaster@voyeurhouse.com" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Webmasters</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://twitter.com/thevoyeurhouse" target="_blank" className="flex justify-center items-center text-green-500 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.instagram.com/thevoyeurhouse/" target="_blank" className="flex justify-center items-center text-green-500 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-200 text-sm mr-4">&copy; voyeurhouse.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
