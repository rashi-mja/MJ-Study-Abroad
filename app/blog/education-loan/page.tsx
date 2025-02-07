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
        title: "Education Loan Services – Fund Your Study Abroad Dream",
        description: (
            <>
                <p>
                    Studying abroad is a life-changing experience, but the cost of tuition, living expenses, travel, and insurance can be a major concern for many students. Education loans provide financial support, allowing students to pursue higher education without financial stress.
                </p>
                <p>
                    At MJA.in, we offer **comprehensive education loan assistance**, helping students secure the best loan options with minimal interest rates, flexible repayment plans, and high approval rates. Our expert team guides students through the entire process, ensuring quick approvals with minimal paperwork.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Why Take an Education Loan?",
        description: (
            <>
                <p>
                    Education loans are designed to help students cover the cost of studying abroad while offering flexible repayment options. Here’s why taking an education loan can be beneficial:
                </p>
                <p>
                    - **Covers All Expenses**: Loans cover tuition fees, living expenses, travel, and study materials.
                </p>
                <p>
                    - **Low-Interest Rates**: Many banks and NBFCs offer education loans at lower interest rates compared to personal loans.
                </p>
                <p>
                    - **Moratorium Period**: Repayment usually starts after completing the course, allowing students to focus on their studies.
                </p>
                <p>
                    - **Builds a Good Credit Score**: Timely repayments improve credit history, which helps in securing future loans.
                </p>
                <p>
                    With expert guidance, students can secure loans without unnecessary delays or rejections.
                </p>
            </>
        ),
        badge: "Benefits of Education Loans",
        image: ""
    },
    {
        title: "Types of Education Loans Available",
        description: (
            <>
                <p>
                    Students can choose between **secured and unsecured loans** based on their financial background and requirements.
                </p>
                <p>
                    - **Secured Education Loans**: Requires collateral such as property, fixed deposits, or insurance policies. Offers lower interest rates and higher approval chances.
                </p>
                <p>
                    - **Unsecured Education Loans**: No collateral required. Suitable for students who meet eligibility criteria based on academic records and co-applicant financial standing.
                </p>
                <p>
                    We help students determine the best loan type based on their eligibility and university requirements.
                </p>
            </>
        ),
        badge: "Types of Loans",
        image: ""
    },
    {
        title: "Top Banks Offering Education Loans for Study Abroad",
        description: (
            <>
                <p>
                    Many Indian and international banks offer education loans with attractive terms. Some of the best banks for education loans include:
                </p>
                <p>
                    - **State Bank of India (SBI) – Global Ed-Vantage Scheme**: Competitive interest rates with a repayment period of up to 15 years.
                </p>
                <p>
                    - **HDFC Credila**: Customizable loan solutions with no upper limit for premier universities.
                </p>
                <p>
                    - **Axis Bank Education Loan**: Loans up to INR 75 lakh for international education.
                </p>
                <p>
                    - **ICICI Bank Education Loan**: Covers tuition fees and living expenses for students studying abroad.
                </p>
                <p>
                    - **Punjab National Bank (PNB Udaan Scheme)**: Offers up to INR 40 lakh without collateral.
                </p>
                <p>
                    - **NBFCs like Auxilo & Avanse**: Ideal for students with non-traditional financial backgrounds.
                </p>
            </>
        ),
        badge: "Top Banks for Education Loans",
        image: ""
    },
    {
        title: "Eligibility Criteria for Education Loans",
        description: (
            <>
                <p>
                    To apply for an education loan, students must meet specific eligibility requirements set by banks and financial institutions.
                </p>
                <p>
                    - **Admission Proof**: A confirmed admission letter from a recognized university abroad.
                </p>
                <p>
                    - **Academic Performance**: A strong academic record increases loan approval chances.
                </p>
                <p>
                    - **Co-Applicant Requirement**: Most banks require a co-applicant (parent/guardian) with a stable income.
                </p>
                <p>
                    - **Collateral (If Required)**: For secured loans, collateral documents need to be submitted.
                </p>
                <p>
                    - **KYC and Income Proof**: PAN card, Aadhaar card, and financial documents of the co-applicant.
                </p>
            </>
        ),
        badge: "Eligibility Criteria",
        image: ""
    },
    {
        title: "Step-by-Step Education Loan Process",
        description: (
            <>
                <p>
                    The loan application process involves several steps. Our team at MJA.in ensures a hassle-free experience by guiding students through each stage.
                </p>
                <p>
                    **1. Loan Pre-Assessment**
                    Determine loan eligibility and calculate the required loan amount.
                </p>
                <p>
                    **2. Choose the Right Bank**
                    Compare loan options from different banks based on interest rates and repayment terms.
                </p>
                <p>
                    **3. Submit Documents**
                    Provide the necessary documents, including admission proof, KYC details, income certificates, and collateral (if applicable).
                </p>
                <p>
                    **4. Loan Processing and Approval**
                    The bank verifies documents and approves the loan based on eligibility criteria.
                </p>
                <p>
                    **5. Loan Disbursement**
                    Upon approval, the loan amount is disbursed directly to the university as per the fee structure.
                </p>
            </>
        ),
        badge: "Education Loan Process",
        image: ""
    },
    {
        title: "Documents Required for Education Loan Application",
        description: (
            <>
                <p>
                    Banks require a set of mandatory documents to process an education loan. These include:
                </p>
                <p>
                    - **Admission letter from university**.
                </p>
                <p>
                    - **Academic transcripts (10th, 12th, and degree certificates)**.
                </p>
                <p>
                    - **Valid ID proof (PAN card, Aadhaar card, passport)**.
                </p>
                <p>
                    - **Proof of residence**.
                </p>
                <p>
                    - **Co-applicant’s income proof (salary slips, ITR, bank statements)**.
                </p>
                <p>
                    - **Collateral documents (for secured loans)**.
                </p>
                <p>
                    Our experts help in organizing and verifying all necessary documents to avoid processing delays.
                </p>
            </>
        ),
        badge: "Documents Required",
        image: ""
    },
    {
        title: "Loan Repayment and Interest Rates",
        description: (
            <>
                <p>
                    Repayment terms vary based on the bank and loan type. Some key aspects include:
                </p>
                <p>
                    - **Repayment starts after course completion + grace period (6-12 months)**.
                </p>
                <p>
                    - **Repayment tenure ranges from 5 to 15 years**.
                </p>
                <p>
                    - **Interest rates range from 8% to 12% depending on the lender**.
                </p>
                <p>
                    Students can opt for partial payments during their studies to reduce interest accumulation.
                </p>
            </>
        ),
        badge: "Repayment & Interest Rates",
        image: ""
    },
    {
        title: "Get Expert Education Loan Assistance from MJA.in",
        description: (
            <>
                <p>
                    Securing an education loan doesn’t have to be complicated. At MJA.in, we provide:
                </p>
                <p>
                    - **Personalized loan guidance based on student profiles**.
                </p>
                <p>
                    - **Assistance in securing low-interest education loans**.
                </p>
                <p>
                    - **Complete support for loan applications and documentation**.
                </p>
                <p>
                    - **Loan approval assistance with fast processing timelines**.
                </p>
                <p>
                    Need financial assistance for studying abroad? Contact us today!
                </p>
                <p>
                    📞 Call us at +91 8802880181 to speak with our education loan experts.
                </p>
            </>
        ),
        badge: "Get Help",
        image: ""
    }
];