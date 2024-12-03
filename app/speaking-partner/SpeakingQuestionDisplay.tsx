import { useState, useEffect } from "react";
import questionsData from "./speakingQuestionSets.json"; // Adjust the path as needed

type QuestionSet = {
    setName: string;
    introduction: string[];
    longTurn: {
        topic: string;
        points: string[];
    };
    discussion: string[];
};

export default function ShowSpeakingQuestions() {
    const [currentSet, setCurrentSet] = useState<QuestionSet | null>(null);
    const [currentModule, setCurrentModule] = useState<"introduction" | "longTurn" | "discussion">("introduction");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [isLastQuestion, setIsLastQuestion] = useState(false)
    useEffect(() => {
        const randomSet = questionsData.sets[Math.floor(Math.random() * questionsData.sets.length)];
        setCurrentSet(randomSet);
    }, []);

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
            } else if (currentModule === "discussion") {
                // Switch participant
                setCurrentModule("introduction");
                setCurrentQuestionIndex(0);
                setCurrentSet(questionsData.sets[Math.floor(Math.random() * questionsData.sets.length)])
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
        <div className="bg-red-500 w-full h-full p-4 text-white">
            {isTestStarted ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold">
                        Speaking Section Question Set
                    </h2>
                    <p className="text-xl mt-4">Module: {currentModule}</p>
                    <p className="text-lg mt-2">{currentQuestion}</p>
                    <button
                        onClick={handleNextQuestion}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {isLastQuestion ? "Next Set" : "Next Question"}
                    </button>
                    <button
                        onClick={handlePrevQuestion}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Prev Question
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Read Rules Before Starting</h1>
                    <p className="text-lg mb-6">
                        Both Participants are given diffrent Module sets
                        <br />
                        Decide among yourself who wants to start asking question first.
                    </p>
                    <button
                        onClick={startTest}
                        className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                    >
                        Start Speaking Section
                    </button>
                </div>
            )}
        </div>
    );
}
