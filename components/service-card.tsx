import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import Link from "next/link"

interface ServiceCardProps {
    title: string
    description: string
    benefits: string[]
    buttonText: string
    buttonHref: string
    imageSrc: string
    imageAlt: string
    reversed?: boolean
}

export function ServiceCard({
    title,
    description,
    benefits,
    buttonText,
    buttonHref,
    imageSrc,
    imageAlt,
    reversed = false,
}: ServiceCardProps) {
    return (
        <Card className="overflow-hidden border-none bg-transparent shadow-none">
            <CardContent className="p-0">
                <div
                    className={`grid gap-6 lg:grid-cols-2 ${reversed ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    <div className="flex flex-col justify-center space-y-4 p-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                            <p className="text-muted-foreground">{description}</p>
                        </div>
                        <ul className="space-y-2">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-orange-500" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Button
                                asChild
                                className="bg-orange-500 hover:bg-orange-600"
                            >
                                <Link href={buttonHref}>{buttonText}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover"
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0
                            }}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

