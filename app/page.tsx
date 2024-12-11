"use client";
import Image from "next/image";
import { Signika } from "next/font/google";
import MJASolutionHub from "@/components/mja-solution-hub";
import TravelGuide from "@/components/StarSpeaks";
import BookCall from "@/components/LandingPage/SlotBookingCounseling";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; // Import Shadcn dialog components
import { useEffect, useState } from "react";
import type { Metadata } from "next";

const signika = Signika({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "IELTS Go Global | Your Gateway to Study Abroad",
  description:
    "Explore study abroad opportunities and prepare for IELTS with the best resources, study partners, and guidance. Join our global student community today!",
  keywords: "IELTS preparation, Study Abroad, Study Partners, IELTS Go Global, ieltsgoglobal",
  openGraph: {
    title: "IELTS Go Global | Your Gateway to Study Abroad",
    description:
      "Explore study abroad opportunities and prepare for IELTS with the best resources, study partners, and guidance. Join our global student community today!",
    url: "https://ieltsgoglobal.com",
    images: [
      {
        url: "/landingPage/WorldMapBG.png",
        width: 1200,
        height: 630,
        alt: "IELTS Go Global Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS Go Global | Your Gateway to Study Abroad",
    description:
      "Explore study abroad opportunities and prepare for IELTS with the best resources, study partners, and guidance. Join our global student community today!",
    images: ["/landingPage/WorldMapBG.png"], // Image for Twitter cards
    creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
  },
};

export default function LandingPage() {
  const [isBookCounselingModalOpen, setIsBookCounselingModalOpen] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem("studentBookingDetails");
    if (storedData) {
      setIsBookCounselingModalOpen(true);
    }
  }, []);

  return (
    <>
      <main className="min-h-[100vh] bg-[#E6F4FF]">
        <div className="relative pt-16">
          <div className="absolute inset-0 z-0 min-h-screen">
            <Image
              src="/landingPage/WorldMapBG.png"
              alt="World Map Background"
              fill
              className="object-cover bg-center hidden sm:block"
            />
            <Image
              src="/landingPage/MobileWorldMapBG.png"
              alt="World Map Background"
              fill
              className="object-cover bg-center sm:hidden block"
            />
          </div>

          <div className="max-w-7xl pt-20 flex flex-col relative z-10">
            <div
              className={`${signika.className} md:w-[55%] sm:text-start text-center sm:bg-white/50 py-10 px-7 sm:rounded-r-[5rem]`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                Experience education without boundaries –
                <br />
                Turn your <span className="text-red-600">Study Abroad</span> dreams into
                <br />
                reality with MJ's <span className="text-red-600">25</span> years of expertise
              </h1>
            </div>
            <div className="mt-5 sm:mt-24 items-center justify-center px-10">
              {/* Shadcn Modal Trigger */}
              <Dialog open={isBookCounselingModalOpen} onOpenChange={setIsBookCounselingModalOpen}>
                <DialogTrigger asChild>
                  <button
                    className={`${signika.className} font-bold bg-gradient-to-b from-yellow-100 to-yellow-50 shadow-lg text-gray-800 px-8 py-3 rounded-full hover:bg-yellow-200 transition-colors text-lg`}
                  >
                    Book a Counseling session
                  </button>
                </DialogTrigger>

                {/* Shadcn Modal Content */}
                <DialogContent className="w-[90vw] rounded-lg flex items-center justify-center p-0 m-0 border-none bg-gradient-to-r from-blue-300 to-green-400 bg-transparent">
                  <DialogHeader>
                    {/* Visually Hidden Title */}
                    <DialogTitle className="sr-only hidden">Book a Counseling Session</DialogTitle>
                  </DialogHeader>
                  <BookCall />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </main>

      <main>
        <div className="h-10 bg-gradient-to-b from-[#86D5F6] to-slate-50"></div>
        <MJASolutionHub onTriggerModal={() => setIsBookCounselingModalOpen(true)} />
      </main>

      <main>
        <TravelGuide />
      </main>
    </>
  );
}
