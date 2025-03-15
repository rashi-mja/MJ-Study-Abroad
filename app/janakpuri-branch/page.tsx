import EducationLanding from "@/components/education-landing";
import TestPrepBlogSection from "../../components/test-prep-blog";
import EducationPlatform from "./education-platform";

export default function TestPrep() {
    return (
        <>
            <EducationPlatform />
            <EducationLanding />
            <TestPrepBlogSection />
        </>
    )
}