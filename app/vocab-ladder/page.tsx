import { GamifiedJourney } from "./gamified-journey";

export default function VocabMountain() {
    return (
        // <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('https://classroomclipart.com/image/static7/preview2/red-step-ladder-icon-style-clipart-59168.jpg')" }}>
        <div className="sm:py-4 sm:px-12  bg-center bg-cover bg-no-repeat bg-[url('/vocab-ladder/ladderBG.webp')]">
            <GamifiedJourney />
        </div>
    )
}   