"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/tracing-beam";
import { Inter } from "next/font/google";

const blogFont = Inter({
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
        title: "Comprehensive Guide to University Shortlisting and Admissions",
        description: (
            <>
                <p>
                    Applying to universities abroad is an exciting but challenging process. Choosing the right university can impact not only your academic journey but also your career prospects. **University shortlisting and admissions** require a strategic approach, considering factors such as rankings, location, program reputation, financial aid, and career opportunities.
                </p>
                <p>
                    At **MJA.in**, we simplify the process by helping students select the best universities based on their academic profile, career aspirations, and financial considerations. Whether you're applying for **undergraduate, postgraduate, or PhD programs**, our expert counselors guide you through every step to maximize your chances of admission.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "Why is University Shortlisting Important?",
        description: (
            <>
                <p>
                    With thousands of universities worldwide, selecting the right institution is a **critical step in your study abroad journey**. A well-planned shortlist ensures that you apply to universities that align with your goals, increasing your chances of admission and scholarship opportunities.
                </p>
                <p>
                    Factors to consider while shortlisting universities include:
                </p>
                <p>
                    - **University Rankings & Reputation**: Consider rankings from **QS World Rankings, Times Higher Education, and Webometrics** to evaluate a university’s global standing.
                </p>
                <p>
                    - **Program Curriculum & Faculty**: Research the courses offered, faculty profiles, and industry collaborations.
                </p>
                <p>
                    - **Cost & Scholarships**: Compare tuition fees, living expenses, and available scholarships to ensure financial feasibility.
                </p>
                <p>
                    - **Career Prospects & Job Placements**: Look at graduate employability rates and internship opportunities.
                </p>
                <p>
                    - **Location & Campus Life**: Evaluate safety, weather, culture, and student life in different countries.
                </p>
            </>
        ),
        badge: "Importance of Shortlisting",
        image: ""
    },
    {
        title: "How MJA.in Helps You Shortlist the Best Universities",
        description: (
            <>
                <p>
                    At **MJA.in**, we take a data-driven approach to university shortlisting. Our counselors analyze your academic background, test scores (GRE, GMAT, TOEFL, IELTS), extracurricular achievements, and career goals to curate a **personalized university list**.
                </p>
                <p>
                    Our shortlisting process includes:
                </p>
                <p>
                    - **Profile Evaluation**: Understanding your strengths, weaknesses, and aspirations.
                </p>
                <p>
                    - **University Categorization**: Dividing universities into three tiers: **Ambitious, Moderate, and Safe** choices.
                </p>
                <p>
                    - **Scholarship Assistance**: Identifying institutions offering financial aid and funding options.
                </p>
                <p>
                    - **Guidance on Course Selection**: Recommending courses that align with industry trends and your career interests.
                </p>
                <p>
                    With our expertise, students secure admissions in top universities across the **USA, Canada, UK, Europe, and Australia**.
                </p>
            </>
        ),
        badge: "Our Process",
        image: ""
    },
    {
        title: "Step-by-Step Guide to University Admissions",
        description: (
            <>
                <p>
                    Once you’ve shortlisted universities, the next step is **securing admission**. The application process varies by country and university, but here’s a general roadmap to follow:
                </p>
                <p>
                    **1. Prepare for Standardized Tests**
                    Many universities require standardized test scores like **GRE, GMAT, SAT, TOEFL, and IELTS**. Plan and take these tests well in advance.
                </p>
                <p>
                    **2. Build a Strong Application**
                    A compelling application includes a **Statement of Purpose (SOP), Letters of Recommendation (LORs), resume, and transcripts**. Each document must be well-crafted to highlight your academic and professional achievements.
                </p>
                <p>
                    **3. Submit Applications on Time**
                    Different universities have different deadlines (Early Action, Regular Decision, Rolling Admissions). Keeping track of deadlines ensures timely submission.
                </p>
                <p>
                    **4. Attend Interviews (If Required)**
                    Some universities, especially in the US and UK, require **online or in-person interviews**. Our counselors provide interview preparation sessions to help students present themselves confidently.
                </p>
                <p>
                    **5. Apply for Scholarships & Financial Aid**
                    Scholarships and grants significantly reduce education costs. We assist students in applying for **merit-based and need-based scholarships**.
                </p>
                <p>
                    **6. Get Visa Assistance & Pre-Departure Guidance**
                    Once admitted, the final step is applying for a **student visa**. We help students with visa documentation, mock interviews, and pre-departure briefings.
                </p>
            </>
        ),
        badge: "Admissions Process",
        image: ""
    },
    {
        title: "Top Study Destinations and Popular Universities",
        description: (
            <>
                <p>
                    Choosing the right country is as important as selecting the right university. Here are some of the most popular study destinations and their **top-ranked universities**:
                </p>
                <p>
                    **USA**
                    - Massachusetts Institute of Technology (MIT)
                    - Stanford University
                    - Harvard University
                </p>
                <p>
                    **Canada**
                    - University of Toronto
                    - University of British Columbia
                    - McGill University
                </p>
                <p>
                    **UK**
                    - University of Oxford
                    - University of Cambridge
                    - Imperial College London
                </p>
                <p>
                    **Australia**
                    - University of Melbourne
                    - Australian National University (ANU)
                    - University of Sydney
                </p>
                <p>
                    **Europe**
                    - ETH Zurich (Switzerland)
                    - Technical University of Munich (Germany)
                    - University of Amsterdam (Netherlands)
                </p>
                <p>
                    Each country offers **unique advantages**, including **post-study work visas, scholarship opportunities, and career prospects**.
                </p>
            </>
        ),
        badge: "Top Universities",
        image: ""
    },
    {
        title: "Why Choose MJA.in for University Shortlisting and Admissions?",
        description: (
            <>
                <p>
                    At **MJA.in**, we provide **end-to-end admission guidance**, ensuring students make informed decisions and secure admissions into their dream universities. Our services include:
                </p>
                <p>
                    - **Personalized University Shortlisting** based on academic and career goals.
                    - **Expert Application Review**, ensuring SOPs and LORs are impactful.
                    - **Scholarship & Funding Assistance** to help reduce financial burdens.
                    - **Visa Guidance** for smooth travel and transition abroad.
                    - **Pre-Departure Assistance**, covering accommodation, health insurance, and cultural adaptation tips.
                </p>
                <p>
                    Our success stories include students securing **Ivy League admissions, top scholarships, and high visa approval rates**.
                </p>
            </>
        ),
        badge: "Why MJA.in?",
        image: ""
    },
    {
        title: "Get Started on Your Study Abroad Journey Today!",
        description: (
            <>
                <p>
                    The journey to studying at a **top university abroad** begins with **smart planning and expert guidance**. Whether you need help with **university shortlisting, SOP writing, scholarship applications, or visa assistance**, **MJA.in is here to help**.
                </p>
                <p>
                    📞 **Call us today at +91 8802880181** to get a personalized consultation with our admissions experts.
                </p>
                <p>
                    Let’s turn your study abroad dream into a reality!
                </p>
            </>
        ),
        badge: "Get Started",
        image: ""
    }
];
