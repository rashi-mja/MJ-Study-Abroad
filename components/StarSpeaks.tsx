import Image from 'next/image'
import { Button } from "@/components/ui/button"

const destinations = [
    { name: 'New Zealand', image: '/landingPage/NewZeland.png' },
    { name: 'United Kingdom', image: '/landingPage/UK.png' },
    { name: 'USA, MIT', image: '/landingPage/US.png' },
    { name: 'Ireland', image: '/landingPage/Ireland.png' },
    { name: 'Canada', image: '/landingPage/Canada.png' },
    { name: 'Australia', image: '/landingPage/Australia.png' },
]

export default function TravelGuide() {
    return (
        <div className="p-4">
            {/* <section className="mb-8">
                <h2 className="w-full text-center text-2xl font-bold mb-4">Star Speaks</h2>
                <div className="bg-pink-100 p-4 rounded-lg shadow-lg">
                    <div className="flex justify-center gap-4 sm:justify-between flex-wrap items-center">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="sm:w-[30%] rounded-lg">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/yOnSY-Cnvmg?si=vn-CcVD7Yr9on6q8"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className=''>
                <h2 className="w-full text-center  font-extrabold text-slate-800 text-4xl sm:text-6xl mb-4">Destination Guides</h2>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center sm:p-12">
                        {destinations.map((dest, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    width={300}
                                    height={200}
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

