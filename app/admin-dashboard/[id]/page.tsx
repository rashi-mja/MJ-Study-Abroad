'use client'

import { useState, useEffect } from 'react'
import { StudentTable } from '../StudentTable'
import { DashboardHeader } from '../DashBoardHeader'
import { DashboardSummary } from '../DashboardSummary'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { db } from '@/firebaseConfig'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type Student = {
    id: string
    firstName: string
    email: string
    degree: string // No `undefined` allowed; default empty string if data is missing
    studyYear?: string // Optional
    course?: string // Optional
    selectedDate?: string // Optional
    selectedTime?: string // Optional
    stage: string // No `undefined` allowed; default empty string if data is missing
    countryCode?: string
    mobile?: string
    studyPlan?: string
    city?: string
    additionalInfo?: string
    branchLocation?: string
}


export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [students, setStudents] = useState<Student[]>([])
    const [isFranchise, setIsFranchise] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    const pathname = usePathname()
    const lastSegment = pathname.split("/").pop()

    // Ensure client-side rendering before returning UI
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // ✅ Always define Hooks before conditional return
    useEffect(() => {
        setIsFranchise(lastSegment === "janakpuri")
    }, [lastSegment])

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentsCollection = collection(db, 'students')
                const snapshot = await getDocs(studentsCollection)
                const studentData = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        firstName: data.firstName || '-',
                        email: data.email || '-',
                        degree: data.degree || '-',
                        studyYear: data.studyYear || '-',
                        course: data.course || '-',
                        selectedDate: data.selectedDate || '-',
                        selectedTime: data.selectedTime || '-',
                        stage: data.stage || '-',
                        countryCode: data.countryCode || '-',
                        mobile: data.mobile || '-',
                        studyPlan: data.studyPlan || '-',
                        city: data.city || '-',
                        additionalInfo: data.additionalInfo || '-',
                        branchLocation: data.branchLocation || '-'
                    }
                }) as Student[]
                setStudents(studentData)
            } catch (error) {
                console.error('Error fetching students:', error)
            }
        }
        if (isAuthenticated) {
            fetchStudents()
        }

    }, [isAuthenticated])

    if (!isMounted || (lastSegment !== "main" && lastSegment !== "janakpuri")) {
        return null
    }

    const filteredStudents = students
        .filter(student =>
            student.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(student =>
            filter === 'all' || student.stage?.toLowerCase() === filter.toLowerCase()
        )
        // ✅ If isFranchise is true, only show students from Janakpuri branch
        .filter(student =>
            !isFranchise || student.branchLocation?.toLowerCase() === "janakpuri"
        );


    const handlePasswordSubmit = () => {
        if (
            (lastSegment === "janakpuri" && password === "janakpuri_098") ||
            (lastSegment === "main" && password === "tgg123")
        ) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-6 space-y-8">
            <Dialog open={!isAuthenticated}>
                <DialogContent className="max-w-md p-6 text-center">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">Enter Password</DialogTitle>
                    </DialogHeader>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full text-center"
                    />
                    <Button className="w-full mt-4" onClick={handlePasswordSubmit}>
                        Submit
                    </Button>
                </DialogContent>
            </Dialog>

            {isAuthenticated && (
                <>
                    <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />
                    <DashboardSummary students={filteredStudents} />
                    <Tabs defaultValue="table" className="w-full">
                        <TabsList>
                            <TabsTrigger value="table">Table View</TabsTrigger>
                            <TabsTrigger value="cards">Card View</TabsTrigger>
                        </TabsList>
                        <TabsContent value="table">
                            <StudentTable students={filteredStudents} isFranchise={isFranchise} />
                        </TabsContent>
                        <TabsContent value="cards">
                            {/* Implement card view here if needed */}
                            <p>Card view coming soon...</p>
                        </TabsContent>
                    </Tabs>
                </>
            )}
        </div>
    )
}

