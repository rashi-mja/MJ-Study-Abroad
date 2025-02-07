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
        title: "Enhance Your English with Visual Vocabulary – A Unique Learning Approach",
        description: (
            <>
                <p>
                    Vocabulary is the foundation of mastering any language, and for students preparing for exams like **GRE, TOEFL, IELTS, and GMAT**, a strong vocabulary can make a significant difference in performance. However, traditional methods of memorizing word lists can be dull and ineffective. That’s where **Visual Vocabulary by MJA.in** comes in – a unique approach to learning words through images and contextual storytelling.
                </p>
                <p>
                    The **Visual Vocabulary program** helps students retain words longer by associating them with pictures, making learning more engaging and efficient. This scientifically backed method ensures that learners grasp meanings effortlessly and recall words instantly during exams or real-world usage.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1477865300989-86ba6d4adcab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Why Choose Visual Vocabulary for Learning New Words?",
        description: (
            <>
                <p>
                    Traditional vocabulary learning relies on repetitive memorization of word lists, which often leads to poor retention. **Visual Vocabulary**, on the other hand, taps into the power of visual memory, which is proven to enhance long-term recall. When words are linked with images, students can recall their meanings faster, improving both comprehension and fluency.
                </p>
                <p>
                    The Visual Vocabulary method is especially beneficial for:
                </p>
                <p>
                    - Students preparing for standardized tests like **GRE, TOEFL, and IELTS**.
                </p>
                <p>
                    - Professionals looking to improve their business communication skills.
                </p>
                <p>
                    - Anyone aiming to enhance their English fluency with an effective and fun learning method.
                </p>
            </>
        ),
        badge: "Why Visual Vocabulary?",
        image: ""
    },
    {
        title: "How Does Visual Vocabulary Work?",
        description: (
            <>
                <p>
                    **MJA.in’s Visual Vocabulary program** incorporates a step-by-step learning process that makes vocabulary building effortless and effective. The course includes:
                </p>
                <p>
                    - **Image-Based Learning**: Words are taught through meaningful visuals, making it easier to remember their definitions.
                </p>
                <p>
                    - **Contextual Usage**: Each word is explained with real-world examples and sentences to help learners understand its proper usage.
                </p>
                <p>
                    - **Memory Tricks & Mnemonics**: Smart memory techniques are integrated to reinforce learning.
                </p>
                <p>
                    - **Interactive Exercises**: Engaging quizzes and activities ensure that learners actively recall words and apply them effectively.
                </p>
                <p>
                    This structured method not only increases retention but also enhances students' ability to use words accurately in speaking and writing.
                </p>
            </>
        ),
        badge: "How It Works",
        image: ""
    },
    {
        title: "Who Can Benefit from the Visual Vocabulary Course?",
        description: (
            <>
                <p>
                    **This course is ideal for:**
                </p>
                <p>
                    - **GRE, TOEFL, and IELTS Aspirants**: A strong vocabulary is crucial for Reading Comprehension, Writing, and Speaking sections.
                </p>
                <p>
                    - **Students Preparing for Competitive Exams**: Those appearing for SAT, CAT, or GMAT will find this method effective.
                </p>
                <p>
                    - **Professionals and Job Seekers**: Improve communication skills for workplace and interview success.
                </p>
                <p>
                    - **Anyone Who Loves Learning English**: If you're passionate about enhancing your English fluency, this course is perfect for you.
                </p>
            </>
        ),
        badge: "Who Should Join?",
        image: ""
    },
    {
        title: "Course Pricing & Enrollment Details",
        description: (
            <>
                <p>
                    The **Visual Vocabulary program by MJA.in** is designed to be accessible to all learners. The course includes comprehensive material, interactive exercises, and expert guidance to ensure the best learning experience.
                </p>
                <p>
                    To know more about **pricing, batch details, and enrollment**, contact our experts today at:
                </p>
                <p>
                    📞 **Call Now: +91 8802880181**
                </p>
                <p>
                    Whether you're a student preparing for exams or a professional looking to refine your vocabulary skills, the **Visual Vocabulary course** is your gateway to mastering English effortlessly.
                </p>
            </>
        ),
        badge: "Pricing & Enrollment",
        image: ""
    },
    {
        title: "Start Your Vocabulary Learning Journey Today!",
        description: (
            <>
                <p>
                    A strong vocabulary opens doors to better communication, academic success, and career growth. With **Visual Vocabulary by MJA.in**, you no longer need to struggle with traditional memorization techniques. Instead, enjoy a fun, visual, and highly effective way to learn new words.
                </p>
                <p>
                    Don’t miss out on the opportunity to **boost your vocabulary retention and confidence**. Get started today!
                </p>
                <p>
                    📞 **For more details, call +91 8802880181**
                </p>
            </>
        ),
        badge: "Final Thoughts",
        image: ""
    }
];
