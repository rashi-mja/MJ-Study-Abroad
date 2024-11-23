import Link from 'next/link'
import Image from 'next/image'
import { Signika } from 'next/font/google';

const signika = Signika({ subsets: ['latin'], weight: ['300', '400', '700'] });

export function Navbar() {

    return (
        <nav className={`${signika.className} font-semibold bg-gradient-to-b from-gray-50 to-slate-50/0 absolute t-0 w-full z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[5rem] mt-2">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/navbar/mja-logo.png"
                                alt="MJ Study Abroad Logo"
                                width={300}
                                height={300}
                                className="h-[6rem] sm:h-[8rem] w-full mt-7"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/study-abroad" className="text-gray-700 hover:text-gray-900">
                                Study Abroad
                            </Link>
                            <Link href="/test-preparation" className="text-gray-700 hover:text-gray-900">
                                Test Preparation
                            </Link>
                            <Link href="/services" className="text-gray-700 hover:text-gray-900">
                                Services
                            </Link>
                            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                                Blog
                            </Link>
                            <Link href="/training" className="text-gray-700 hover:text-gray-900">
                                Training Program
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-gradient-to-b from-[#FFDFB8] to-[#F7EBBD] text-black px-5 py-3 hover:bg-orange-600 transition-colors shadow-lg rounded-2xl">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

