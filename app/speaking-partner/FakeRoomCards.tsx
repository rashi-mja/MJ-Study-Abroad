import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Users, LogIn, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function FakeRoomCards() {
    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        Room 3
                        <Badge variant="destructive">
                            Full
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>
                            2 / 2 Participants
                        </span>
                    </div>
                    <div>
                        {/* <Badge variant="outline" className="mr-2">
                    Alice
                </Badge>
                <Badge variant="outline" className="mr-2">
                    Bob
                </Badge> */}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                        className="bg-green-600 font-bold text-white hover:bg-green-500 hover:text-white"
                    >
                        <LogIn className="mr-2 h-4 w-4" /> Join Room
                    </Button>
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                    >
                        <LogOut className="mr-2 h-4 w-4" /> Exit Room
                    </Button>
                </CardFooter>
            </Card>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        Room 2
                        <Badge variant="destructive">
                            Full
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>
                            2 / 2 Participants
                        </span>
                    </div>
                    <div>
                        {/* <Badge variant="outline" className="mr-2">
                    Mamta
                </Badge>
                <Badge variant="outline" className="mr-2">
                    Grace
                </Badge> */}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                        className="bg-green-600 font-bold text-white hover:bg-green-500 hover:text-white"
                    >
                        <LogIn className="mr-2 h-4 w-4" /> Join Room
                    </Button>
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                    >
                        <LogOut className="mr-2 h-4 w-4" /> Exit Room
                    </Button>
                </CardFooter>
            </Card>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        Room 1
                        <Badge variant="destructive">
                            Full
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>
                            2 / 2 Participants
                        </span>
                    </div>
                    <div>
                        {/* <Badge variant="outline" className="mr-2">
                    Alice
                </Badge>
                <Badge variant="outline" className="mr-2">
                    Bob
                </Badge> */}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                        className="bg-green-600 font-bold text-white hover:bg-green-500 hover:text-white"
                    >
                        <LogIn className="mr-2 h-4 w-4" /> Join Room
                    </Button>
                    <Button
                        onClick={() => { }}
                        disabled={true}
                        variant="outline"
                    >
                        <LogOut className="mr-2 h-4 w-4" /> Exit Room
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}