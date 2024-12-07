"use client"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { Signika } from 'next/font/google';
import Image from "next/image";
import { usePathname } from "next/navigation";
const signika = Signika({ subsets: ['latin'], weight: ['300', '400', '700'] });
import * as React from "react"
import { ChevronRight, Globe, GraduationCap, Home, Menu, MessageCircle, MoreHorizontal, Search, Mountain } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    SheetClose,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export default function Navbar2() {
    const pathname = usePathname()
    const { user } = useUser();
    const navItems = [
        { href: "/", label: "Home", icon: Home },
        // { href: "/", label: "Study Abroad", icon: GraduationCap },
        { href: "/test-preparation", label: "Test Preparation", icon: Search },
        { href: "/speaking-partner", label: "Find IELTS Speaking Partner", icon: MessageCircle },
        { href: "/vocab-ladder", label: "IELTS Vocab Practice", icon: Mountain },
    ]
    const { isSignedIn } = useUser()
    return (
        <header className={`${signika.className} ${pathname === "/" ? "absolute bg-gradient-to-b from-gray-50 to-slate-50/0 shadow-none" : "bg-white shadow-lg"} z-50 flex h-26 w-full shrink-0 items-center justify-between px-4 md:px-6 py-2 rounded-b-lg `}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/" onClick={() => { }}>
                                <Image
                                    src="/navbar/mja-logo.png"
                                    alt="MJ Study Abroad Logo"
                                    width={300}
                                    height={100}
                                    className="w-full mt-4"
                                />
                            </Link>
                        </SheetTitle>
                        <SheetDescription>
                            Navigate through our services and resources
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            {/* <Label htmlFor="search" className="sr-only">
                                Search
                            </Label>
                            <Input
                                id="search"
                                placeholder="Search..."
                                className="col-span-3"
                            /> */}
                            {!isSignedIn &&
                                <SignInButton>
                                    <button className='w-[90%] sm:w-[100%] justify-center text-white bg-black text-center p-2 rounded-lg font-semibold'>Sign In</button>
                                </SignInButton>
                            }
                        </div>
                        <Separator />
                        <nav className="grid gap-2">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => { }}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
                                        "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                        "transition-colors duration-200 ease-in-out"
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.label}
                                    <ChevronRight className="h-4 w-4 ml-auto" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <Separator className="my-4" />
                    <SheetFooter>
                        <div className="flex flex-col space-y-4 w-full">
                            <a target="_blank" href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="animate-bounce inline-flex items-center justify-center w-[90%] px-5 py-2 text-sm text-center text-black font-semibold border border-gray-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-[3px] sm:gap-1">
                                <Image src="/navbar/whatsapp.png" alt="→" width={20} height={20} />
                                <h3 className='text-xs text-center'>Join IELTS Student Community</h3>
                            </a>
                            <SheetClose asChild>
                                <Button type="submit" className="w-full">Contact Us</Button>
                            </SheetClose>
                        </div>
                    </SheetFooter>
                    <div className="mt-10">
                        <Button variant='ghost' className='w-full justify-start'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex gap-2 items-center'>
                                    <Avatar className=''>
                                        {isSignedIn ? <UserButton /> : <AvatarImage src='https://github.com/max-programming.png' />}
                                    </Avatar>
                                    {isSignedIn ? <span>{user?.firstName}</span> : <span>Guest 100849</span>}
                                </div>
                                {/* <MoreHorizontal size={20} /> */}
                            </div>
                        </Button>
                        <div className='p-2 z-[500] border-black bg-white text-black'>
                            <div className='flex flex-col space-y-2 mt-2'>
                                <Link href='/profile' className='w-full border-black'>
                                    <SheetClose asChild>
                                        Account Settings
                                    </SheetClose>
                                </Link>
                                {/* {!isSignedIn ? <SignInButton /> : <SignOutButton />} */}
                            </div>
                        </div>
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
                <Link href="/vocab-ladder" className="text-gray-700 hover:text-gray-900">
                    Vocabulary Ladder
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