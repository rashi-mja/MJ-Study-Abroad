'use client'

import { useState, useEffect } from 'react'
import { StudentTable } from './StudentTable'
import { DashboardHeader } from './DashBoardHeader'
import { DashboardSummary } from './DashboardSummary'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { db } from '@/firebaseConfig'

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
}


export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [students, setStudents] = useState<Student[]>([])

    // const students = [
    //     {
    //         id: '1',
    //         firstName: 'John',
    //         email: 'john@example.com',
    //         degree: 'Computer Science',
    //         studyYear: '2nd',
    //         course: 'Web Development',
    //         selectedDate: '2023-06-15T10:00:00.000Z',
    //         selectedTime: '10:00 AM',
    //         stage: 'Interview Scheduled',
    //     },
    //     // Add more mock data as needed
    // ]

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
                        studyPlan: data.studyPlan || '-'
                    }
                }) as Student[]
                setStudents(studentData)
            } catch (error) {
                console.error('Error fetching students:', error)
            }
        }

        fetchStudents()
    }, [])


    const filteredStudents = students
        .filter(student =>
            student.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(student =>
            filter === 'all' || student.stage?.toLowerCase() === filter.toLowerCase()
        )
    return (
        <div className="container mx-auto p-6 space-y-8">
            <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />
            <DashboardSummary students={students} />
            <Tabs defaultValue="table" className="w-full">
                <TabsList>
                    <TabsTrigger value="table">Table View</TabsTrigger>
                    <TabsTrigger value="cards">Card View</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <StudentTable students={filteredStudents} />
                </TabsContent>
                <TabsContent value="cards">
                    {/* Implement card view here if needed */}
                    <p>Card view coming soon...</p>
                </TabsContent>
            </Tabs>
        </div>
    )
}

