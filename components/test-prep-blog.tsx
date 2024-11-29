import { ServiceCard } from "@/components/service-card"

export default function TestPrepBlogSection() {
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
                buttonHref="#"
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
                buttonHref="#"
                imageSrc="/test-prepration/IELTSprepration.png"
                imageAlt="IELTS Mastery Service Illustration"
                reversed
            />
        </div>
    )
}

