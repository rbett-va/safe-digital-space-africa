import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    BookOpen,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Menu,
    PlayCircle,
    FileText,
    Shield,
    Lock,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Certificate from "@/components/Certificate";
import { courses, Course, Module, Lesson } from "@/data/courses";

const CourseViewer = () => {
    const { courseId } = useParams();
    const { toast } = useToast();
    const [currentLessonId, setCurrentLessonId] = useState<string>("");
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [quizResults, setQuizResults] = useState<Record<string, boolean>>({}); // lessonId -> passed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Quiz State
    const [currentQuizAnswers, setCurrentQuizAnswers] = useState<Record<string, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const course = courses[courseId as string] || courses["privacy-basics"];

    // Initialize state from localStorage or defaults
    useEffect(() => {
        const savedProgress = localStorage.getItem(`course_progress_${course.id}`);
        if (savedProgress) {
            const { completed, quizzes } = JSON.parse(savedProgress);
            setCompletedLessons(completed || []);
            setQuizResults(quizzes || []);
        }

        // Set initial lesson
        if (!currentLessonId && course.modules.length > 0) {
            setCurrentLessonId(course.modules[0].lessons[0].id);
        }
    }, [course.id]);

    // Save progress
    useEffect(() => {
        localStorage.setItem(`course_progress_${course.id}`, JSON.stringify({
            completed: completedLessons,
            quizzes: quizResults
        }));
    }, [completedLessons, quizResults, course.id]);

    const currentModuleIndex = course.modules.findIndex(m => m.lessons.some(l => l.id === currentLessonId));
    const currentModule = course.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons.find(l => l.id === currentLessonId);

    const isModuleLocked = (moduleIndex: number) => {
        if (moduleIndex === 0) return false;
        const prevModule = course.modules[moduleIndex - 1];
        // Find the quiz in the previous module
        const quizLesson = prevModule.lessons.find(l => l.type === 'quiz');
        if (!quizLesson) return false; // If no quiz, assume unlocked (or check if all lessons completed)

        return !quizResults[quizLesson.id]; // Locked if quiz not passed
    };

    const handleLessonComplete = () => {
        if (currentLesson && !completedLessons.includes(currentLesson.id)) {
            setCompletedLessons([...completedLessons, currentLesson.id]);
            toast({
                title: "Lesson Completed",
                description: "Great job! Moving to the next item.",
                className: "bg-green-600 text-white border-none"
            });
        }
        navigateToNext();
    };

    const handleQuizSubmit = () => {
        if (!currentLesson || !currentLesson.questions) return;

        let correctCount = 0;
        currentLesson.questions.forEach(q => {
            if (currentQuizAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        const passed = correctCount === currentLesson.questions.length; // Require 100% to pass? Or 80%? Let's say 100% for now or > 70%
        // Let's make it strict: 100% to pass as per "Modules unlock only after passing" usually implies mastery.
        // Or let's say > 50%.
        const isPass = (correctCount / currentLesson.questions.length) >= 0.7;

        setQuizSubmitted(true);

        if (isPass) {
            setQuizResults({ ...quizResults, [currentLesson.id]: true });
            if (!completedLessons.includes(currentLesson.id)) {
                setCompletedLessons([...completedLessons, currentLesson.id]);
            }
            toast({
                title: "Quiz Passed!",
                description: `You got ${correctCount}/${currentLesson.questions.length} correct.`,
                className: "bg-green-600 text-white border-none"
            });
        } else {
            toast({
                title: "Quiz Failed",
                description: "Please review the material and try again.",
                variant: "destructive"
            });
        }
    };

    const navigateToNext = () => {
        // Find next lesson
        const allLessons = course.modules.flatMap(m => m.lessons);
        const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
        if (currentIndex < allLessons.length - 1) {
            const nextLesson = allLessons[currentIndex + 1];
            // Check if next lesson belongs to a locked module
            const nextModuleIndex = course.modules.findIndex(m => m.lessons.some(l => l.id === nextLesson.id));
            if (!isModuleLocked(nextModuleIndex)) {
                setCurrentLessonId(nextLesson.id);
                // Reset quiz state if moving to a quiz
                setQuizSubmitted(false);
                setCurrentQuizAnswers({});
            } else {
                toast({
                    title: "Module Locked",
                    description: "You must pass the previous module's quiz to unlock this.",
                    variant: "destructive"
                });
            }
        }
    };

    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const progressPercentage = (completedLessons.length / totalLessons) * 100;
    const isCourseCompleted = progressPercentage === 100;

    const SidebarContent = () => (
        <div className="h-full flex flex-col bg-slate-50 border-l">
            <div className="p-6 border-b bg-white shadow-sm">
                <h2 className="font-bold text-xl text-slate-800 mb-4">Course Content</h2>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm font-medium text-slate-600">
                        <span>{Math.round(progressPercentage)}% Completed</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3 bg-slate-100 [&>div]:bg-teal-500" />
                </div>
                {isCourseCompleted && (
                    <div className="mt-6">
                        <Certificate
                            studentName="Learner"
                            courseName={course.title}
                            date={new Date().toLocaleDateString()}
                        />
                    </div>
                )}
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {course.modules.map((module, index) => {
                        const locked = isModuleLocked(index);
                        return (
                            <div key={module.id} className={`rounded-xl overflow-hidden border transition-all ${locked ? "bg-slate-50 border-slate-200 opacity-70" : "bg-teal-50/50 border-teal-100"}`}>
                                <div className="p-4 bg-white/50 border-b border-slate-100/50 flex justify-between items-center">
                                    <h3 className="font-bold text-slate-700">
                                        Module {index + 1}: {module.title}
                                    </h3>
                                    {locked ? <Lock className="h-4 w-4 text-slate-400" /> : <div className="h-2 w-2 rounded-full bg-teal-500" />}
                                </div>
                                <div className="p-2 space-y-1">
                                    {module.lessons.map((lesson) => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => {
                                                if (!locked) {
                                                    setCurrentLessonId(lesson.id);
                                                    setIsSidebarOpen(false);
                                                    setQuizSubmitted(false);
                                                    setCurrentQuizAnswers({});
                                                }
                                            }}
                                            disabled={locked}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${currentLessonId === lesson.id
                                                ? "bg-teal-100 text-teal-900 font-medium shadow-sm"
                                                : "hover:bg-white text-slate-600 hover:text-teal-700 hover:shadow-sm"
                                                }`}
                                        >
                                            <div className="flex-shrink-0">
                                                {completedLessons.includes(lesson.id) ? (
                                                    <CheckCircle className="h-5 w-5 text-teal-600" />
                                                ) : lesson.type === "quiz" ? (
                                                    <Shield className="h-5 w-5 text-slate-400" />
                                                ) : (
                                                    <FileText className="h-5 w-5 text-slate-400" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="truncate text-sm">{lesson.title}</p>
                                                <p className="text-xs opacity-70">{lesson.duration}</p>
                                            </div>
                                            {locked && <Lock className="h-3 w-3 text-slate-300" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>
            <div className="p-4 border-t bg-white">
                <Link to="/digital-literacy">
                    <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-200 hover:bg-teal-50">
                        <ChevronLeft className="h-4 w-4 mr-2" /> Back to Courses
                    </Button>
                </Link>
            </div>
        </div>
    );

    const QuizView = ({ lesson }: { lesson: Lesson }) => {
        const isPassed = quizResults[lesson.id];
        const questionCount = lesson.questions?.length || 0;

        return (
            <div className="max-w-3xl mx-auto">
                {/* Quiz Header Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-500 bg-white p-4 rounded-xl border shadow-sm">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-teal-500" />
                        <span className="font-medium">{questionCount} Questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full border-2 border-teal-500 flex items-center justify-center text-[10px] font-bold text-teal-500">L</div>
                        <span className="font-medium">{lesson.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
                        <span className="font-medium">70% Pass Mark</span>
                    </div>
                </div>

                {isPassed && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 bg-teal-50 border border-teal-200 rounded-xl p-6 flex items-start gap-4"
                    >
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🎉</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-teal-900 text-lg mb-1">Great job! You've completed this quiz.</h3>
                            <p className="text-teal-700">No need to retake—keep going! You can proceed to the next module.</p>
                        </div>
                    </motion.div>
                )}

                {!quizSubmitted && !isPassed && (
                    <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5" /> Important Quiz Instructions
                        </h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2">
                                <span className="font-bold text-slate-400">1.</span>
                                <span>We'll always save your very first attempt, no matter how you score.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-slate-400">2.</span>
                                <span>If you pass, you're good to go—no need to retake.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-slate-400">3.</span>
                                <span>Heads up: Once you start the quiz, please stay on the quiz page.</span>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Questions */}
                <div className="space-y-8 mb-12">
                    {lesson.questions?.map((q, idx) => (
                        <Card key={q.id} className="border-slate-200 shadow-sm overflow-hidden">
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                                <CardTitle className="text-lg font-medium text-slate-800">
                                    <span className="text-teal-600 mr-2">{idx + 1}.</span> {q.text}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <RadioGroup
                                    value={currentQuizAnswers[q.id]?.toString()}
                                    onValueChange={(val) => {
                                        if (!quizSubmitted) {
                                            setCurrentQuizAnswers({
                                                ...currentQuizAnswers,
                                                [q.id]: parseInt(val)
                                            });
                                        }
                                    }}
                                    disabled={quizSubmitted && isPassed}
                                >
                                    {q.options.map((opt, optIdx) => (
                                        <div key={optIdx} className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${quizSubmitted
                                                ? optIdx === q.correctAnswer
                                                    ? "bg-green-50 border-green-200"
                                                    : currentQuizAnswers[q.id] === optIdx
                                                        ? "bg-red-50 border-red-200"
                                                        : "border-transparent"
                                                : currentQuizAnswers[q.id] === optIdx
                                                    ? "bg-teal-50 border-teal-200"
                                                    : "border-transparent hover:bg-slate-50"
                                            }`}>
                                            <RadioGroupItem value={optIdx.toString()} id={`${q.id}-${optIdx}`} className="text-teal-600 border-slate-300" />
                                            <Label htmlFor={`${q.id}-${optIdx}`} className={`flex-1 cursor-pointer ${quizSubmitted
                                                    ? optIdx === q.correctAnswer
                                                        ? "text-green-700 font-medium"
                                                        : currentQuizAnswers[q.id] === optIdx
                                                            ? "text-red-700"
                                                            : "text-slate-600"
                                                    : "text-slate-700"
                                                }`}>
                                                {opt}
                                            </Label>
                                            {quizSubmitted && optIdx === q.correctAnswer && <CheckCircle className="h-4 w-4 text-green-600" />}
                                        </div>
                                    ))}
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="sticky bottom-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex justify-between items-center z-10">
                    <Button variant="ghost" onClick={() => {
                        // Logic to go back
                    }}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>

                    {!isPassed ? (
                        <Button
                            onClick={handleQuizSubmit}
                            className="bg-teal-600 hover:bg-teal-700 text-white min-w-[150px]"
                            disabled={Object.keys(currentQuizAnswers).length !== questionCount}
                        >
                            Submit Quiz
                        </Button>
                    ) : (
                        <div className="flex gap-3">
                            <Button variant="outline" onClick={() => {
                                setQuizSubmitted(false);
                                setCurrentQuizAnswers({});
                            }}>
                                Retake Quiz
                            </Button>
                            <Button onClick={navigateToNext} className="bg-teal-600 hover:bg-teal-700">
                                Next Module <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row overflow-hidden bg-slate-50/30">
            {/* Mobile Sidebar Trigger */}
            <div className="md:hidden p-4 border-b flex items-center justify-between bg-white sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <span className="font-bold text-slate-800 truncate">{course.title}</span>
                </div>
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="p-0 w-80">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Layout - Content Left, Sidebar Right */}
            <ResizablePanelGroup direction="horizontal" className="flex-1">
                {/* Main Content Area */}
                <ResizablePanel defaultSize={75}>
                    <ScrollArea className="h-full">
                        <div className="max-w-5xl mx-auto p-6 md:p-12">
                            <AnimatePresence mode="wait">
                                {currentLesson && (
                                    <motion.div
                                        key={currentLesson.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="mb-8 border-b border-slate-200 pb-6">
                                            <div className="flex items-center gap-2 text-sm font-medium text-teal-600 mb-2 uppercase tracking-wider">
                                                <span className="bg-teal-50 px-2 py-1 rounded-md">
                                                    {currentLesson.type === 'quiz' ? 'Assessment' : 'Lesson'}
                                                </span>
                                                <span>•</span>
                                                <span>{currentLesson.duration}</span>
                                            </div>
                                            <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-2">
                                                {currentLesson.title}
                                            </h1>
                                        </div>

                                        {currentLesson.type === 'text' && (
                                            <div className="prose prose-lg prose-slate max-w-none mb-12 prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-teal-700 prose-a:text-teal-600">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {currentLesson.content || ""}
                                                </ReactMarkdown>

                                                <div className="mt-12 flex justify-end">
                                                    <Button
                                                        onClick={handleLessonComplete}
                                                        size="lg"
                                                        className={completedLessons.includes(currentLesson.id) ? "bg-green-600 hover:bg-green-700" : "bg-teal-600 hover:bg-teal-700"}
                                                    >
                                                        {completedLessons.includes(currentLesson.id) ? (
                                                            <>Completed <CheckCircle className="ml-2 h-5 w-5" /></>
                                                        ) : (
                                                            <>Mark as Complete <ChevronRight className="ml-2 h-5 w-5" /></>
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        )}

                                        {currentLesson.type === 'quiz' && (
                                            <QuizView lesson={currentLesson} />
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollArea>
                </ResizablePanel>

                <ResizableHandle className="hidden md:flex bg-slate-200" />

                {/* Sidebar Area - Now on the Right */}
                <ResizablePanel defaultSize={25} minSize={20} maxSize={35} className="hidden md:block">
                    <SidebarContent />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default CourseViewer;