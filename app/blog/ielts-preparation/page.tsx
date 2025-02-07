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
        title: "Complete Guide to IELTS Preparation",
        description: (
            <>
                <p>
                    The International English Language Testing System (IELTS) is a globally recognized English proficiency test required for admission to universities, job applications, and immigration purposes in English-speaking countries. A high IELTS score can enhance educational and career prospects, making structured preparation essential.
                </p>
                <p>
                    IELTS assesses four key skills: Listening, Reading, Writing, and Speaking. Understanding the test format, using strategic study techniques, and practicing regularly can significantly improve performance. This guide provides detailed insights on preparing effectively for each section of the IELTS exam.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1660927059794-152d06e11016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Understanding the IELTS Exam Format",
        description: (
            <>
                <p>
                    The IELTS test consists of four sections: Listening, Reading, Writing, and Speaking. The test is available in two formats: Academic and General Training. The Academic version is required for university admissions, while the General Training test is often taken for immigration and work purposes.
                </p>
                <p>
                    The Listening section has four recordings, each followed by a series of questions testing comprehension and inference skills. The Reading section consists of three long texts, with questions assessing skimming, scanning, and detailed understanding. The Writing section includes two tasks: describing data in Task 1 (Academic) or writing a letter (General Training) and writing an essay in Task 2. The Speaking section is a face-to-face interview where candidates are evaluated on fluency, pronunciation, and coherence.
                </p>
                <p>
                    Since the IELTS test is strictly timed, effective time management is crucial for achieving a high score.
                </p>
            </>
        ),
        badge: "IELTS Format",
        image: ""
    },
    {
        title: "Mastering the IELTS Listening Section",
        description: (
            <>
                <p>
                    The IELTS Listening section consists of four recordings, including conversations, monologues, and academic discussions. It assesses a candidate’s ability to understand main ideas, specific details, and implied meanings.
                </p>
                <p>
                    To improve listening skills, students should practice with diverse English accents, including British, Australian, and American. Watching documentaries, podcasts, and news reports can help develop comprehension abilities. Practicing with IELTS listening tests is essential to get accustomed to the question types, such as multiple-choice, sentence completion, and matching tasks.
                </p>
                <p>
                    Note-taking is an important skill for IELTS Listening. Test-takers should learn to recognize keywords and anticipate answers before hearing the recording to maximize accuracy.
                </p>
            </>
        ),
        badge: "Listening Section",
        image: ""
    },
    {
        title: "How to Excel in the IELTS Reading Section",
        description: (
            <>
                <p>
                    The IELTS Reading section includes three long passages, with questions testing comprehension, vocabulary, and logical reasoning. The Academic version contains texts from books, journals, and newspapers, while the General Training version includes extracts from everyday materials such as advertisements and instruction manuals.
                </p>
                <p>
                    Skimming and scanning techniques are vital for time management. Skimming allows test-takers to get the general idea of a passage, while scanning helps locate specific details quickly. Understanding question types—such as True/False/Not Given, Matching Headings, and Sentence Completion—can help approach answers effectively.
                </p>
                <p>
                    Reading English literature, newspapers, and academic journals regularly improves comprehension speed and vocabulary, both of which are essential for success in this section.
                </p>
            </>
        ),
        badge: "Reading Section",
        image: ""
    },
    {
        title: "Strategies for the IELTS Writing Section",
        description: (
            <>
                <p>
                    The IELTS Writing section consists of two tasks. Task 1 (Academic) requires summarizing and analyzing visual information like graphs and charts, while the General Training version requires writing a formal or informal letter. Task 2 is an essay where candidates present and support an argument.
                </p>
                <p>
                    A well-structured response is key to scoring high. Essays should follow a logical structure, including an introduction, body paragraphs with supporting evidence, and a conclusion. Using a variety of sentence structures and advanced vocabulary enhances the score.
                </p>
                <p>
                    Time management is crucial. Candidates should practice completing essays within 40 minutes and Task 1 within 20 minutes to develop efficiency and accuracy.
                </p>
            </>
        ),
        badge: "Writing Section",
        image: ""
    },
    {
        title: "Tips for the IELTS Speaking Section",
        description: (
            <>
                <p>
                    The IELTS Speaking test is a face-to-face interview with an examiner and consists of three parts: an introduction, a long turn (a two-minute monologue), and a discussion on abstract topics. Candidates are assessed on fluency, lexical resource, grammatical range, and pronunciation.
                </p>
                <p>
                    To improve speaking skills, candidates should practice speaking English daily, record responses, and analyze areas for improvement. Using structured templates for responses and expanding answers with examples can enhance coherence.
                </p>
                <p>
                    Engaging in real conversations with fluent English speakers, practicing with AI-based language tools, or joining English-speaking groups can also help build confidence.
                </p>
            </>
        ),
        badge: "Speaking Section",
        image: ""
    },
    {
        title: "Building a Strong IELTS Study Plan",
        description: (
            <>
                <p>
                    A well-structured study plan is essential for achieving a high IELTS score. Candidates should allocate study time for all four sections and take full-length practice tests weekly to assess progress.
                </p>
                <p>
                    Focusing on weak areas and setting daily or weekly targets helps in improving consistently. Official IELTS preparation materials from Cambridge, British Council, and IDP are reliable sources for practice.
                </p>
            </>
        ),
        badge: "Study Plan",
        image: ""
    },
    {
        title: "Test-Day Strategies for Success",
        description: (
            <>
                <p>
                    Managing stress and time on exam day is crucial for success. Test-takers should ensure they arrive at the test center early, stay hydrated, and remain calm throughout the test.
                </p>
                <p>
                    In the Listening section, focusing on keywords and anticipating answers can improve accuracy. In the Reading section, skimming and scanning techniques save time. In the Writing section, outlining responses before writing can improve coherence. In the Speaking section, staying confident and maintaining fluency helps in achieving a high score.
                </p>
            </>
        ),
        badge: "Test-Day Tips",
        image: ""
    },
    {
        title: "Final Thoughts: Achieving Your Target IELTS Score",
        description: (
            <>
                <p>
                    IELTS success requires dedicated practice, time management, and effective strategies. By focusing on all four sections and using targeted study techniques, candidates can significantly improve their scores.
                </p>
                <p>
                    At MJA.in, students receive expert coaching, personalized IELTS strategies, and access to high-quality study materials. With the right preparation approach, achieving a high IELTS score and fulfilling academic or career goals becomes attainable.
                </p>
            </>
        ),
        badge: "Final Thoughts",
        image: ""
    }
];
