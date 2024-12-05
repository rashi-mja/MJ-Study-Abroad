"use client"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { Signika } from 'next/font/google';
import Image from "next/image";
import { usePathname } from "next/navigation";
const signika = Signika({ subsets: ['latin'], weight: ['300', '400', '700'] });

export default function Navbar2() {
    const pathname = usePathname()
    const { user } = useUser();
    return (
        <header className={`${signika.className} ${pathname === "/" ? "absolute bg-gradient-to-b from-gray-50 to-slate-50/0 shadow-none" : "bg-white shadow-lg"} z-50 flex h-26 w-full shrink-0 items-center justify-between px-4 md:px-6 py-2 rounded-b-lg `}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="">
                    <Link href="/">
                        <Image
                            src="/navbar/mja-logo.png"
                            alt="MJ Study Abroad Logo"
                            width={300}
                            height={500}
                            className="w-full mt-7 "
                        />
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">
                            Study Abroad
                        </Link>
                        <Link href="/test-prepration" className="text-gray-700 hover:text-gray-900">
                            Test Preparation
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-gray-900">
                            Services
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                            Blog
                        </Link>
                        <Link href="/speaking-partner" className="text-gray-700 hover:text-gray-900">
                            Fing IELTS Speaking Partner
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/">
                <Image
                    src="/navbar/mja-logo.png"
                    alt="MJ Study Abroad Logo"
                    width={300}
                    height={300}
                    className="h-[4rem] w-full"
                />
            </Link>
            <nav className={`${signika.className} hidden lg:flex gap-6`}>
                <Link href="/" className="text-gray-700 hover:text-gray-900">
                    Study Abroad
                </Link>
                <Link href="/test-prepration" className="text-gray-700 hover:text-gray-900">
                    Test Preparation
                </Link>
                {/* <Link href="/services" className="text-gray-700 hover:text-gray-900">
                    Services
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                    Blog
                </Link> */}
                <Link href="/speaking-partner" className="text-gray-700 hover:text-gray-900">
                    Fing IELTS Speaking Partner
                </Link>
            </nav>
            <div className="hidden md:block">
                <div className="bg-gradient-to-b from-[#FFDFB8] to-[#F7EBBD] text-black px-5 py-3 hover:bg-orange-600 transition-colors shadow-lg rounded-2xl">
                    {user ? <SignOutButton /> : <SignInButton />}
                </div>
            </div>
        </header>
    )
}

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}