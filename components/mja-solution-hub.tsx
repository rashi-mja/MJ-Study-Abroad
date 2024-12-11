import { Button } from "@/components/ui/button";
import { Baloo_Bhai_2 } from "next/font/google";
import Image from "next/image";

const Baloo = Baloo_Bhai_2({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function MJASolutionHub({ onTriggerModal = () => { } }) {
  const sections = [
    {
      title: "Test Preparation",
      description:
        "Achieve your optimal test score effortlessly with our certified, skilled, and committed tutors providing efficient preparation for your desired exams.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub1.png",
      gradientFrom: "from-[#FBE8BA]",
      gradientTo: "to-white",
      alignment: "left",
    },
    {
      title: "Test Vouchers",
      description:
        "MJA is the authorized nodal agent for ETS©, PTE©, and IDP©. Secure your study abroad test at discounted rates by booking through us.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub2.png",
      gradientFrom: "from-blue-400/40",
      gradientTo: "to-white",
      alignment: "right",
    },
    {
      title: "Visual Vocabulary",
      description:
        "Enhance your vocabulary using the techniques of Mr. Mahavir Jain, a Limca Book of World Records holder for memorizing the Oxford Advanced Dictionary. He is a pioneer of the Audio-Visual-Mnemonic vocabulary technique.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub3.png",
      gradientFrom: "from-[#E5DBF0]",
      gradientTo: "to-white",
      alignment: "left",
    },
    {
      title: "University Shortlisting and Admissions",
      description:
        "We assist you in selecting the perfect courses, universities, and countries that align seamlessly with your career goals, academic aspirations, and budgetary considerations.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub4.png",
      gradientFrom: "from-[#FDEBD1]",
      gradientTo: "to-white",
      alignment: "right",
    },
    {
      title: "SOP/LOR Editing Services",
      description:
        "Your admission success is significantly influenced by your Statement of Purpose (SOP) and Letter of Recommendation (LOR). Have your documents meticulously vetted by exceptionally experienced editors.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub5.png",
      gradientFrom: "from-[#D9E7FF]",
      gradientTo: "to-white",
      alignment: "left",
    },
    {
      title: "Scholarships",
      description:
        "Explore numerous scholarships available at global universities, and let us assist you in identifying and applying for those most fitting for you.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub6.webp",
      gradientFrom: "from-[#FBE8BA]",
      gradientTo: "to-white",
      alignment: "right",
    },
    {
      title: "Visa Services",
      description:
        "With a 95%+ visa success rate, trust our experts for swift and successful outcomes by preparing and processing your documents to Embassies and High Commissions.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub7.webp",
      gradientFrom: "from-[#F7F0E3]",
      gradientTo: "to-white",
      alignment: "left",
    },
    {
      title: "Education Loan",
      description:
        "Overcome financial barriers to studying abroad with an education loan, ensuring that funding is no longer an obstacle. Fulfill your dreams with your desired university.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub8.webp",
      gradientFrom: "from-[#D9F2FF]",
      gradientTo: "to-white",
      alignment: "right",
    },
    {
      title: "Supporting Services",
      description:
        "Support services play a crucial role in facilitating successful journeys abroad by offering finance solutions, insurance coverage, forex assistance for tuition fee transfers, and aiding in seamless transactions in international currencies.",
      buttonText: "Learn more",
      image: "/landingPage/SolutionHub9.webp",
      gradientFrom: "from-[#E7F4FF]",
      gradientTo: "to-white",
      alignment: "left",
    },
  ];

  return (
    <div className={`${Baloo.className} flex flex-col w-full py-12 text-black items-center justify-center`}>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-16 text-slate-800">MJA Solution Hub</h1>

      {sections.map((section, index) => {
        const isLeftAligned = section.alignment === "left";

        return (
          <div
            key={index}
            className={`mb-24 flex flex-col sm:flex-row items-center gap-8 ${section.gradientFrom} ${section.gradientTo} w-[90%] ${isLeftAligned ? "bg-gradient-to-r sm:ml-auto rounded-3xl sm:rounded-l-[6rem]" : "bg-gradient-to-l rounded-3xl sm:rounded-r-[6rem]"} p-5 sm:p-10 shadow-lg sm:shadow-none`}
          >
            {isLeftAligned && (
              <div className="px-5">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">{section.title}</h2>
                <p className="sm:text-xl text-gray-700 mb-6">{section.description}</p>
                <Button
                  variant="outline"
                  className={`${Baloo.className} font-bold rounded-3xl sm:text-lg p-5 border boder-black shadow-lg`}
                  onClick={onTriggerModal}
                >
                  {section.buttonText}
                </Button>
              </div>
            )}
            <div
              className={`flex overflow-hidden rounded-[30px] items-center ${isLeftAligned ? "" : "order-2 sm:order-none"
                }`}
            >
              <Image
                width={800}
                height={500}
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
            {!isLeftAligned && (
              <div className="px-5 order-1 sm:order-none">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">{section.title}</h2>
                <p className="sm:text-xl text-gray-700s mb-6">{section.description}</p>
                <Button
                  variant="outline"
                  className={`${Baloo.className} font-bold rounded-3xl sm:text-lg p-5 border boder-black shadow-lg`}
                >
                  {section.buttonText}
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
