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
        title: "Guide to GRE Preparation",
        description: (
            <>
                <p>
                    The Graduate Record Examination (GRE) is a standardized test that plays a crucial role in admissions for graduate programs worldwide. Whether you're aspiring to pursue a master's degree in the US, Canada, or Europe, a high GRE score can significantly boost your application. Preparing effectively for the GRE requires a structured approach, strong conceptual understanding, and extensive practice.
                </p>
                <p>
                    This guide covers everything you need to know about GRE preparation, including study plans, section-wise strategies, best resources, and expert tips to help you achieve a high score.
                </p>
            </>
        ),
        badge: "Introduction",
        image:
            "https://images.unsplash.com/photo-1630983358494-96012d838b84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Understanding the GRE Exam Format",
        description: (
            <>
                <p>
                    The GRE General Test consists of three main sections: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing. The Verbal and Quantitative sections are each scored on a 130–170 scale, while the Analytical Writing section is graded on a 0–6 scale. The test is computer-adaptive, meaning the difficulty level of your second section in both Verbal and Quantitative Reasoning depends on your performance in the first section.
                </p>
                <p>
                    The Verbal Reasoning section evaluates your ability to understand and analyze written material, recognize relationships between words, and apply critical reasoning skills. It includes question types such as Reading Comprehension, Text Completion, and Sentence Equivalence. Success in this section requires a strong grasp of vocabulary, an ability to decipher complex passages, and logical reasoning skills to select the best answers.
                </p>
                <p>
                    The Quantitative Reasoning section assesses mathematical skills, data interpretation, and problem-solving abilities. This section covers topics like algebra, arithmetic, geometry, and data analysis. While the math level is not beyond high school difficulty, GRE questions are designed to test conceptual understanding, pattern recognition, and efficiency in solving problems under time constraints.
                </p>
                <p>
                    The Analytical Writing section measures critical thinking and analytical skills through two essays: the Issue Task and the Argument Task. The Issue Task presents a general topic, requiring you to construct a well-reasoned argument. The Argument Task asks you to analyze and critique the logical structure of a given argument. A high-scoring essay requires clarity, coherence, well-developed reasoning, and the ability to articulate ideas effectively.
                </p>
            </>

        ),
        badge: "GRE Format",
        image: ""
    },
    {
        title: "Building a Strong Foundation in Verbal Reasoning",
        description: (
            <>
                <p>
                    Acing the GRE Verbal section requires a vast vocabulary, reading comprehension skills, and the ability to infer relationships between words and ideas. One of the most effective ways to expand vocabulary is by studying word lists such as the Manhattan 500 Essential Words, Barron’s 1100 Words, and Magoosh GRE Vocabulary List. However, rote memorization alone is not enough; contextual learning through reading newspapers, academic articles, and literary essays helps reinforce vocabulary usage.
                </p>
                <p>
                    Reading complex texts regularly from sources like The New York Times, The Economist, and Scientific American can help build analytical reading skills. These publications feature high-level vocabulary and intricate sentence structures similar to GRE passages. When reading, it’s essential to focus on understanding main ideas, tone, and argument structures, as GRE passages often require test-takers to identify implicit meanings.
                </p>
                <p>
                    Sentence Equivalence and Text Completion questions demand precise vocabulary usage and a strong grasp of contextual clues. While answering these, one must focus on the logical flow of the sentence and recognize synonyms or word pairs that maintain sentence integrity. Practicing with timed exercises helps in developing quick reasoning skills necessary for solving these questions efficiently.
                </p>

            </>
        ),
        badge: "Verbal Reasoning",
        image: ""
    },
    {
        title: "Mastering Quantitative Reasoning with Strategy",
        description: (
            <>
                <p>
                    The GRE Quantitative section is not about complex mathematics but rather about problem-solving efficiency and logical reasoning. Many test-takers underestimate this section and struggle with time management and tricky question framing                </p>
                <p>
                    Building a solid foundation in arithmetic, algebra, geometry, and data analysis is essential. Many students find success by first revisiting basic mathematical formulas and rules before progressing to GRE-specific problem-solving strategies. It is also crucial to practice recognizing common traps in GRE questions. The test often includes tricky word problems, hidden conditions, and misleading answer choices, making it important to read each question carefully.
                </p>
                <p>
                    Data Interpretation, another critical component, tests one’s ability to analyze graphs, tables, and statistical data. Practicing charts, percentages, and probability-based problems enhances problem-solving skills. Using an approximation method can save time in lengthy calculations. GRE allows the use of an on-screen calculator, but relying on it too much can slow down performance. Practicing mental math and estimation techniques ensures a more time-efficient approach.
                </p>
            </>
        ),
        badge: "Verbal Reasoning",
        image: ""
    },
    {
        title: "Tackling the Analytical Writing Section",
        description: (
            <>
                <p>
                    The Analytical Writing section challenges students to structure and express their thoughts in a clear, coherent, and analytical manner. Unlike subjective essays, GRE essays are scored based on logical reasoning, structure, clarity, and argumentative strength.
                </p>
                <p>
                    For the Issue Task, the best approach is to take a clear stance on the topic, structure the argument logically, and support it with examples from history, literature, science, or personal experiences. The introduction should clearly state the thesis, followed by two to three well-developed body paragraphs, each focusing on a specific supporting idea. A strong conclusion should reinforce the argument without introducing new information.
                </p>
                <p>
                    The Argument Task requires a different strategy. Instead of taking a stance, the goal is to critically analyze the flaws in the given argument. Identifying logical fallacies, unsupported assumptions, and ambiguous reasoning is key. The essay should systematically deconstruct the argument, provide counterexamples, and suggest ways to strengthen it.
                </p>
                <p>
                    Practicing writing essays within the 30-minute time limit is essential. Many test-takers overlook time management and struggle to complete their essays. Reviewing high-scoring sample essays from sources like ETS or online GRE forums can provide insights into effective structuring and argumentation.
                </p>
            </>
        ),
        badge: "Verbal Reasoning",
        image: ""
    },
    {
        title: "Test-Taking Strategies for Exam Day",
        description: (
            <>
                <p>
                    Success on test day depends not just on knowledge but also on strategic test-taking techniques. Familiarity with the section-adaptive nature of the test helps in pacing through questions effectively.
                </p>
                <p>
                    For the Verbal section, it is advisable to read passages strategically, focusing on main ideas rather than getting lost in details. Eliminating obviously incorrect answer choices improves accuracy in Sentence Equivalence and Text Completion questions.
                </p>
                <p>
                    In Quantitative Reasoning, skipping difficult questions and revisiting them later can save valuable time. Keeping calm under pressure and using the process of elimination to rule out incorrect answers enhances accuracy.
                </p>
                <p>
                    For the Analytical Writing section, sketching out a brief outline before writing ensures a logical flow of ideas. Writing concisely and maintaining grammatical accuracy is crucial for high scores.
                </p>
            </>
        ),
        badge: "Verbal Reasoning",
        image: ""
    },
    {
        title: "Final Thoughts: Achieving Your Target GRE Score",
        description: (
            <>
                <p>
                    GRE preparation requires a combination of strategy, consistency, and adaptability. By focusing on concept building, practicing regularly, and refining test-taking skills, test-takers can significantly improve their scores. Utilizing reliable GRE prep resources, staying disciplined with study schedules, and taking full-length tests under timed conditions can lead to success on test day.
                </p>
                <p>
                    At MJA.in, students receive expert guidance through personalized coaching, targeted GRE strategies, and access to extensive study materials. With the right preparation approach, achieving a top GRE score and securing admission into prestigious universities is well within reach.
                </p>
            </>
        ),
        badge: "Verbal Reasoning",
        image: ""
    },
];
