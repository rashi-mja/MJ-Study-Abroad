"use client";

import { useState } from "react";
import { AlertCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ReportIssueModalProps = {
    removeParticipantFromRoom: (roomId: string) => Promise<void>;
    deleteRoom: (roomId: string) => Promise<void>;
    selectedCallId: string | null;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    triggeredByMismatch?: boolean;
};


export default function ReportIssueModal({
    removeParticipantFromRoom,
    deleteRoom,
    selectedCallId,
    isModalOpen,
    setIsModalOpen,
    triggeredByMismatch
}: ReportIssueModalProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [reportDetails, setReportDetails] = useState("");

    const handleSubmit = async () => {
        if (selectedOption === "report-user") {
            console.log("Report submitted:", reportDetails);
            setReportDetails("")
        } else if (selectedOption === "participant-count" && selectedCallId) {
            await removeParticipantFromRoom(selectedCallId);
            await deleteRoom(selectedCallId);
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {triggeredByMismatch ? (
                                "WARNING!"
                            ) : (
                                "Report an Issue"
                            )}
                        </DialogTitle>
                        <DialogDescription>
                            {triggeredByMismatch ? (
                                "We have detected another device has abruptly shut down without closing the call. We recommend you join another call or create a new room."
                            ) : (
                                "Please select the type of issue you'd like to report."
                            )}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 gap-4">
                            {!triggeredByMismatch && (
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "h-auto py-4 px-4 justify-start items-start text-left transition-colors",
                                        selectedOption === "report-user"
                                            ? "border-blue-500 bg-blue-100"
                                            : "hover:bg-gray-100"
                                    )}
                                    onClick={() => setSelectedOption("report-user")}
                                >
                                    <div className="flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
                                        <span>Report inappropriate behavior</span>
                                    </div>
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                className={cn(
                                    "h-auto py-4 px-4 justify-start items-start text-left transition-colors",
                                    selectedOption === "participant-count"
                                        ? "border-blue-500 bg-blue-100"
                                        : "hover:bg-gray-100"
                                )}
                                onClick={() => setSelectedOption("participant-count")}
                            >
                                <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                                    <span>

                                        {triggeredByMismatch ? (
                                            "Join Another Room (Click Here)"
                                        ) : (
                                            "Incorrect participant count"
                                        )}
                                    </span>
                                </div>
                            </Button>
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out ${selectedOption === "report-user"
                                ? "max-h-[200px] opacity-100"
                                : "max-h-0 opacity-0 overflow-hidden"
                                }`}
                        >
                            <Textarea
                                placeholder="Please provide details about the issue..."
                                value={reportDetails}
                                onChange={(e) => setReportDetails(e.target.value)}
                                className="min-h-[100px] mt-2"
                            />
                        </div>
                    </div>
                    <DialogFooter className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(false)}
                            className="font-bold w-full"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            disabled={!selectedOption}
                            className="font-bold bg-black w-full"
                        >
                            Submit Report
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
