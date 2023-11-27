'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

    const trigger = useRef<HTMLButtonElement>(null)
    const mobileNav = useRef<HTMLDivElement>(null)

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <div className="lg:hidden">
            {/* Hamburger button */}
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && 'active'}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg
                    className="w-6 h-6 fill-current text-gray-100 hover:text-gray-200 transition duration-150 ease-in-out"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="4" width="24" height="2" rx="1" />
                    <rect y="11" width="24" height="2" rx="1" />
                    <rect y="18" width="24" height="2" rx="1" />
                </svg>
            </button>

            {/*Mobile navigation */}
            <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
            >
                <ul className="bg-gray-100 px-4 py-2">
                    <li>
                        <Link id="mobilemenue_signin" href="https://voyeurhouse.com/live#/auth/login" className="flex font-medium w-full text-green-500 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="mobilemenue_signup"
                            href="https://voyeurhouse.com/replay#/auth/login"
                            className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-green-500 hover:bg-green-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
                        >
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Blowjob
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Amateur
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Threesome
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Anal
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            BDSM
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Live Sex
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Webcam
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Sextoys
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Shower
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Facial
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Lesbian
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://voyeurhouse.com/replay/" className="flex font-medium w-full text-gray-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                            Fetish
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6 ml-2 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
