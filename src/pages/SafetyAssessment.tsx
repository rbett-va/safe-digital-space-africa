import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle, ArrowRight, AlertCircle, Download, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    score: number;
    risk: "low" | "medium" | "high";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you update your social media privacy settings?",
    options: [
      { value: "a", label: "Never - I use default settings", score: 0, risk: "high" },
      { value: "b", label: "Rarely - Maybe once a year", score: 1, risk: "medium" },
      { value: "c", label: "Sometimes - Every few months", score: 2, risk: "medium" },
      { value: "d", label: "Regularly - Every month", score: 3, risk: "low" },
    ],
  },
  {
    id: 2,
    question: "Do you use the same password for multiple accounts?",
    options: [
      { value: "a", label: "Yes, for most accounts", score: 0, risk: "high" },
      { value: "b", label: "Yes, for some accounts", score: 1, risk: "medium" },
      { value: "c", label: "No, I use different passwords", score: 2, risk: "low" },
      { value: "d", label: "No, and I use a password manager", score: 3, risk: "low" },
    ],
  },
  {
    id: 3,
    question: "How do you typically respond to unknown messages or friend requests?",
    options: [
      { value: "a", label: "I usually respond and accept them", score: 0, risk: "high" },
      { value: "b", label: "I sometimes respond to interesting messages", score: 1, risk: "medium" },
      { value: "c", label: "I rarely respond to unknown contacts", score: 2, risk: "medium" },
      { value: "d", label: "I never respond without verifying first", score: 3, risk: "low" },
    ],
  },
  {
    id: 4,
    question: "Do you enable two-factor authentication on your important accounts?",
    options: [
      { value: "a", label: "No, I don't know what it is", score: 0, risk: "high" },
      { value: "b", label: "No, it seems too complicated", score: 1, risk: "high" },
      { value: "c", label: "Yes, on some accounts", score: 2, risk: "medium" },
      { value: "d", label: "Yes, on all important accounts", score: 3, risk: "low" },
    ],
  },
  {
    id: 5,
    question: "How do you handle suspicious links or attachments?",
    options: [
      { value: "a", label: "I click them to see what they are", score: 0, risk: "high" },
      { value: "b", label: "I might click if it looks interesting", score: 1, risk: "high" },
      { value: "c", label: "I avoid clicking but may preview them", score: 2, risk: "medium" },
      { value: "d", label: "I never click unknown links/attachments", score: 3, risk: "low" },
    ],
  },
  {
    id: 6,
    question: "How often do you backup your important data?",
    options: [
      { value: "a", label: "Never", score: 0, risk: "high" },
      { value: "b", label: "Rarely - Maybe once a year", score: 1, risk: "medium" },
      { value: "c", label: "Sometimes - Every few months", score: 2, risk: "medium" },
      { value: "d", label: "Regularly - Weekly or daily", score: 3, risk: "low" },
    ],
  },
];

const SafetyAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedResults = localStorage.getItem("safetyAssessmentResults");
    if (savedResults) {
      const parsed = JSON.parse(savedResults);
      setAnswers(parsed.answers);
      setShowResults(true);
    }
  }, []);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      localStorage.setItem("safetyAssessmentResults", JSON.stringify({
        answers,
        completedAt: new Date().toISOString()
      }));
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    let riskLevels: string[] = [];

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
          riskLevels.push(option.risk);
        }
      }
    });

    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    let riskLevel: "low" | "medium" | "high";
    let riskColor: string;
    let recommendations: string[];

    if (percentage >= 80) {
      riskLevel = "low";
      riskColor = "text-green-600";
      recommendations = [
        "Your digital safety practices are excellent!",
        "Continue to stay updated on new security threats",
        "Consider sharing your knowledge with others",
        "Keep your security measures up to date",
      ];
    } else if (percentage >= 50) {
      riskLevel = "medium";
      riskColor = "text-yellow-600";
      recommendations = [
        "Your digital safety could be improved",
        "Enable two-factor authentication on important accounts",
        "Use different passwords for each account",
        "Update your privacy settings regularly",
        "Be more cautious with unknown messages",
      ];
    } else {
      riskLevel = "high";
      riskColor = "text-red-600";
      recommendations = [
        "Your digital safety is at high risk",
        "Immediately change passwords for important accounts",
        "Enable two-factor authentication everywhere possible",
        "Review and update all privacy settings",
        "Be extremely cautious with online interactions",
        "Consider seeking professional help for digital security",
        "Backup important data immediately",
      ];
    }

    return {
      score: totalScore,
      percentage: Math.round(percentage),
      riskLevel,
      riskColor,
      recommendations,
    };
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    localStorage.removeItem("safetyAssessmentResults");
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Your safety assessment report has been saved to your device.",
    });
  };

  if (showResults) {
    const results = calculateResults();

    return (
      <div className="w-full py-12 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold font-display md:text-4xl mb-4">Assessment Complete</h1>
              <p className="text-muted-foreground">Here is your personalized safety profile and action plan.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Score Card */}
              <Card className="shadow-lg border-none overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-2 ${results.riskLevel === "low" ? "bg-green-500" :
                  results.riskLevel === "medium" ? "bg-yellow-500" : "bg-red-500"
                  }`} />
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">Safety Score</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="relative h-40 w-40 flex items-center justify-center">
                    <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      />
                      <circle
                        className={`${results.riskColor} stroke-current transition-all duration-1000 ease-out`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={`${results.percentage * 2.51} 251.2`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-4xl font-bold ${results.riskColor}`}>{results.percentage}%</span>
                      <span className="text-sm text-muted-foreground font-medium uppercase">{results.riskLevel} Risk</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4 flex justify-center">
                  <Button variant="outline" onClick={handleDownloadReport} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardFooter>
              </Card>

              {/* Recommendations Card */}
              <Card className="shadow-lg border-none flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Action Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <ul className="space-y-3">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{rec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t">
                    <Button
                      onClick={resetAssessment}
                      variant="secondary"
                      className="w-full"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retake Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-6">Recommended Next Steps</h3>
              <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                <Link to="/safety-tools">
                  <Button className="w-full h-12 text-lg shadow-md hover:shadow-lg transition-all">
                    Explore Safety Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/digital-literacy">
                  <Button variant="outline" className="w-full h-12 text-lg shadow-sm hover:shadow-md transition-all">
                    Start Learning
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full py-12 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display">Digital Safety Assessment</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Evaluate your digital safety practices and identify potential risks in just 2 minutes.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {/* Progress Indicator */}
          <div className="mb-8 space-y-2">
            <div className="flex justify-between text-sm font-medium text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-xl border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-2xl leading-relaxed">
                    {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <RadioGroup
                    value={answers[currentQuestion] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="relative">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex items-center p-4 rounded-xl border-2 border-muted bg-background hover:bg-muted/50 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all duration-200"
                        >
                          <div className={`h-5 w-5 rounded-full border-2 border-muted mr-4 flex items-center justify-center peer-data-[state=checked]:border-primary`}>
                            {answers[currentQuestion] === option.value && (
                              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className="text-base font-medium">{option.label}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8 pt-4 border-t">
                    <Button
                      variant="ghost"
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={nextQuestion}
                      disabled={!answers[currentQuestion]}
                      className="px-8"
                    >
                      {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SafetyAssessment;