import Image from 'next/image'
import { Signika } from 'next/font/google';
import MJASolutionHub from '@/components/mja-solution-hub';
import TravelGuide from '@/components/StarSpeaks';

const signika = Signika({ subsets: ['latin'], weight: ['300', '400', '700'] });

export default function LandingPage() {
  return (
    <>
      <main className="min-h-[100vh] bg-[#E6F4FF]">
        <div className="relative pt-16 ">
          <div className="absolute inset-0 z-0 min-h-screen">
            <Image
              src="/landingPage/WorldMapBG.png"
              alt="World Map Background"
              fill
              className="object-cover bg-center hidden sm:block"
            />
            <Image
              src="/landingPage/MobileWorldMapBG.png"
              alt="World Map Background"
              fill
              className="object-cover bg-center sm:hidden block"
            />
          </div>

          <div className="max-w-7xl pt-20 flex flex-col relative z-10">
            <div className={`${signika.className} md:w-[55%] sm:text-start text-center sm:bg-white/50 py-10 px-7 sm:rounded-r-[5rem]`}>
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                Experience education without boundaries –
                <br />
                Turn your <span className="text-red-600">Study Abroad</span> dreams into
                <br />
                reality with MJ's <span className="text-red-600">25</span> years of expertise
              </h1>
            </div>
            <div className='mt-5 sm:mt-24 items-center justify-center px-10'>
              <button className={`${signika.className} font-bold bg-gradient-to-b from-yellow-100 to-yellow-50 shadow-lg text-gray-800 px-8 py-3 rounded-full hover:bg-yellow-200 transition-colors text-lg`}>
                Book a Counseling session
              </button>
            </div>
          </div>
        </div>
      </main>

      <main className=''>
        <div className="h-10 bg-gradient-to-b from-[#86D5F6] to-slate-50"></div>
        <MJASolutionHub />
      </main>

      <main className=''>
        <TravelGuide />
      </main>

    </>
  )
}

