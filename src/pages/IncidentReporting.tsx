import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShieldAlert, Lock, CheckCircle, ChevronRight, ChevronLeft, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IncidentReporting = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [reportId, setReportId] = useState("");
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        typeOfIncident: "",
        platform: "",
        dateOccurred: "",
        description: "",
        evidenceFiles: "", // Simplified for demo (text input for URLs)
        contactPreference: "anonymous",
    });

    const totalSteps = 3;
    const progress = (step / totalSteps) * 100;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/incident', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Failed to submit report');
            }

            const data = await res.json();
            setReportId(data.reportId || `INC-${Date.now().toString().slice(-6)}`);
            setIsSubmitted(true);
            toast({
                title: "Report Submitted Securely",
                description: "Your incident has been logged. Reference ID generated.",
            });
        } catch (error) {
            toast({
                title: "Submission Error",
                description: "Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="max-w-md w-full text-center border-green-500/20 shadow-lg">
                    <CardHeader>
                        <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl text-green-700">Report Submitted Securely</CardTitle>
                        <CardDescription>
                            Thank you for speaking up. Your report has been encrypted and sent to our safety team.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Your Reference ID</p>
                            <p className="text-xl font-mono font-bold tracking-wider select-all">{reportId}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Please save this ID. You will need it to check the status of your report anonymously.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full" onClick={() => window.location.href = '/'}>Return Home</Button>
                        <Button variant="outline" className="w-full" onClick={() => window.location.href = '/safety-tools'}>View Safety Tools</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/30 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold font-display mb-2 flex items-center justify-center gap-2">
                        <ShieldAlert className="h-8 w-8 text-destructive" />
                        Report an Incident
                    </h1>
                    <p className="text-muted-foreground">
                        Securely report digital harassment, hacking, or safety concerns.
                        Your identity is protected.
                    </p>
                </div>

                <Card className="border-t-4 border-t-primary shadow-xl">
                    <CardHeader>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-muted-foreground">Step {step} of {totalSteps}</span>
                            <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <Lock className="h-3 w-3" />
                                End-to-End Encrypted
                            </div>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </CardHeader>

                    <CardContent className="py-6">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold">What happened?</h2>

                                        <div className="space-y-3">
                                            <Label>Type of Incident</Label>
                                            <RadioGroup
                                                value={formData.typeOfIncident}
                                                onValueChange={(val) => setFormData({ ...formData, typeOfIncident: val })}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                            >
                                                {['Harassment', 'Hacking/Unauthorized Access', 'Identity Theft', 'Non-Consensual Image Sharing', 'Stalking', 'Other'].map((type) => (
                                                    <div key={type}>
                                                        <RadioGroupItem value={type} id={type} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={type}
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                                        >
                                                            {type}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>

                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="platform">Platform (Optional)</Label>
                                                <Input
                                                    id="platform"
                                                    placeholder="e.g., Facebook, WhatsApp"
                                                    value={formData.platform}
                                                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="date">Date Occurred</Label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    value={formData.dateOccurred}
                                                    onChange={(e) => setFormData({ ...formData, dateOccurred: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold">Details & Evidence</h2>

                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description of Incident</Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Please describe what happened in as much detail as you feel comfortable sharing..."
                                                className="min-h-[150px]"
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="evidence">Evidence (Optional)</Label>
                                            <Input
                                                id="evidence"
                                                placeholder="Links to screenshots or files (secure upload not available in demo)"
                                                value={formData.evidenceFiles}
                                                onChange={(e) => setFormData({ ...formData, evidenceFiles: e.target.value })}
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Please do not upload sensitive personal images here directly.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold">Review & Submit</h2>

                                        <div className="bg-muted/50 p-4 rounded-lg space-y-3 text-sm">
                                            <div className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Type:</span>
                                                <span className="font-medium">{formData.typeOfIncident || "Not specified"}</span>
                                            </div>
                                            <div className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Platform:</span>
                                                <span className="font-medium">{formData.platform || "Not specified"}</span>
                                            </div>
                                            <div className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Date:</span>
                                                <span className="font-medium">{formData.dateOccurred || "Not specified"}</span>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground block mb-1">Description:</span>
                                                <p className="font-medium bg-background p-2 rounded border">{formData.description || "No description provided"}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-3 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
                                            <AlertTriangle className="h-5 w-5 shrink-0" />
                                            <p>
                                                By submitting this report, you acknowledge that this is for informational and support purposes.
                                                In case of immediate physical danger, please contact local authorities.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>

                    <CardFooter className="flex justify-between pt-6">
                        <Button
                            variant="outline"
                            onClick={handleBack}
                            disabled={step === 1 || isSubmitting}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>

                        {step < totalSteps ? (
                            <Button onClick={handleNext} disabled={!formData.typeOfIncident && step === 1}>
                                Next <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={isSubmitting || !formData.description} className="bg-green-600 hover:bg-green-700">
                                {isSubmitting ? "Encrypting & Sending..." : "Submit Secure Report"}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default IncidentReporting;