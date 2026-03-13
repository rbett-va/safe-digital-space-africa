import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Lock, Unlock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

// Feature Card
interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <Card className="h-full border border-border/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] bg-white dark:bg-card group">
            <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    {icon}
                </div>
                <CardTitle className="text-xl font-display font-bold group-hover:text-primary transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90 font-medium">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

// Course Card
interface CourseCardProps {
    title: string;
    description: string;
    thumbnail?: string;
    progress?: number;
    isLocked?: boolean;
    modulesCount: number;
    duration: string;
    link: string;
}

export const CourseCard = ({
    title,
    description,
    thumbnail = "/images/course-privacy.png",
    progress = 0,
    isLocked = false,
    modulesCount,
    duration,
    link
}: CourseCardProps) => {
    return (
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                    {isLocked ? (
                        <Badge variant="secondary" className="bg-black/50 text-white hover:bg-black/70 backdrop-blur-md">
                            <Lock className="w-3 h-3 mr-1" /> Locked
                        </Badge>
                    ) : (
                        <Badge variant="default" className="bg-secondary text-white hover:bg-secondary/90 backdrop-blur-md">
                            <Unlock className="w-3 h-3 mr-1" /> Available
                        </Badge>
                    )}
                </div>
                {progress === 100 && (
                    <div className="absolute bottom-4 right-4">
                        <Badge className="bg-accent text-white border-none">Completed</Badge>
                    </div>
                )}
            </div>

            <CardHeader className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                        {modulesCount} Modules • {duration}
                    </Badge>
                </div>
                <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
                {!isLocked && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-muted-foreground">
                            <span>Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-4 border-t bg-muted/20">
                <Link to={link} className="w-full">
                    <Button
                        className="w-full"
                        variant={isLocked ? "outline" : "default"}
                        disabled={isLocked}
                    >
                        {isLocked ? "Complete Previous Course" : (progress > 0 ? "Continue Learning" : "Start Course")}
                        {!isLocked && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

// Tool Card
interface ToolCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    actionLabel?: string;
    onAction: () => void;
}

export const ToolCard = ({
    icon,
    title,
    description,
    actionLabel = "Launch Tool",
    onAction
}: ToolCardProps) => {
    return (
        <Card className="h-full border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 bg-card">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        {icon}
                    </div>
                    <CardTitle className="text-lg font-display">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm">
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary"
                    onClick={onAction}
                >
                    {actionLabel}
                    <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};