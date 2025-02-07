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
        title: "SOP and LOR Editing Services – Perfect Your Study Abroad Application",
        description: (
            <>
                <p>
                    A well-crafted Statement of Purpose (SOP) and strong Letters of Recommendation (LORs) play a crucial role in securing admission to top universities. These documents provide the admissions committee with insights into your academic background, professional experiences, and future goals. However, many students struggle with structuring their SOP or ensuring their LORs are impactful and well-written.
                </p>
                <p>
                    At MJA.in, we specialize in editing and refining SOPs and LORs to make them stand out. Our expert editors ensure that your application documents are clear, concise, and aligned with the expectations of top universities. Whether you need minor refinements or complete restructuring, our team is here to help you create compelling, well-polished documents.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "Why is an SOP Important for University Admissions?",
        description: (
            <>
                <p>
                    The Statement of Purpose is one of the most critical components of a university application. It tells your personal story, academic interests, career aspirations, and why you are the right fit for the program. A strong SOP can compensate for average test scores or academic records by showcasing your motivation, passion, and unique strengths.
                </p>
                <p>
                    Admissions officers look for originality, clarity, and a well-structured narrative in an SOP. A generic or poorly written SOP can weaken an otherwise strong application. This is where professional editing ensures that your SOP is engaging, persuasive, and free of grammatical errors.
                </p>
            </>
        ),
        badge: "Importance of SOP",
        image: ""
    },
    {
        title: "What Makes a Strong SOP?",
        description: (
            <>
                <p>
                    A compelling SOP should be well-structured, with a clear introduction, a logical flow of ideas, and a strong conclusion. It should highlight your academic journey, professional experiences, and career goals in a way that resonates with the admissions committee.
                </p>
                <p>
                    A strong SOP should:
                </p>
                <p>
                    - Provide a clear reason for choosing the program and university.
                </p>
                <p>
                    - Showcase relevant academic and professional experiences.
                </p>
                <p>
                    - Highlight long-term career goals and how the program will help achieve them.
                </p>
                <p>
                    - Be free of clichés and generic statements.
                </p>
                <p>
                    - Demonstrate originality, confidence, and enthusiasm.
                </p>
            </>
        ),
        badge: "SOP Structure",
        image: ""
    },
    {
        title: "Why are LORs Crucial for Your Application?",
        description: (
            <>
                <p>
                    Letters of Recommendation provide a third-party perspective on your academic abilities, character, and professional accomplishments. Universities rely on LORs to gain insights into how professors, mentors, or employers perceive you.
                </p>
                <p>
                    A strong LOR should:
                </p>
                <p>
                    - Be written by someone who knows you well academically or professionally.
                </p>
                <p>
                    - Highlight your strengths, achievements, and contributions.
                </p>
                <p>
                    - Provide specific examples rather than vague praise.
                </p>
                <p>
                    - Be structured properly, with a compelling introduction, body, and conclusion.
                </p>
                <p>
                    Well-edited LORs ensure that they align with your SOP and strengthen your application rather than repeating generic information.
                </p>
            </>
        ),
        badge: "LOR Importance",
        image: ""
    },
    {
        title: "How MJA.in Enhances Your SOP and LORs",
        description: (
            <>
                <p>
                    At MJA.in, our experts analyze and refine your SOP and LORs to make them impactful. Our editing services include:
                </p>
                <p>
                    - **Content Enhancement**: Ensuring clarity, logical flow, and conciseness.
                </p>
                <p>
                    - **Grammar and Structure Check**: Correcting grammar, punctuation, and formatting issues.
                </p>
                <p>
                    - **Personalization**: Ensuring that your SOP and LORs reflect your unique profile.
                </p>
                <p>
                    - **University-Specific Customization**: Tailoring your SOP and LORs to fit the requirements of each university.
                </p>
                <p>
                    Whether you need a minor revision or a complete rewrite, we help make your application documents stand out.
                </p>
            </>
        ),
        badge: "Our Editing Process",
        image: ""
    },
    {
        title: "Common Mistakes in SOP and LORs",
        description: (
            <>
                <p>
                    Many applicants make mistakes that weaken their SOP and LORs. These include:
                </p>
                <p>
                    - Writing an overly generic SOP that lacks personal insights.
                </p>
                <p>
                    - Using excessive technical jargon without explanation.
                </p>
                <p>
                    - Submitting LORs that repeat information instead of providing fresh perspectives.
                </p>
                <p>
                    - Ignoring university-specific requirements in their SOP.
                </p>
                <p>
                    Our editing services ensure that these common errors are eliminated, making your application stand out.
                </p>
            </>
        ),
        badge: "Mistakes to Avoid",
        image: ""
    },
    {
        title: "Success Stories – How Our Editing Services Helped Students",
        description: (
            <>
                <p>
                    Over the years, MJA.in has helped thousands of students secure admission to top universities through well-crafted SOPs and LORs. Many of our students have received admits to Ivy League institutions and top-ranked universities in the US, Canada, UK, and Europe.
                </p>
                <p>
                    Our team has worked with students from diverse backgrounds, helping them craft narratives that highlight their strengths and aspirations. Whether you’re an engineering student, a business professional, or a research scholar, we ensure that your SOP and LORs reflect your academic and career goals effectively.
                </p>
            </>
        ),
        badge: "Success Stories",
        image: ""
    },
    {
        title: "Get Started with Our SOP and LOR Editing Services",
        description: (
            <>
                <p>
                    A compelling SOP and well-structured LORs can be the difference between acceptance and rejection. With expert guidance, you can present your application in the best possible light.
                </p>
                <p>
                    If you're ready to perfect your SOP and LORs, reach out to our team at MJA.in. We provide personalized editing services tailored to your academic and professional background.
                </p>
                <p>
                    📞 Call us today at +91 8802880181 to get started.
                </p>
            </>
        ),
        badge: "Get Started",
        image: ""
    }
];
