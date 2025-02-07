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
        title: "Supporting Services for Your Study Abroad Journey",
        description: (
            <>
                <p>
                    Planning to study abroad involves multiple steps beyond just securing admission and a visa. From application assistance to pre-departure preparation, students require various supporting services to ensure a smooth transition to their dream university. At MJA.in, we offer a range of **supporting services** that cater to every stage of your study abroad journey.
                </p>
                <p>
                    Our expert guidance covers university applications, SOP and LOR writing, scholarship assistance, education loans, accommodation support, and much more. With MJA.in, students receive **end-to-end assistance** to make their overseas education experience stress-free.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "University Shortlisting and Admissions Assistance",
        description: (
            <>
                <p>
                    Selecting the right university is a critical decision that impacts both your academic and professional future. Our **university shortlisting services** help students choose the best institutions based on their profile, career goals, and budget.
                </p>
                <p>
                    - Personalized university recommendations based on academic background and test scores.
                </p>
                <p>
                    - Assistance in filling out applications and meeting university deadlines.
                </p>
                <p>
                    - Guidance on university rankings, course structures, and career prospects.
                </p>
                <p>
                    Our expert team ensures that students apply to the right mix of **ambitious, moderate, and safe universities** to maximize their chances of admission.
                </p>
            </>
        ),
        badge: "University Admissions",
        image: ""
    },
    {
        title: "SOP and LOR Editing Services",
        description: (
            <>
                <p>
                    A well-crafted **Statement of Purpose (SOP)** and strong **Letters of Recommendation (LORs)** are essential for securing admission to top universities. Our professional editing services help students refine their application documents to make them impactful and error-free.
                </p>
                <p>
                    - Personalized SOP editing to highlight academic and career aspirations.
                </p>
                <p>
                    - Structuring LORs to reflect a strong recommendation from professors and employers.
                </p>
                <p>
                    - Grammar, clarity, and plagiarism checks to enhance document credibility.
                </p>
                <p>
                    With our expert editing, students submit **high-quality applications that stand out** in the admissions process.
                </p>
            </>
        ),
        badge: "SOP & LOR Editing",
        image: ""
    },
    {
        title: "Scholarship Assistance – Get Funded for Your Education",
        description: (
            <>
                <p>
                    Scholarships can significantly reduce the financial burden of studying abroad. At MJA.in, we assist students in finding and applying for **merit-based, need-based, and country-specific scholarships**.
                </p>
                <p>
                    - Identifying scholarship opportunities based on academic and extracurricular achievements.
                </p>
                <p>
                    - Guidance on writing compelling scholarship essays and applications.
                </p>
                <p>
                    - Assistance in securing financial aid from universities and external organizations.
                </p>
                <p>
                    Our team helps students **maximize their chances of receiving funding**, making overseas education more affordable.
                </p>
            </>
        ),
        badge: "Scholarship Assistance",
        image: ""
    },
    {
        title: "Education Loan Guidance – Secure the Best Loan Options",
        description: (
            <>
                <p>
                    Many students require financial assistance to fund their education abroad. Our **education loan support** ensures students get access to low-interest loans with easy repayment options.
                </p>
                <p>
                    - Assistance in choosing between **secured and unsecured loans**.
                </p>
                <p>
                    - Comparing loan offers from top banks and NBFCs.
                </p>
                <p>
                    - Guidance on required documents, co-applicant criteria, and repayment terms.
                </p>
                <p>
                    - Fast-tracked loan processing with minimal paperwork.
                </p>
                <p>
                    We help students secure **education loans at the best possible rates**, ensuring financial constraints do not hinder their dreams.
                </p>
            </>
        ),
        badge: "Education Loan Support",
        image: ""
    },
    {
        title: "Visa Assistance – Get Your Student Visa Without Hassle",
        description: (
            <>
                <p>
                    Obtaining a student visa is one of the most critical steps in studying abroad. Different countries have different visa policies, and our visa experts provide **step-by-step guidance** to ensure a successful application.
                </p>
                <p>
                    - Assistance in **visa documentation and application submission**.
                </p>
                <p>
                    - Guidance on visa interview preparation with mock interview sessions.
                </p>
                <p>
                    - Information on financial proof, sponsorship letters, and travel insurance.
                </p>
                <p>
                    Our team ensures that students **avoid common visa rejection mistakes** and receive their student visas on time.
                </p>
            </>
        ),
        badge: "Visa Assistance",
        image: ""
    },
    {
        title: "Accommodation and Housing Support",
        description: (
            <>
                <p>
                    Finding a safe and comfortable place to live is essential for international students. We help students secure affordable accommodation near their universities.
                </p>
                <p>
                    - Assistance in booking **on-campus and off-campus housing**.
                </p>
                <p>
                    - Connecting students with **verified rental apartments and homestays**.
                </p>
                <p>
                    - Guidance on student-friendly locations, transport, and essential amenities.
                </p>
                <p>
                    Our housing support services ensure students find the **best living options that suit their budget and lifestyle**.
                </p>
            </>
        ),
        badge: "Accommodation Support",
        image: ""
    },
    {
        title: "Pre-Departure and Post-Arrival Assistance",
        description: (
            <>
                <p>
                    Preparing for life in a new country can be overwhelming. Our **pre-departure guidance** covers all essential aspects of student life abroad.
                </p>
                <p>
                    - Information on **travel arrangements, packing checklists, and currency exchange**.
                </p>
                <p>
                    - Connecting students with **other admitted students** traveling to the same country.
                </p>
                <p>
                    - Guidance on **health insurance, part-time work options, and cultural adaptation**.
                </p>
                <p>
                    Our post-arrival support ensures students settle in comfortably and adjust to their new academic environment.
                </p>
            </>
        ),
        badge: "Pre-Departure & Post-Arrival Support",
        image: ""
    },
    {
        title: "Career Guidance and Job Search Assistance",
        description: (
            <>
                <p>
                    Finding a part-time job or planning a post-graduation career is an important aspect of studying abroad. We provide expert guidance on **internship opportunities, work permits, and full-time job placements**.
                </p>
                <p>
                    - Resume and LinkedIn profile optimization.
                </p>
                <p>
                    - Guidance on **internship and job search strategies**.
                </p>
                <p>
                    - Information on **work visa policies and post-study work permits**.
                </p>
                <p>
                    Our career services ensure that students make the most of their education and build a strong professional future.
                </p>
            </>
        ),
        badge: "Career Guidance & Job Assistance",
        image: ""
    },
    {
        title: "Get Expert Support for Your Study Abroad Journey",
        description: (
            <>
                <p>
                    Studying abroad is a life-changing experience, and having the right support can make all the difference. At MJA.in, we provide **end-to-end services** to ensure students successfully navigate every step of their study abroad journey.
                </p>
                <p>
                    📞 Call us at **+91 8802880181** for personalized assistance with your study abroad plans.
                </p>
                <p>
                    Our expert counselors are ready to help you achieve your academic and career goals!
                </p>
            </>
        ),
        badge: "Contact Us",
        image: ""
    }
];
