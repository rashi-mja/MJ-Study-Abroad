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
        title: "Your Guide to Scholarships for Studying Abroad",
        description: (
            <>
                <p>
                    Studying abroad is a dream for many students, but the high cost of tuition, living expenses, and travel can often be a significant barrier. Scholarships provide an excellent opportunity to reduce financial burdens and make quality education accessible to deserving students. Whether you are applying for undergraduate, postgraduate, or PhD programs, there are numerous scholarships available based on merit, financial need, and research excellence.
                </p>
                <p>
                    At MJA.in, we guide students through the scholarship application process, ensuring they maximize their chances of receiving financial aid. This guide covers the different types of scholarships available, eligibility criteria, and tips to secure funding for your study abroad journey.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "Types of Scholarships for International Students",
        description: (
            <>
                <p>
                    There are various types of scholarships available for students planning to study abroad. Understanding these categories can help you find the best funding opportunities suited to your profile.
                </p>
                <p>
                    - **Merit-Based Scholarships**: Awarded to students with exceptional academic records, high standardized test scores (GRE, GMAT, SAT, TOEFL, IELTS), and strong extracurricular achievements.
                </p>
                <p>
                    - **Need-Based Scholarships**: Provided to students who demonstrate financial need. Universities assess a student’s financial situation before awarding these scholarships.
                </p>
                <p>
                    - **Government Scholarships**: Many governments offer scholarships to international students, such as the Fulbright Program (USA), Chevening Scholarships (UK), and Australia Awards.
                </p>
                <p>
                    - **University-Specific Scholarships**: Many universities provide internal funding opportunities for students enrolling in their programs.
                </p>
                <p>
                    - **Country-Specific Scholarships**: Offered by organizations to students from specific countries who wish to study abroad.
                </p>
                <p>
                    - **Subject-Specific Scholarships**: Awarded to students pursuing degrees in specialized fields such as STEM, business, medicine, or the arts.
                </p>
            </>
        ),
        badge: "Types of Scholarships",
        image: ""
    },
    {
        title: "Top Scholarships for Studying in the USA",
        description: (
            <>
                <p>
                    The USA is a popular destination for international students, and many universities and organizations offer generous scholarships.
                </p>
                <p>
                    - **Fulbright Scholarship**: Funded by the US government, it covers tuition, living expenses, and airfare for international students.
                </p>
                <p>
                    - **Hubert H. Humphrey Fellowship**: For professionals seeking leadership development in their respective fields.
                </p>
                <p>
                    - **AAUW International Fellowship**: Provides financial aid to women pursuing graduate studies in the USA.
                </p>
                <p>
                    - **Ivy League University Scholarships**: Universities like Harvard, Yale, and Stanford offer need-based and merit-based funding.
                </p>
                <p>
                    Many American universities also provide **assistantships**, where students can receive stipends for research or teaching work.
                </p>
            </>
        ),
        badge: "Scholarships in USA",
        image: ""
    },
    {
        title: "Scholarships for Studying in Canada",
        description: (
            <>
                <p>
                    Canada is known for its affordable education system, and various scholarship opportunities help international students cover tuition and living expenses.
                </p>
                <p>
                    - **Vanier Canada Graduate Scholarships**: Supports doctoral students with outstanding academic achievements.
                </p>
                <p>
                    - **Ontario Graduate Scholarship (OGS)**: Provides funding to international students at Ontario-based universities.
                </p>
                <p>
                    - **Lester B. Pearson Scholarship**: Fully funded undergraduate scholarship at the University of Toronto.
                </p>
                <p>
                    - **University-Specific Scholarships**: Institutions like the University of British Columbia and McGill University offer need-based financial aid.
                </p>
            </>
        ),
        badge: "Scholarships in Canada",
        image: ""
    },
    {
        title: "UK Scholarships for International Students",
        description: (
            <>
                <p>
                    The UK is home to some of the world's top universities, and students can take advantage of various scholarship opportunities.
                </p>
                <p>
                    - **Chevening Scholarships**: Fully funded by the UK government, covering tuition, travel, and living costs.
                </p>
                <p>
                    - **Commonwealth Scholarships**: Offered to students from Commonwealth countries pursuing postgraduate studies.
                </p>
                <p>
                    - **Gates Cambridge Scholarship**: Fully funds outstanding students for study at the University of Cambridge.
                </p>
                <p>
                    - **Rhodes Scholarship**: Covers full tuition and living expenses for students at the University of Oxford.
                </p>
                <p>
                    Many UK universities also offer their own merit-based scholarships for international students.
                </p>
            </>
        ),
        badge: "Scholarships in UK",
        image: ""
    },
    {
        title: "Scholarships for Australia and Europe",
        description: (
            <>
                <p>
                    Australia and European countries offer a range of scholarships to attract talented students from across the world.
                </p>
                <p>
                    - **Australia Awards**: Fully funded government scholarship for students from developing nations.
                </p>
                <p>
                    - **DAAD Scholarships (Germany)**: Supports international students pursuing higher education in Germany.
                </p>
                <p>
                    - **Erasmus+ Program (Europe)**: Provides funding for students looking to study in European countries.
                </p>
                <p>
                    - **Swiss Government Excellence Scholarships**: Offers financial aid to graduate students pursuing research in Switzerland.
                </p>
            </>
        ),
        badge: "Scholarships in Australia & Europe",
        image: ""
    },
    {
        title: "How to Apply for Scholarships – Step-by-Step Guide",
        description: (
            <>
                <p>
                    Securing a scholarship requires a strong application, including academic achievements, a compelling personal statement, and well-drafted recommendation letters. Here’s how you can increase your chances:
                </p>
                <p>
                    - **Research Early**: Start looking for scholarship opportunities at least a year before your intended program start date.
                </p>
                <p>
                    - **Prepare a Strong SOP and LORs**: Clearly articulate your academic goals and achievements.
                </p>
                <p>
                    - **Meet Eligibility Requirements**: Ensure that you fulfill the scholarship criteria before applying.
                </p>
                <p>
                    - **Submit All Documents on Time**: Most scholarships have strict deadlines, so plan accordingly.
                </p>
                <p>
                    - **Apply to Multiple Scholarships**: Do not rely on a single funding source—apply to multiple options to increase chances of success.
                </p>
            </>
        ),
        badge: "How to Apply",
        image: ""
    },
    {
        title: "Maximize Your Scholarship Opportunities with MJA.in",
        description: (
            <>
                <p>
                    Applying for scholarships can be a complex process, but with the right guidance, securing funding for your education becomes much easier. At MJA.in, our experts provide:
                </p>
                <p>
                    - **Personalized scholarship search based on your profile**.
                </p>
                <p>
                    - **Assistance with SOP and LOR writing for scholarship applications**.
                </p>
                <p>
                    - **Guidance on completing financial aid applications**.
                </p>
                <p>
                    - **Support in applying for country-specific and university scholarships**.
                </p>
                <p>
                    If you need help finding and applying for the best scholarships, contact our team today.
                </p>
                <p>
                    📞 Call us at +91 8802880181 for expert scholarship assistance.
                </p>
            </>
        ),
        badge: "Get Help",
        image: ""
    }
];
