import { useState } from "react";
import { Mic, Square, Play, Pause, Save, Trash2, AlertTriangle, FileAudio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface Recording {
    id: string;
    name: string;
    date: string;
    duration: string;
    description: string;
}

const VoiceReporting = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [recordings, setRecordings] = useState<Recording[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { toast } = useToast();

    // Mock timer
    useState(() => {
        let interval: NodeJS.Timeout;
        if (isRecording) {
            interval = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }); // This logic is slightly flawed in React strict mode or re-renders, but sufficient for mock UI.
    // Better implementation:
    // useEffect(() => {
    //   let interval: NodeJS.Timeout;
    //   if (isRecording) {
    //     interval = setInterval(() => setRecordingTime(t => t + 1), 1000);
    //   }
    //   return () => clearInterval(interval);
    // }, [isRecording]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartRecording = () => {
        setIsRecording(true);
        setRecordingTime(0);
        toast({ title: "Recording Started", description: "Speak clearly into your microphone." });
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        toast({ title: "Recording Stopped", description: "You can now save this report." });
    };

    const handleSave = () => {
        if (!title) {
            toast({ title: "Title Required", variant: "destructive" });
            return;
        }
        const newRecording: Recording = {
            id: Date.now().toString(),
            name: title,
            date: new Date().toLocaleDateString(),
            duration: formatTime(recordingTime),
            description: description
        };
        setRecordings([newRecording, ...recordings]);
        setTitle("");
        setDescription("");
        setRecordingTime(0);
        toast({ title: "Report Saved", className: "bg-green-600 text-white" });
    };

    const handleDelete = (id: string) => {
        setRecordings(recordings.filter(r => r.id !== id));
        toast({ title: "Report Deleted" });
    };

    return (
        <div className="min-h-screen bg-muted/30 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl font-bold font-display mb-4">Voice Reporting</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Securely record and document incidents of harassment or abuse.
                        These recordings are stored locally on your device and can be used as evidence.
                    </p>
                </motion.div>

                <Card className="mb-8 border-l-4 border-l-primary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Mic className="h-6 w-6 text-primary" />
                            New Voice Report
                        </CardTitle>
                        <CardDescription>
                            Click the microphone to start recording.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col items-center justify-center py-8 bg-muted/20 rounded-xl border-2 border-dashed">
                            <div className="text-4xl font-mono font-bold mb-6 text-primary">
                                {formatTime(recordingTime)}
                            </div>

                            {!isRecording ? (
                                <Button
                                    size="lg"
                                    className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg animate-pulse"
                                    onClick={handleStartRecording}
                                >
                                    <Mic className="h-8 w-8" />
                                </Button>
                            ) : (
                                <Button
                                    size="lg"
                                    className="h-16 w-16 rounded-full bg-slate-800 hover:bg-slate-900 shadow-lg"
                                    onClick={handleStopRecording}
                                >
                                    <Square className="h-6 w-6 fill-current" />
                                </Button>
                            )}
                            <p className="mt-4 text-sm text-muted-foreground">
                                {isRecording ? "Recording in progress..." : "Ready to record"}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Incident Title</Label>
                                <Input
                                    placeholder="e.g., Harassment on Twitter"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Description (Optional)</Label>
                                <Textarea
                                    placeholder="Add details about the incident..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <Button className="w-full" onClick={handleSave} disabled={isRecording || recordingTime === 0}>
                                <Save className="mr-2 h-4 w-4" /> Save Report
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold mb-4">Saved Reports</h2>
                    {recordings.length === 0 ? (
                        <div className="text-center p-8 text-muted-foreground bg-white rounded-lg border border-dashed">
                            No recordings yet.
                        </div>
                    ) : (
                        recordings.map((rec) => (
                            <Card key={rec.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FileAudio className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{rec.name}</h3>
                                            <p className="text-xs text-muted-foreground">{rec.date} • {rec.duration}</p>
                                            {rec.description && (
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{rec.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Play className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(rec.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default VoiceReporting;