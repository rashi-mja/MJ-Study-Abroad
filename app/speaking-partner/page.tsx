import type { Metadata } from "next";
import SpeakingSectionComponent from "./SpeakingSectionComponent";

export const metadata: Metadata = {
    title: "Study IELTS Together | Global Student Study Platform",
    description:
        "Connect and study with IELTS students worldwide for free! Join the largest global student community online and stay motivated.",
    keywords: "IELTS speaking partner, Find ielts speaking partner, IELTS Study Together, IELTS study buddy",
    openGraph: {
        title: "Study IELTS Together | Global Student Study Platform",
        description:
            "Connect and study with IELTS students worldwide for free! Join the largest global student community online and stay motivated.",
        url: "https://ieltsgoglobal.com/speaking-partner",
        images: [
            {
                url: "/video-confrencing-bg.jpg",
                width: 800,
                height: 600,
                alt: "Study Together Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Study IELTS Together | Global Student Study Platform",
        description:
            "Connect and study with IELTS students worldwide for free! Join the largest global student community online and stay motivated.",
        images: ["/video-confrencing-bg.jpg"], // Provide your image URL
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};

export default function Page() {
    return (
        <>
            <SpeakingSectionComponent />
        </>
    )
}

