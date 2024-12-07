import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Student {
    id: string
    stage: string
    // Add other properties as needed
}

interface DashboardSummaryProps {
    students: Student[]
}

export function DashboardSummary({ students }: DashboardSummaryProps) {
    const totalStudents = students.length
    const interviewScheduled = students.filter(s => s.stage === 'Interview Scheduled').length
    const applicationSubmitted = students.filter(s => s.stage === 'Application Submitted').length
    const offerAccepted = students.filter(s => s.stage === 'Offer Accepted').length

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalStudents}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Interview Scheduled</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{interviewScheduled}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Application Submitted</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{applicationSubmitted}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Offer Accepted</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{offerAccepted}</div>
                </CardContent>
            </Card>
        </div>
    )
}

