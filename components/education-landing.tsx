import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from 'lucide-react'

export default function EducationLanding() {
  const testCards = [
    {
      name: "GRE",
      image: "/test-prepration/GRE.png",
    },
    {
      name: "TOEFL",
      image: "/test-prepration/TOEFL.png",
    },
    {
      name: "IELTS",
      image: "/test-prepration/IELTS.png",
    },
    {
      name: "GMAT",
      image: "/test-prepration/GMAT.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#001a1a] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#00e6e6]">Imagine</span> the Things
            <br />
            done in <span className="text-[#ffd700]">The Lab</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience education without boundaries – Turn your Study Abroad
            dreams into reality with M2s 25 years of expertise
          </p>
          <Button
            className="bg-[#00e6e6] hover:bg-[#00cccc] text-black font-semibold px-8 py-6 text-lg rounded-full"
          >
            Join Us today
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
          {testCards.map((card) => (
            <Card key={card.name} className="group relative bg-transparent border-0">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.name} Test Preparation`}
                  className="object-cover max-w-full h-full max-h-[200px] sm:max-h-[400px]"
                />
                {/* <div className="absolute bottom-4 right-4 bg-[#ffd700] p-2 rounded-lg cursor-pointer transform transition-transform group-hover:scale-110">
                  <Plus className="w-6 h-6 text-black" />
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

