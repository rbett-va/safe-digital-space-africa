import { useState } from "react";
import { motion } from "framer-motion";
import { CourseViewer } from "@/components/CourseViewer";
import { courseData } from "@/data/courseData";
import { CourseCard } from "@/components/CustomCards";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Target } from "lucide-react";

const courses = [
  {
    title: "Online Privacy Fundamentals",
    description: "Learn how to secure your personal data, manage privacy settings, and browse safely.",
    level: "Beginner",
    duration: "2 hours",
    modulesCount: 4,
    thumbnail: "/images/course-privacy.png",
    progress: 45,
    isLocked: false,
    link: "/digital-literacy/privacy"
  },
  {
    title: "Social Media Safety",
    description: "Master the art of safe social networking, identifying fake profiles, and handling harassment.",
    level: "Beginner",
    duration: "1.5 hours",
    modulesCount: 3,
    thumbnail: "/images/course-social.png",
    progress: 0,
    isLocked: false,
    link: "/digital-literacy/social-media"
  },
  {
    title: "Digital Communication Security",
    description: "Secure your emails, messages, and calls with encryption and best practices.",
    level: "Intermediate",
    duration: "3 hours",
    modulesCount: 5,
    thumbnail: "/images/course-communication.png",
    progress: 0,
    isLocked: true,
    link: "/digital-literacy/communication"
  },
  {
    title: "Identifying Online Threats",
    description: "Learn to spot phishing attempts, scams, and malware before they affect you.",
    level: "Intermediate",
    duration: "2.5 hours",
    modulesCount: 4,
    thumbnail: "/images/course-threats.png",
    progress: 0,
    isLocked: true,
    link: "/digital-literacy/threats"
  },
];

const DigitalLiteracy = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Handle course selection (mock implementation for now)
  const handleCourseSelect = (courseTitle: string) => {
    // In a real app, this would navigate to the course page or open the viewer
    // For now, we'll check if it matches existing data
    if (courseData[courseTitle as keyof typeof courseData]) {
      setSelectedCourse(courseTitle);
    }
  };

  if (selectedCourse && courseData[selectedCourse as keyof typeof courseData]) {
    return (
      <CourseViewer
        courseName={selectedCourse}
        modules={courseData[selectedCourse as keyof typeof courseData].modules}
        onClose={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Dashboard Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold font-display mb-2">Welcome back, Learner!</h1>
              <p className="text-primary-foreground/80">You're making great progress on your digital safety journey.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Flame className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase font-semibold">Streak</p>
                  <p className="font-bold text-xl">3 Days</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase font-semibold">Points</p>
                  <p className="font-bold text-xl">450</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Progress */}
          <div className="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-sm font-medium text-primary-foreground/80 mb-1">Overall Progress</p>
                <p className="text-2xl font-bold">12% Completed</p>
              </div>
              <Target className="h-8 w-8 text-secondary opacity-50" />
            </div>
            <Progress value={12} className="h-3 bg-white/10" />
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        {/* Course Catalog */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-display mb-6">Course Catalog</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !course.isLocked && handleCourseSelect(course.title)}
                className={!course.isLocked ? "cursor-pointer" : ""}
              >
                <CourseCard
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  progress={course.progress}
                  isLocked={course.isLocked}
                  modulesCount={course.modulesCount}
                  duration={course.duration}
                  link="#" // We handle click on the wrapper div for now to use the existing viewer
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Path Visualization (Simplified) */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-display mb-8 text-center">Your Learning Path</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {courses.map((course, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${index === 0 ? "bg-primary border-primary text-white" :
                    "bg-background border-muted text-muted-foreground"
                    }`}>
                    {index + 1}
                  </div>
                  <p className={`mt-4 font-semibold ${index === 0 ? "text-primary" : "text-muted-foreground"}`}>
                    {course.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalLiteracy;