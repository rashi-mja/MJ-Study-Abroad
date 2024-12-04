import { useState, useEffect } from "react";
import questionsData from "./speakingQuestionSets.json"; // Adjust the path as needed
import { ArrowLeft, ArrowRight } from "lucide-react";

type QuestionSet = {
    setName: string;
    introduction: string[];
    longTurn: {
        topic: string;
        points: string[];
    };
    discussion: string[];
};

export default function ShowSpeakingQuestions({ randomModuleSetFromFirebase }: { randomModuleSetFromFirebase: number[] | null }) {
    const [currentSet, setCurrentSet] = useState<QuestionSet | null>(null);
    const [currentModule, setCurrentModule] = useState<"introduction" | "longTurn" | "discussion">("introduction");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [isLastQuestion, setIsLastQuestion] = useState(false)

    useEffect(() => {
        if (randomModuleSetFromFirebase) {
            // Use the first value of randomModuleSet to determine the question set
            const ModuleSetFromFirebase = randomModuleSetFromFirebase[0] % questionsData.sets.length;
            setCurrentSet(questionsData.sets[ModuleSetFromFirebase]);
        }
    }, [randomModuleSetFromFirebase]);

    const startTest = () => {
        setIsTestStarted(true); // Begin the test
    };

    const handleNextQuestion = () => {
        if (!currentSet) return;

        if (currentModule === "longTurn") {
            // Only one topic in the long turn
            setCurrentModule("discussion");
            setCurrentQuestionIndex(0);
            return;
        }

        if (currentQuestionIndex < currentSet[currentModule].length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsLastQuestion(currentModule === "discussion" && currentQuestionIndex + 1 === currentSet[currentModule].length - 1);
        } else {
            // Move to the next module
            if (currentModule === "introduction") {
                setCurrentModule("longTurn");
                setIsLastQuestion(false);
            } else if (currentModule === "discussion") {
                // Switch participant
                setCurrentModule("introduction");
                setCurrentQuestionIndex(0);
                setCurrentSet(questionsData.sets[Math.floor(Math.random() * questionsData.sets.length)])
                setIsLastQuestion(false);
            }
        }
    };

    const handlePrevQuestion = () => {
        if (!currentSet) return;

        if (currentModule === "discussion") {
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            } else {
                // Move back to "longTurn"
                setCurrentModule("longTurn");
            }
        } else if (currentModule === "longTurn") {
            // Move back to "introduction" at the last question
            setCurrentModule("introduction");
            setCurrentQuestionIndex(currentSet.introduction.length - 1);
        } else if (currentModule === "introduction") {
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            } else {
                // If it's the first question of "introduction," move to the previous set
                // const previousSet = questionsData.sets[Math.floor(Math.random() * questionsData.sets.length)];
                // setCurrentSet(previousSet);
                // setCurrentModule("discussion");
                // setCurrentQuestionIndex(previousSet.discussion.length - 1);
            }
        }
    };

    if (!currentSet) return <div>Loading...</div>;
    const currentQuestion = currentModule === "longTurn" ? currentSet.longTurn.topic : currentSet[currentModule][currentQuestionIndex];

    return (
        <div className="min-h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4 rounded-3xl">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden">
                {isTestStarted ? (
                    <div className="p-5 md:p-8">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                            Speaking Section
                        </h2>
                        <div className="bg-gray-100 rounded-lg p-6 mb-6">
                            <p className="text-base md:text-xl font-semibold text-gray-700 mb-2">Module: {currentModule.charAt(0).toUpperCase() + currentModule.slice(1)}</p>
                            <p className="text-base md:text-lg text-gray-600">{currentQuestion}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                onClick={handlePrevQuestion}
                                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                aria-label="Previous Question"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Prev
                            </button>
                            <button
                                onClick={handleNextQuestion}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                aria-label="Next Question"
                            >
                                {isLastQuestion ? "Next Set" : "Next"}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 text-center">
                        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Speaking Section Rules</h1>
                        <div className="bg-blue-100 rounded-lg p-6 mb-6">
                            <p className="text-base md:text-lg text-gray-700 mb-4">
                                Both participants are given different module sets.
                            </p>
                            <p className="text-base md:text-lg text-gray-700">
                                Decide among yourselves who wants to start asking questions first.
                            </p>
                        </div>
                        <button
                            onClick={startTest}
                            className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                        >
                            Start Speaking Section
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
