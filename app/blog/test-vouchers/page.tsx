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
        title: "How to Save Money on Test Registrations with Official Exam Vouchers",
        description: (
            <>
                <p>
                    Standardized tests like TOEFL, GRE, and IELTS are essential for students aspiring to study abroad. However, the cost of these exams can be a financial burden for many test-takers. Thankfully, <strong>test vouchers</strong> offer a cost-effective solution by providing discounts and exclusive deals on registration fees.
                </p>
                <p>
                    A <strong>test voucher</strong> is a prepaid code that can be used to register for an exam at a reduced price. These vouchers are issued by authorized partners and official providers, ensuring that students can access genuine discounts without compromising their application process.
                </p>
                <p>
                    In this guide, we will explore how to obtain TOEFL, GRE, and IELTS vouchers, where to buy them, and how they can help you save money while preparing for your dream university.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Why Should You Buy a Test Voucher?",
        description: (
            <>
                <p>
                    Purchasing a test voucher is an excellent way to <strong>reduce your exam costs</strong> without affecting the legitimacy of your test registration. Many students buy test vouchers instead of paying the full price because they provide access to:
                </p>
                <p>
                    - <strong>Discounted Rates</strong>: Test vouchers allow students to register for exams at a lower price than the standard fee.
                </p>
                <p>
                    - <strong>Official Registration</strong>: These vouchers are authorized by official test providers, ensuring safe and secure registration.
                </p>
                <p>
                    - <strong>Convenience</strong>: Instead of using a credit or debit card for online payments, students can purchase a test voucher and redeem it while booking their exam.
                </p>
                <p>
                    With the rising costs of studying abroad, saving money on standardized tests can make a big difference in your application journey.
                </p>
            </>
        ),
        badge: "Benefits",
        image: ""
    },
    {
        title: "TOEFL Voucher – Save on Your TOEFL Registration",
        description: (
            <>
                <p>
                    The <strong>Test of English as a Foreign Language (TOEFL)</strong> is one of the most widely accepted English proficiency exams. Universities in the <strong>United States, Canada, Australia, and Europe</strong> use TOEFL scores as an essential admission criterion. However, registering for the TOEFL exam can be expensive.
                </p>
                <p>
                    By purchasing a TOEFL voucher from <strong>toeflgoglobal.com</strong>, you can get an exclusive discount on your test registration. The <strong>standard TOEFL exam fee</strong> varies by country, but with our official TOEFL vouchers, you can save <strong>₹3,500</strong> off the standard price.
                </p>
                <p>
                    <strong>How to Redeem Your TOEFL Voucher:</strong>
                </p>
                <p>
                    1. Visit <a href="https://toeflgoglobal.com">toeflgoglobal.com</a> and purchase a TOEFL voucher at a discounted rate.
                </p>
                <p>
                    2. Receive your voucher code via email.
                </p>
                <p>
                    3. Go to the official TOEFL website and select your test date and location.
                </p>
                <p>
                    4. Enter the voucher code at checkout to apply the discount.
                </p>
                <p>
                    This process ensures that students can <strong>register for the TOEFL exam at a lower price</strong> while preparing for their study abroad goals.
                </p>
            </>
        ),
        badge: "TOEFL Voucher",
        image: ""
    },
    {
        title: "GRE Voucher – Affordable GRE Registration for Study Abroad Aspirants",
        description: (
            <>
                <p>
                    The <strong>Graduate Record Examination (GRE)</strong> is a crucial requirement for admission into master’s and PhD programs across universities in the <strong>United States, Canada, Europe, and Australia</strong>. A high GRE score can enhance scholarship opportunities and strengthen your university application.
                </p>
                <p>
                    However, the GRE exam fee can be <strong>expensive</strong>, and many students seek ways to reduce costs. By purchasing a GRE voucher from <strong>www.gregoglobal.com</strong>, students can register for the test at a significantly reduced price.
                </p>
                <p>
                    <strong>GRE Voucher Price Breakdown:</strong>
                </p>
                <p>
                    - <strong>Standard GRE Exam Fee</strong>: ₹22,500
                </p>
                <p>
                    - <strong>Discounted Price with Voucher</strong>: ₹19,000
                </p>
                <p>
                    <strong>How to Use Your GRE Voucher:</strong>
                </p>
                <p>
                    1. Visit <a href="https://www.gregoglobal.com">www.gregoglobal.com</a> and buy a GRE voucher at the discounted rate.
                </p>
                <p>
                    2. Receive your voucher code via email.
                </p>
                <p>
                    3. Go to the <strong>official ETS GRE website</strong>, select your preferred test date, and enter your voucher code at checkout.
                </p>
                <p>
                    By using a GRE voucher, you can <strong>save ₹3,500 on your test registration</strong>, making it a great way to budget your study abroad expenses.
                </p>
            </>
        ),
        badge: "GRE Voucher",
        image: ""
    },
    {
        title: "IELTS Voucher – Get the Best Deal on Your IELTS Exam Fee",
        description: (
            <>
                <p>
                    The <strong>International English Language Testing System (IELTS)</strong> is a widely accepted English proficiency test for university admissions, work permits, and immigration applications. The <strong>IELTS exam fee varies by country</strong>, but students can get exclusive discounts by purchasing a <strong>test voucher</strong>.
                </p>
                <p>
                    Unlike TOEFL and GRE vouchers, IELTS vouchers are not always directly available online. To get an IELTS voucher, you can <strong>talk to our counselor</strong> for the best deals on IELTS exam registration.
                </p>
                <p>
                    <strong>How to Get Your IELTS Voucher:</strong>
                </p>
                <p>
                    - Contact our <strong>counselor at MJA.in</strong> to inquire about IELTS vouchers.
                </p>
                <p>
                    - Receive information about the latest discounts and offers.
                </p>
                <p>
                    - Complete your registration using the voucher code.
                </p>
                <p>
                    Getting an IELTS voucher ensures that you can <strong>register for the exam at a lower price</strong> while receiving expert guidance on study abroad opportunities.
                </p>
            </>
        ),
        badge: "IELTS Voucher",
        image: ""
    },
    {
        title: "Final Thoughts: Why Choose MJA.in for Test Vouchers?",
        description: (
            <>
                <p>
                    At MJA.in, we understand the financial challenges that come with applying for international studies. That’s why we offer exclusive <strong>TOEFL, GRE, and IELTS vouchers</strong> to help students save money on test registrations.
                </p>
                <p>
                    <strong>Why Buy Your Test Voucher from Us?</strong>
                </p>
                <p>
                    - <strong>Authorized Partner Discounts</strong>: We provide genuine test vouchers issued by official test providers.
                </p>
                <p>
                    - <strong>Secure and Easy Registration</strong>: Our voucher codes work seamlessly on the official TOEFL, GRE, and IELTS websites.
                </p>
                <p>
                    - <strong>Expert Study Abroad Guidance</strong>: Our counselors assist students in selecting universities and improving their application profiles.
                </p>
                <p>
                    Whether you’re planning to take the <strong>TOEFL, GRE, or IELTS</strong>, purchasing a <strong>test voucher from MJA.in</strong> ensures that you get the best price while preparing for your future.
                </p>
            </>
        ),
        badge: "Final Thoughts",
        image: ""
    }
];
