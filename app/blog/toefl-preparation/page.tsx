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
        title: "Comprehensive Guide to TOEFL Preparation",
        description: (
            <>
                <p>
                    The Test of English as a Foreign Language (TOEFL) is one of the most widely accepted standardized tests for assessing English proficiency, primarily required for admission into universities across the United States, Canada, and other English-speaking countries. It evaluates a candidate's ability to read, write, listen, and speak in English in an academic setting. Scoring well in the TOEFL can open doors to better educational opportunities, scholarships, and even work prospects in some cases.
                </p>
                <p>
                    Preparing for the TOEFL requires a well-structured approach that involves understanding the test format, honing language skills, and practicing strategically. This guide provides insights into how to effectively prepare for each section of the TOEFL and maximize your score.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Understanding the TOEFL Exam Format",
        description: (
            <>
                <p>
                    The TOEFL iBT test consists of four sections: Reading, Listening, Speaking, and Writing. Each section evaluates different aspects of English language proficiency, and scores range from 0 to 120 in total. The test is designed to measure how well a student can use English in an academic environment.
                </p>
                <p>
                    The Reading section comprises academic passages with multiple-choice questions that assess comprehension, vocabulary, and inference skills. The Listening section evaluates the ability to understand spoken English in conversations and lectures. The Speaking section consists of four tasks that test pronunciation, fluency, and coherence in responses. The Writing section includes two tasks that require essay-style responses, assessing grammar, coherence, and argument strength.
                </p>
                <p>
                    Since the TOEFL is an internet-based test (iBT), test-takers should be comfortable with typing essays, listening to digital audio recordings, and responding through a microphone. Familiarity with the test format can greatly enhance performance on exam day.
                </p>
            </>
        ),
        badge: "TOEFL Format",
        image: ""
    },
    {
        title: "Excelling in the Reading Section",
        description: (
            <>
                <p>
                    The TOEFL Reading section tests your ability to comprehend and analyze academic texts. The passages are often sourced from university-level textbooks, covering subjects like history, science, and humanities. Test-takers must develop the ability to identify main ideas, infer meanings, and understand vocabulary in context.
                </p>
                <p>
                    A strong reading habit is key to excelling in this section. Regularly reading academic articles from sources such as National Geographic, The New York Times, and BBC News can help improve comprehension speed and vocabulary. Additionally, practicing TOEFL reading questions will enhance your ability to tackle factual, inference-based, and vocabulary questions efficiently.
                </p>
            </>
        ),
        badge: "Reading Section",
        image: ""
    },
    {
        title: "Mastering the Listening Section",
        description: (
            <>
                <p>
                    The TOEFL Listening section assesses your ability to understand spoken English in academic conversations and lectures. The section includes multiple types of questions, such as understanding details, recognizing a speaker’s attitude, and inferring meaning.
                </p>
                <p>
                    To improve listening skills, it is beneficial to expose yourself to various English accents and speech patterns. Watching English documentaries, university lectures, and TED Talks can train your ears to recognize different intonations and key information quickly. Taking notes while listening to audio clips will also help in retaining information and answering questions more effectively.
                </p>
            </>
        ),
        badge: "Listening Section",
        image: ""
    },
    {
        title: "Strategies for the Speaking Section",
        description: (
            <>
                <p>
                    The TOEFL Speaking section evaluates how well you can express yourself in English under timed conditions. It consists of independent and integrated tasks, requiring you to speak on familiar topics and respond to academic materials.
                </p>
                <p>
                    To perform well, it is essential to develop fluency and clarity in speech. Practicing speaking English daily, recording responses, and analyzing pronunciation can significantly enhance performance. Using structured templates for answering questions can also provide coherence to responses. Additionally, using platforms like Duolingo English Practice or language exchange apps can provide real-time speaking practice.
                </p>
            </>
        ),
        badge: "Speaking Section",
        image: ""
    },
    {
        title: "Cracking the Writing Section",
        description: (
            <>
                <p>
                    The TOEFL Writing section consists of two tasks: an Integrated Task and an Independent Task. The Integrated Task involves reading a passage, listening to a lecture, and then writing a response summarizing and comparing key points. The Independent Task requires test-takers to express their opinion on a given topic, supporting their argument with examples.
                </p>
                <p>
                    To excel in writing, practicing structured essays using templates can be beneficial. A good essay should have a clear thesis, well-organized paragraphs, and strong supporting arguments. Additionally, grammar and coherence play a vital role in achieving a high score, making grammar revision an essential part of preparation.
                </p>
            </>
        ),
        badge: "Writing Section",
        image: ""
    },
    {
        title: "Creating an Effective Study Plan",
        description: (
            <>
                <p>
                    Developing a study plan is crucial for TOEFL success. Depending on your proficiency level, you may need anywhere from 4 to 12 weeks of preparation. A balanced study plan should include vocabulary building, reading academic content, listening to English discussions, practicing speaking exercises, and writing structured essays.
                </p>
                <p>
                    Setting daily or weekly targets and taking full-length practice tests can help assess progress. Practicing under timed conditions ensures familiarity with the test format and reduces stress on exam day. Leveraging official TOEFL resources and practice tests from ETS can provide an edge in preparation.
                </p>
            </>
        ),
        badge: "Study Plan",
        image: ""
    },
    {
        title: "Exam Day Strategies for Success",
        description: (
            <>
                <p>
                    On exam day, managing time efficiently is key to maximizing scores. Ensuring proper rest before the test and staying hydrated can improve concentration. Familiarizing yourself with the test center or home test setup can minimize last-minute stress.
                </p>
                <p>
                    During the exam, staying calm and focused is essential. For the Listening section, taking concise notes can aid in recalling details. For the Writing section, outlining responses before writing can improve clarity. Effective time management ensures that all sections are completed within the given time.
                </p>
            </>
        ),
        badge: "Test-Day Tips",
        image: ""
    },
    {
        title: "Final Thoughts: Achieving a High TOEFL Score",
        description: (
            <>
                <p>
                    Scoring well in the TOEFL requires consistent practice, strong time management skills, and effective strategies. By focusing on individual sections and addressing weaknesses, test-takers can significantly improve their performance.
                </p>
                <p>
                    At MJA.in, students receive expert coaching, personalized strategies, and access to extensive practice materials to help them achieve their target TOEFL scores. With the right preparation, success in the TOEFL is within reach.
                </p>
            </>
        ),
        badge: "Final Thoughts",
        image: ""
    }
];
