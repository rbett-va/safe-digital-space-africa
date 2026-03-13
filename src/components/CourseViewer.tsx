import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lock, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Subtopic {
  id: string;
  title: string;
  content: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

interface Module {
  id: string;
  title: string;
  subtopics: Subtopic[];
}

interface CourseViewerProps {
  courseName: string;
  modules: Module[];
  onClose: () => void;
}

export const CourseViewer = ({ courseName, modules, onClose }: CourseViewerProps) => {
  const { toast } = useToast();
  const [progress, setProgress] = useState<Record<string, { completed: boolean; score: number }>>({});
  const [currentModule, setCurrentModule] = useState(0);
  const [currentSubtopic, setCurrentSubtopic] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`course_${courseName}`);
    if (saved) setProgress(JSON.parse(saved));
  }, [courseName]);

  // Handle escape key for easy exit
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const saveProgress = (newProgress: typeof progress) => {
    setProgress(newProgress);
    localStorage.setItem(`course_${courseName}`, JSON.stringify(newProgress));
  };

  const currentSubtopicData = modules[currentModule]?.subtopics[currentSubtopic];
  const subtopicId = `${currentModule}-${currentSubtopic}`;

  const calculateOverallProgress = () => {
    const total = modules.reduce((sum, m) => sum + m.subtopics.length, 0);
    const completed = Object.values(progress).filter(p => p.completed).length;
    return Math.round((completed / total) * 100);
  };

  const generateCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      
      const imgWidth = 297;
      const pageHeight = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      pdf.save(`${courseName}-Certificate-${currentDate}.pdf`);
      
      toast({
        title: "Certificate Downloaded!",
        description: "Your digital literacy certificate has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating your certificate. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleTakeQuiz = () => {
    setShowQuiz(true);
    setQuizAnswers(new Array(currentSubtopicData.quiz.length).fill(-1));
    setQuizSubmitted(false);
  };

  const handleSubmitQuiz = () => {
    const score = quizAnswers.reduce((acc, answer, idx) => 
      answer === currentSubtopicData.quiz[idx].correctAnswer ? acc + 1 : acc, 0);
    const percentage = (score / currentSubtopicData.quiz.length) * 100;
    
    const newProgress = { ...progress, [subtopicId]: { completed: percentage >= 70, score: percentage } };
    saveProgress(newProgress);
    setQuizSubmitted(true);

    if (percentage >= 70) {
      toast({ 
        title: "Great Work! 🎉", 
        description: `You scored ${percentage.toFixed(0)}%. You've completed this section! You can continue to the next topic when you're ready.` 
      });
    } else {
      toast({ 
        title: "Keep Going! 💪", 
        description: `You scored ${percentage.toFixed(0)}%. Take your time to review the content, and you can retake this quiz whenever you feel prepared. There's no rush!`, 
        variant: "destructive" 
      });
    }
  };

  const isSubtopicUnlocked = (moduleIdx: number, subtopicIdx: number) => {
    if (subtopicIdx === 0) return true;
    return progress[`${moduleIdx}-${subtopicIdx - 1}`]?.completed || false;
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">{courseName}</h1>
            <p className="text-sm text-muted-foreground mt-1">Press <kbd className="px-2 py-1 bg-muted rounded text-xs">ESC</kbd> anytime to exit quickly</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={onClose} variant="outline" className="transition-smooth">
              ← Exit Course
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm">Course Progress</CardTitle>
              <Progress value={calculateOverallProgress()} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">{calculateOverallProgress()}% Complete</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module, mIdx) => (
                <div key={module.id}>
                  <h3 className="font-semibold text-sm mb-2">{module.title}</h3>
                  {module.subtopics.map((subtopic, sIdx) => {
                    const unlocked = isSubtopicUnlocked(mIdx, sIdx);
                    const completed = progress[`${mIdx}-${sIdx}`]?.completed;
                    return (
                      <Button
                        key={subtopic.id}
                        variant={mIdx === currentModule && sIdx === currentSubtopic ? "secondary" : "ghost"}
                        className="w-full justify-start text-xs mb-1"
                        onClick={() => unlocked && (setCurrentModule(mIdx), setCurrentSubtopic(sIdx), setShowQuiz(false))}
                        disabled={!unlocked}
                      >
                        {completed ? <CheckCircle2 className="mr-2 h-3 w-3" /> : unlocked ? null : <Lock className="mr-2 h-3 w-3" />}
                        {subtopic.title}
                      </Button>
                    );
                  })}
                </div>
              ))}
              {calculateOverallProgress() === 100 && (
                <Button className="w-full" variant="default" onClick={generateCertificate}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>{currentSubtopicData?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {!showQuiz ? (
                <div className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="whitespace-pre-wrap">{currentSubtopicData?.content}</p>
                  </div>
                  <Button onClick={handleTakeQuiz} className="mt-6 transition-smooth">Ready to Test Your Knowledge?</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {currentSubtopicData.quiz.map((q, qIdx) => (
                    <div key={qIdx} className="space-y-3">
                      <p className="font-semibold">Question {qIdx + 1}: {q.question}</p>
                      {q.options.map((opt, oIdx) => (
                        <Button
                          key={oIdx}
                          variant={quizAnswers[qIdx] === oIdx ? "secondary" : "outline"}
                          className="w-full justify-start"
                          onClick={() => !quizSubmitted && setQuizAnswers(prev => { const n = [...prev]; n[qIdx] = oIdx; return n; })}
                          disabled={quizSubmitted}
                        >
                          {opt}
                        </Button>
                      ))}
                    </div>
                  ))}
                  {!quizSubmitted ? (
                    <Button onClick={handleSubmitQuiz} disabled={quizAnswers.includes(-1)} className="transition-smooth">
                      {quizAnswers.includes(-1) ? "Please select all answers" : "Complete Assessment"}
                    </Button>
                  ) : (
                    <div className="space-x-2">
                      <Button onClick={() => setShowQuiz(false)} className="transition-smooth">
                        ← Back to Content
                      </Button>
                      <Button variant="outline" onClick={handleTakeQuiz} className="transition-smooth">
                        Try Again (When Ready)
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Certificate Template */}
        {calculateOverallProgress() === 100 && (
          <div
            ref={certificateRef}
            className="fixed -left-[9999px] top-0 z-[-1] bg-white p-8 w-[800px] h-[600px] border-4 border-primary rounded-lg shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              fontFamily: 'serif'
            }}
          >
            <div className="h-full flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-4 border-white/30 rounded-full"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/30 rounded-full"></div>
              
              <div className="z-10">
                {/* Header */}
                <h1 className="text-4xl font-bold mb-2 tracking-wide">Certificate of Completion</h1>
                <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
                
                {/* Recipient */}
                <div className="mb-8">
                  <p className="text-xl mb-2">This certifies that</p>
                  <p className="text-3xl font-bold mb-4 border-b-2 border-white/50 pb-2 inline-block">
                    Digital Learner
                  </p>
                  <p className="text-lg">has successfully completed</p>
                </div>
                
                {/* Course Title */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 italic">{courseName}</h2>
                  <div className="flex justify-center items-center space-x-8 text-sm">
                    <div>
                      <p className="font-semibold">Modules Completed:</p>
                      <p>{modules.length}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Achievement Level:</p>
                      <p>100% Complete</p>
                    </div>
                  </div>
                </div>
                
                {/* Date and Organization */}
                <div className="flex justify-between items-end w-full mt-8">
                  <div className="text-left">
                    <p className="text-sm font-semibold">Issued by:</p>
                    <p className="text-lg font-bold">Safe Digital Africa</p>
                    <p className="text-sm">Digital Literacy Platform</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">Date of Completion:</p>
                    <p className="text-lg">{new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>
                
                {/* Signature */}
                <div className="mt-8 border-t-2 border-white/30 pt-4">
                  <p className="text-sm italic">Empowering women and girls across Africa with essential digital skills</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};