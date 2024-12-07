import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DashboardHeaderProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
    filter: string
    setFilter: (filter: string) => void
}

export function DashboardHeader({ searchTerm, setSearchTerm, filter, setFilter }: DashboardHeaderProps) {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <div className="flex space-x-4">
                <Input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                />
                <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by stage" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Stages</SelectItem>
                        <SelectItem value="interview scheduled">Interview Scheduled</SelectItem>
                        <SelectItem value="application submitted">Application Submitted</SelectItem>
                        <SelectItem value="offer accepted">Offer Accepted</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

