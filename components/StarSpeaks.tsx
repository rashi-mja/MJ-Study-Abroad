import Image from 'next/image'
import { Button } from "@/components/ui/button"

const destinations = [
    { name: 'New Zealand', image: '/placeholder.svg?height=150&width=200' },
    { name: 'United Kingdom', image: '/placeholder.svg?height=150&width=200' },
    { name: 'USA, MIT', image: '/placeholder.svg?height=150&width=200' },
    { name: 'Ireland', image: '/placeholder.svg?height=150&width=200' },
    { name: 'Canada', image: '/placeholder.svg?height=150&width=200' },
    { name: 'Australia', image: '/placeholder.svg?height=150&width=200' },
]

export default function TravelGuide() {
    return (
        <div className="p-4">
            <section className="mb-8">
                <h2 className="w-full text-center text-2xl font-bold mb-4">Star Speaks</h2>
                <div className="bg-pink-100 p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-[30%] rounded-lg">
                                <Image
                                    src="/landingPage/starSpeaks.png"
                                    width={300}
                                    height={300}
                                    alt="Star Student"
                                    className='w-full h-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <h2 className="w-full text-center text-2xl font-bold mb-4">Destination Guides</h2>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {destinations.map((dest, index) => (
                            <div key={index} className="relative">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    width={200}
                                    height={150}
                                    className="rounded-lg"
                                />
                                <p className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm rounded">
                                    {dest.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

