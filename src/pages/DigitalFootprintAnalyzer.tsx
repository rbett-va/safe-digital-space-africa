import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, CheckCircle2 } from "lucide-react";

const questions = [
    {
        id: 1,
        text: "How often do you search for your own name online?",
        options: [
            { text: "Never", score: 10 },
            { text: "Once a year", score: 5 },
            { text: "Regularly", score: 0 },
        ]
    },
    {
        id: 2,
        text: "Are your social media profiles public?",
        options: [
            { text: "Yes, all of them", score: 10 },
            { text: "Some are public", score: 5 },
            { text: "No, all are private", score: 0 },
        ]
    },
    {
        id: 3,
        text: "Do you use the same username across multiple platforms?",
        options: [
            { text: "Yes, everywhere", score: 10 },
            { text: "Sometimes", score: 5 },
            { text: "No, I vary them", score: 0 },
        ]
    },
    {
        id: 4,
        text: "Have you ever posted your phone number or address publicly?",
        options: [
            { text: "Yes", score: 20 },
            { text: "Maybe in the past", score: 10 },
            { text: "Never", score: 0 },
        ]
    },
    {
        id: 5,
        text: "Do you tag your location in posts?",
        options: [
            { text: "Always", score: 10 },
            { text: "Sometimes", score: 5 },
            { text: "Never", score: 0 },
        ]
    }
];

const DigitalFootprintAnalyzer = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (points: number) => {
        const newScore = score + points;
        setScore(newScore);
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScore(0);
        setCurrentStep(0);
        setShowResult(false);
    };

    const getRiskLevel = () => {
        if (score < 15) return { 
            level: "Low Risk", 
            color: "text-green-500", 
            bgColor: "bg-green-500",
            desc: "You have a minimal digital footprint. Keep it up!",
            recommendations: [
                "Continue monitoring your online presence",
                "Maintain current privacy settings",
                "Regularly review your social media content"
            ]
        };
        if (score < 35) return { 
            level: "Moderate Risk", 
            color: "text-yellow-500", 
            bgColor: "bg-yellow-500",
            desc: "Some of your info is likely visible. Review your privacy settings.",
            recommendations: [
                "Review and tighten privacy settings on all platforms",
                "Remove or limit personal information from public profiles",
                "Consider using different usernames for different platforms",
                "Regularly audit your social media posts"
            ]
        };
        return { 
            level: "High Risk", 
            color: "text-red-500", 
            bgColor: "bg-red-500",
            desc: "You have a significant digital footprint. Take action to remove personal info.",
            recommendations: [
                "Immediately review and secure all social media accounts",
                "Remove personal information from public profiles",
                "Use privacy-focused browsers and search engines",
                "Consider professional online reputation management",
                "Set up Google Alerts for your name"
            ]
        };
    };

    const getSegments = () => {
        const segments = [];
        for (let i = 0; i < 5; i++) {
            const isActive = i <= currentStep;
            segments.push(
                <div 
                    key={i}
                    className={`h-1 flex-1 rounded-full ${isActive ? 'bg-primary' : 'bg-zinc-200 dark:bg-zinc-800'}`}
                />
            );
        }
        return segments;
    };

    if (showResult) {
        const result = getRiskLevel();
        return (
            <div className="w-full h-full flex flex-col bg-background-light dark:bg-background-dark font-display">
                {/* Top App Bar */}
                <div className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex size-12 shrink-0 items-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="h-6 w-6 mx-auto" />
                    </button>
                    <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Digital Footprint Analysis</h2>
                    <div className="flex size-12 shrink-0 items-center"></div>
                </div>

                {/* Results Content */}
                <div className="flex-1 px-4 py-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                                <Eye className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                                Analysis Complete
                            </h1>
                            <p className="text-gray-600">
                                Here's what we found about your digital footprint
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
                            {/* Risk Level */}
                            <div className="text-center mb-8">
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${result.bgColor} mb-4`}>
                                    <span className="text-2xl font-bold text-white">{Math.max(0, 100 - score)}</span>
                                </div>
                                <h2 className={`text-3xl font-bold ${result.color} mb-2`}>{result.level}</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">{result.desc}</p>
                            </div>

                            {/* Score Breakdown */}
                            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 mb-6">
                                <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Score Breakdown</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-zinc-900 dark:text-white">{score}</div>
                                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Risk Points</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">{Math.max(0, 100 - score)}</div>
                                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Safety Score</div>
                                    </div>
                                </div>
                            </div>

                            {/* Recommendations */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Recommendations</h3>
                                <div className="space-y-3">
                                    {result.recommendations.map((rec, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-zinc-700 dark:text-zinc-300">{rec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button 
                                    onClick={reset}
                                    className="flex-1 h-12 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Analyze Again
                                </button>
                                <button 
                                    onClick={() => navigate('/resources')}
                                    className="flex-1 h-12 px-6 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    Get Help
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const question = questions[currentStep];
    const progress = ((currentStep) / questions.length) * 100;

    return (
        <div className="w-full h-full flex flex-col bg-background-light dark:bg-background-dark font-display">
            {/* Top App Bar */}
            <div className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex size-12 shrink-0 items-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                    <ArrowLeft className="h-6 w-6 mx-auto" />
                </button>
                <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Digital Footprint Analyzer</h2>
                <div className="flex size-12 shrink-0 items-center"></div>
            </div>

            {/* Progress Indicator */}
            <div className="px-4 py-4">
                <div className="flex w-full items-center gap-2 mb-2">
                    {getSegments()}
                </div>
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                </div>
            </div>

            {/* Question Content */}
            <div className="flex-1 px-4 py-6">
                <div className="max-w-2xl mx-auto h-full flex flex-col">
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                                <Eye className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                                {question.text}
                            </h1>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Choose the option that best describes your behavior
                            </p>
                        </div>

                        <div className="space-y-4">
                            {question.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(opt.score)}
                                    className="w-full p-4 text-left bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-zinc-900 dark:text-white font-medium group-hover:text-primary">
                                            {opt.text}
                                        </span>
                                        <div className="w-6 h-6 border-2 border-zinc-300 dark:border-zinc-600 rounded-full group-hover:border-primary transition-colors"></div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-8">
                        <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalFootprintAnalyzer;