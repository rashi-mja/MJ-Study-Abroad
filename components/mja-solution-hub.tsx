import { Button } from "@/components/ui/button"
import { Baloo_Bhai_2 } from 'next/font/google';
import Image from "next/image";

const Baloo = Baloo_Bhai_2({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function MJASolutionHub() {
  return (
    <div className={`${Baloo.className} flex flex-col w-full py-12 text-black items-center justify-center`}>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-16 text-slate-800">MJA Solution Hub</h1>

      <div className="mb-24 flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-b sm:bg-gradient-to-r from-[#FBE8BA] to-white w-[90%] sm:ml-auto shadow-lg sm:shadow-none rounded-3xl sm:rounded-l-[6rem] p-5 sm:p-10">
        <div className="px-5">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Test Preparation</h2>
          <p className="sm:text-xl text-gray-700 mb-6">
            Achieve your optimal test score effortlessly with our certified,
            skilled, and committed tutors, providing efficient preparation for
            your desired exams.
          </p>
          <Button
            variant="outline"
            className={`${Baloo.className} font-bold rounded-3xl sm:text-lg p-5 border boder-black shadow-lg`}
          >
            Learn more
          </Button>
        </div>
        <div className="flex overflow-hidden rounded-[30px] items-center">
          <Image
            width={800}
            height={500}
            src="/landingPage/SolutionHub1.png"
            alt="Classroom setting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-24 flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-t sm:bg-gradient-to-r from-white to-blue-400/40 w-[90%] rounded-3xl shadow-lg sm:shadow-none sm:rounded-r-[6rem] p-5 sm:p-10">
        <div className="order-2 sm:order-none overflow-hidden rounded-[30px] border">
          <Image
            width={800}
            height={500}
            src="/landingPage/SolutionHub2.png"
            alt="Classroom setting"
            className="min-w-full min-h-full object-cover"
          />
        </div>
        <div className="px-5 order-1 sm:order-none">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Test Vouchers</h2>
          <p className="sm:text-xl text-gray-700 mb-6">
            MJA is the authorized nodal agent for ETS©, PTE©, and IDP©. Secure your study abroad test at discounted rates by booking through us.
          </p>
          <Button
            variant="outline"
            className={`${Baloo.className} font-bold rounded-3xl sm:text-lg p-5 border boder-black shadow-lg`}
          >
            Learn more
          </Button>
        </div>
      </div>

    </div >
  )
}

