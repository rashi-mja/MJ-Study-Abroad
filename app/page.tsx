
import LandingPage from "@/components/LandingPage/LandingPageComponent";
import type { Metadata } from "next";

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

export default function Page() {
  return (
    <>
      <LandingPage />
    </>
  )
}
