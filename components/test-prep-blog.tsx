import { ServiceCard } from "@/components/service-card"

export default function TestPrepBlogSection() {
    const whatsappNumber = "+918802880181"; // WhatsApp number

    const getWhatsappLink = (subject: string) => {
        const message = `Hey, I want to know details for upcoming ${subject} Batches`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };
    return (
        <div className="container mx-auto space-y-12 px-4 py-8">
            <ServiceCard
                title="GRE Preparation and Strategy"
                description="Master the GRE with comprehensive preparation strategies and structured study plans designed to optimize your performance. Embrace a learning approach that aligns with the GRE's unique format and question types to achieve your desired scores."
                benefits={[
                    "Targeted study plans for high GRE scores",
                    "In-depth understanding of verbal and quantitative sections",
                    "Strategies aligned with the GRE scoring algorithm"
                ]}
                buttonText="Reserve Your Consultation"
                buttonHref={getWhatsappLink("GRE")}
                imageSrc="/test-prepration/GREprepration.png"
                imageAlt="GRE Preparation Service Illustration"
            // reversed
            />

            <ServiceCard
                title="IELTS Mastery and Techniques"
                description="Enhance your IELTS preparation with our specialized training programs, designed to equip you with the necessary skills for all four sections of the test: Listening, Reading, Writing, and Speaking. Our approach is tailored to help you excel in the IELTS and achieve your desired band score."
                benefits={[
                    "Comprehensive strategies for each IELTS component",
                    "Personalized coaching to improve English proficiency",
                    "Practice tests that simulate real IELTS conditions"
                ]}
                buttonText="Book Your Session"
                buttonHref={getWhatsappLink("IELTS")}
                imageSrc="/test-prepration/IELTSprepration.png"
                imageAlt="IELTS Mastery Service Illustration"
                reversed
            />

            <ServiceCard
                title="TOEFL Test Preparation"
                description="Elevate your English proficiency with our TOEFL preparation program, designed to hone your language skills across all four test sections: Reading, Listening, Speaking, and Writing. Our strategy focuses on interactive learning with personalized feedback to ensure you excel in the TOEFL and reach your academic objectives."
                benefits={[
                    "Specialized modules for each TOEFL test section",
                    "Interactive practice sessions for real-world test experience",
                    "Expert feedback to refine language skills"
                ]}
                buttonText="Enroll in TOEFL Prep"
                buttonHref={getWhatsappLink("TOEFL")}
                imageSrc="/test-prepration/TOEFLprepration.png"
                imageAlt="TOEFL Preparation Service Illustration"
            />

            <ServiceCard
                title="PTE Academic Excellence"
                description="Optimize your PTE Academic results with our specialized training. Our program covers all aspects of the PTE, including speaking, listening, reading, and writing, using state-of-the-art technology to simulate the test environment. Personalized instruction and real-time feedback prepare you for the best performance."
                benefits={[
                    "Tailored practice sessions for the PTE's computer-based format",
                    "Expert strategies to master each section of the test",
                    "Comprehensive resource access, including top-notch study materials"
                ]}
                buttonText="Join PTE Coaching"
                buttonHref={getWhatsappLink("PTE")}
                imageSrc="/test-prepration/PTEprepration.png"
                imageAlt="PTE Academic Excellence Service Illustration"
                reversed
            />
        </div>
    )
}

