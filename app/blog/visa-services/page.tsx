"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/tracing-beam";
import { Inter } from "next/font/google";

export const blogFont = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-blog",
});

export default function Page() {
    return (
        <TracingBeam className="px-6 mt-5">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge(blogFont.className, "text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}
const dummyContent = [
    {
        title: "Comprehensive Visa Services for Studying Abroad",
        description: (
            <>
                <p>
                    Securing a student visa is a crucial step in fulfilling your dream of studying abroad. Every country has its own visa policies, documentation requirements, and interview processes, making visa applications complex and time-sensitive. A single error can lead to delays or even rejections.
                </p>
                <p>
                    At MJA.in, we provide **end-to-end visa assistance** to ensure a smooth and hassle-free visa application process. Our team of experts helps students navigate the complex requirements, ensuring all documents are accurate and properly submitted. From **visa documentation to interview preparation**, we provide personalized support tailored to your chosen country.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Why Is Visa Assistance Important?",
        description: (
            <>
                <p>
                    The visa process can be overwhelming for students due to its detailed documentation, strict guidelines, and varying country-specific requirements. Even a minor mistake can result in rejection, delaying your academic plans.
                </p>
                <p>
                    Our visa services help students:
                </p>
                <p>
                    - Understand visa eligibility and requirements for their study destination.
                </p>
                <p>
                    - Prepare and submit error-free visa applications.
                </p>
                <p>
                    - Gather and organize essential documents such as financial proof, sponsorship letters, and academic records.
                </p>
                <p>
                    - Get expert guidance on visa interviews and mock interview sessions.
                </p>
                <p>
                    - Stay updated on visa processing timelines and changes in immigration policies.
                </p>
            </>
        ),
        badge: "Importance of Visa Assistance",
        image: ""
    },
    {
        title: "Types of Student Visas We Assist With",
        description: (
            <>
                <p>
                    Each country offers different types of student visas depending on the program duration, degree type, and institution. Here are the most common student visas we assist with:
                </p>
                <p>
                    - **USA – F-1 Visa**: Required for students enrolling in universities and colleges in the United States.
                </p>
                <p>
                    - **Canada – Study Permit**: International students need this permit along with a Temporary Resident Visa (TRV) or an eTA.
                </p>
                <p>
                    - **UK – Tier 4 (Student) Visa**: Issued for students pursuing higher education in the United Kingdom.
                </p>
                <p>
                    - **Australia – Subclass 500**: The student visa for full-time courses in Australian institutions.
                </p>
                <p>
                    - **Schengen Visa (Europe)**: Required for studying in European countries such as Germany, France, and the Netherlands.
                </p>
                <p>
                    - **New Zealand – Student Visa**: For students planning to study in New Zealand for longer than three months.
                </p>
                <p>
                    Our expert team ensures you apply for the right visa category and meet all the necessary conditions for approval.
                </p>
            </>
        ),
        badge: "Types of Student Visas",
        image: ""
    },
    {
        title: "Step-by-Step Visa Application Process",
        description: (
            <>
                <p>
                    The visa application process involves multiple stages, and following the correct sequence can increase the chances of approval. Here’s a step-by-step breakdown of the student visa process:
                </p>
                <p>
                    **1. Receive University Admission Letter**
                    Before applying for a student visa, you must have an official offer letter from a recognized university.
                </p>
                <p>
                    **2. Arrange Financial Proof**
                    Many countries require students to show sufficient funds to cover tuition and living expenses. This includes bank statements, sponsor letters, or scholarship proof.
                </p>
                <p>
                    **3. Complete Visa Application Form**
                    Each country has a specific visa application form that must be filled out correctly with accurate details.
                </p>
                <p>
                    **4. Pay Visa Fees**
                    Visa application fees must be paid as per the respective country’s requirements before submitting the application.
                </p>
                <p>
                    **5. Attend Biometrics and Medical Examination**
                    Some countries require biometric data collection and a medical examination to verify your health status.
                </p>
                <p>
                    **6. Schedule and Prepare for the Visa Interview**
                    The visa interview is a crucial step in countries like the USA and requires thorough preparation. Our experts provide personalized interview training to help students respond confidently.
                </p>
                <p>
                    **7. Visa Approval and Travel Planning**
                    Once approved, students receive their visa and can start making travel arrangements, including flight bookings and accommodation.
                </p>
            </>
        ),
        badge: "Visa Process",
        image: ""
    },
    {
        title: "Common Reasons for Visa Rejections & How to Avoid Them",
        description: (
            <>
                <p>
                    Many students face visa rejections due to avoidable mistakes. Understanding the common reasons can help improve your chances of success.
                </p>
                <p>
                    - **Incomplete Documentation**: Missing financial statements, incorrect forms, or missing university admission letters can result in rejection.
                </p>
                <p>
                    - **Lack of Funds**: If the student cannot provide sufficient proof of financial stability, the visa may be denied.
                </p>
                <p>
                    - **Weak Visa Interview Performance**: Nervousness, unclear answers, or inconsistent statements in the interview can raise red flags.
                </p>
                <p>
                    - **Inconsistent Academic Records**: A poor academic history without a strong justification may lead to visa denials.
                </p>
                <p>
                    - **Intent to Stay Permanently**: Students must demonstrate a clear intent to return to their home country after completing their studies.
                </p>
                <p>
                    Our visa experts help students avoid these pitfalls by providing professional guidance at every step.
                </p>
            </>
        ),
        badge: "Avoiding Visa Rejection",
        image: ""
    },
    {
        title: "Visa Interview Preparation – Expert Tips",
        description: (
            <>
                <p>
                    The visa interview is a key step for countries like the USA, UK, and Canada. A well-prepared interview can increase your approval chances significantly.
                </p>
                <p>
                    - **Know Your Course and University**: Be ready to explain why you chose the university and how it aligns with your career goals.
                </p>
                <p>
                    - **Be Clear About Finances**: Have a solid understanding of your tuition fees, living expenses, and source of funding.
                </p>
                <p>
                    - **Demonstrate Ties to Your Home Country**: Show strong reasons why you intend to return home after your studies.
                </p>
                <p>
                    - **Answer Confidently and Honestly**: Maintain a professional attitude and avoid providing misleading information.
                </p>
                <p>
                    At MJA.in, we conduct mock visa interviews to help students feel prepared and confident for their official interview.
                </p>
            </>
        ),
        badge: "Visa Interview Tips",
        image: ""
    },
    {
        title: "Get Expert Visa Assistance from MJA.in",
        description: (
            <>
                <p>
                    With years of experience in study abroad consulting, MJA.in has helped thousands of students secure their visas successfully. Our dedicated visa services include:
                </p>
                <p>
                    - **Personalized visa consultation based on your study destination**.
                </p>
                <p>
                    - **Comprehensive document review and error-free application submission**.
                </p>
                <p>
                    - **Financial proof guidance and sponsorship letter drafting**.
                </p>
                <p>
                    - **Mock visa interviews to improve confidence and preparation**.
                </p>
                <p>
                    - **Latest visa updates and guidance on immigration rules**.
                </p>
                <p>
                    Need visa assistance? Contact us today!
                </p>
                <p>
                    📞 Call us at +91 8802880181 to speak with our visa experts.
                </p>
            </>
        ),
        badge: "Get Help",
        image: ""
    }
];

