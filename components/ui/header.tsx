import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link href="/" className="block lg:ml-16 lg:pl-10" aria-label="Cruip">
                            <img alt="VoyeurHouse Logo" width="200"
                                 src="logo.png" />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden lg:flex lg:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <Link
                                    href="https://voyeurhouse.com/live#/auth/login"
                                    className="font-medium text-green-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link href="https://voyeurhouse.com/replay#/auth/login"
                                      className="btn-sm text-white bg-green-500 hover:bg-green-700 ml-3">
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu />

                </div>
            </div>
        </header>
    )
}
