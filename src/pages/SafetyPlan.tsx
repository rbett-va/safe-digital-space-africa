import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Phone,
    MapPin,
    Heart,
    FileText,
    CheckCircle,
    Plus,
    Trash2,
    Printer,
    ArrowRight,
    ArrowLeft,
    Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Steps
const steps = [
    { id: 1, title: "Emergency Contacts", icon: Phone },
    { id: 2, title: "Safe Places", icon: MapPin },
    { id: 3, title: "Coping Strategies", icon: Heart },
    { id: 4, title: "Action Plan", icon: FileText },
    { id: 5, title: "Review & Save", icon: CheckCircle },
];

const SafetyPlan = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { toast } = useToast();

    // Form State
    const [contacts, setContacts] = useState([{ name: "", relation: "", phone: "" }]);
    const [safePlaces, setSafePlaces] = useState([{ name: "", address: "", contact: "" }]);
    const [copingStrategies, setCopingStrategies] = useState([""]);
    const [actionPlan, setActionPlan] = useState({
        trigger: "",
        warningSigns: "",
        immediateAction: ""
    });

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handlePrint = () => {
        window.print();
    };

    const handleSave = () => {
        const plan = {
            contacts,
            safePlaces,
            copingStrategies,
            actionPlan,
            date: new Date().toISOString()
        };
        localStorage.setItem("safety_plan", JSON.stringify(plan));
        toast({
            title: "Safety Plan Saved",
            description: "Your plan has been securely saved to your device.",
            className: "bg-green-600 text-white"
        });
    };

    return (
        <div className="min-h-screen bg-muted/30 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold font-display mb-2">My Safety Plan</h1>
                    <p className="text-muted-foreground">Create a personalized plan to keep yourself safe in difficult situations.</p>
                </div>

                {/* Stepper */}
                <div className="mb-8 flex justify-between items-center relative">
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-muted -z-10" />
                    <div
                        className="absolute left-0 top-1/2 h-1 bg-primary -z-10 transition-all duration-500"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                    {steps.map((step) => {
                        const Icon = step.icon;
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isActive ? "border-primary bg-primary text-primary-foreground" :
                                            isCompleted ? "border-primary bg-primary text-primary-foreground" :
                                                "border-muted bg-background text-muted-foreground"
                                        }`}
                                >
                                    {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                                </div>
                                <span className={`text-xs font-medium hidden md:block ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <Card className="border-none shadow-xl">
                    <CardContent className="p-6 md:p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-semibold">Emergency Contacts</h2>
                                            <Button variant="outline" size="sm" onClick={() => setContacts([...contacts, { name: "", relation: "", phone: "" }])}>
                                                <Plus className="h-4 w-4 mr-2" /> Add Contact
                                            </Button>
                                        </div>
                                        {contacts.map((contact, index) => (
                                            <div key={index} className="grid gap-4 md:grid-cols-3 p-4 bg-muted/30 rounded-lg relative group">
                                                <div className="space-y-2">
                                                    <Label>Name</Label>
                                                    <Input
                                                        value={contact.name}
                                                        onChange={(e) => {
                                                            const newContacts = [...contacts];
                                                            newContacts[index].name = e.target.value;
                                                            setContacts(newContacts);
                                                        }}
                                                        placeholder="e.g. Jane Doe"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Relation</Label>
                                                    <Input
                                                        value={contact.relation}
                                                        onChange={(e) => {
                                                            const newContacts = [...contacts];
                                                            newContacts[index].relation = e.target.value;
                                                            setContacts(newContacts);
                                                        }}
                                                        placeholder="e.g. Sister"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Phone</Label>
                                                    <Input
                                                        value={contact.phone}
                                                        onChange={(e) => {
                                                            const newContacts = [...contacts];
                                                            newContacts[index].phone = e.target.value;
                                                            setContacts(newContacts);
                                                        }}
                                                        placeholder="+254..."
                                                    />
                                                </div>
                                                {contacts.length > 1 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                                        onClick={() => setContacts(contacts.filter((_, i) => i !== index))}
                                                    >
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-semibold">Safe Places</h2>
                                            <Button variant="outline" size="sm" onClick={() => setSafePlaces([...safePlaces, { name: "", address: "", contact: "" }])}>
                                                <Plus className="h-4 w-4 mr-2" /> Add Place
                                            </Button>
                                        </div>
                                        {safePlaces.map((place, index) => (
                                            <div key={index} className="grid gap-4 md:grid-cols-3 p-4 bg-muted/30 rounded-lg relative group">
                                                <div className="space-y-2">
                                                    <Label>Place Name</Label>
                                                    <Input
                                                        value={place.name}
                                                        onChange={(e) => {
                                                            const newPlaces = [...safePlaces];
                                                            newPlaces[index].name = e.target.value;
                                                            setSafePlaces(newPlaces);
                                                        }}
                                                        placeholder="e.g. Community Center"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Address/Location</Label>
                                                    <Input
                                                        value={place.address}
                                                        onChange={(e) => {
                                                            const newPlaces = [...safePlaces];
                                                            newPlaces[index].address = e.target.value;
                                                            setSafePlaces(newPlaces);
                                                        }}
                                                        placeholder="e.g. 123 Main St"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Contact Person (Optional)</Label>
                                                    <Input
                                                        value={place.contact}
                                                        onChange={(e) => {
                                                            const newPlaces = [...safePlaces];
                                                            newPlaces[index].contact = e.target.value;
                                                            setSafePlaces(newPlaces);
                                                        }}
                                                        placeholder="e.g. Manager"
                                                    />
                                                </div>
                                                {safePlaces.length > 1 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                                        onClick={() => setSafePlaces(safePlaces.filter((_, i) => i !== index))}
                                                    >
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-semibold">Coping Strategies</h2>
                                            <Button variant="outline" size="sm" onClick={() => setCopingStrategies([...copingStrategies, ""])}>
                                                <Plus className="h-4 w-4 mr-2" /> Add Strategy
                                            </Button>
                                        </div>
                                        <p className="text-sm text-muted-foreground">List things you can do to calm down or feel safer in a stressful moment.</p>
                                        {copingStrategies.map((strategy, index) => (
                                            <div key={index} className="flex gap-2 items-center">
                                                <div className="flex-1">
                                                    <Input
                                                        value={strategy}
                                                        onChange={(e) => {
                                                            const newStrategies = [...copingStrategies];
                                                            newStrategies[index] = e.target.value;
                                                            setCopingStrategies(newStrategies);
                                                        }}
                                                        placeholder={`Strategy ${index + 1} (e.g. Deep breathing, Call a friend)`}
                                                    />
                                                </div>
                                                {copingStrategies.length > 1 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => setCopingStrategies(copingStrategies.filter((_, i) => i !== index))}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {currentStep === 4 && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold">Action Plan</h2>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>What are my triggers/warning signs?</Label>
                                                <Textarea
                                                    value={actionPlan.trigger}
                                                    onChange={(e) => setActionPlan({ ...actionPlan, trigger: e.target.value })}
                                                    placeholder="e.g. Feeling isolated, specific threats..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>What will I do immediately?</Label>
                                                <Textarea
                                                    value={actionPlan.immediateAction}
                                                    onChange={(e) => setActionPlan({ ...actionPlan, immediateAction: e.target.value })}
                                                    placeholder="e.g. Leave the house, lock doors, call contact..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 5 && (
                                    <div className="space-y-8 print:space-y-4">
                                        <div className="text-center print:hidden">
                                            <h2 className="text-2xl font-bold text-primary mb-2">Your Safety Plan is Ready</h2>
                                            <p className="text-muted-foreground">Review your plan below. Save it or print a copy to keep with you.</p>
                                        </div>

                                        <div className="bg-white text-black p-8 rounded-xl shadow-sm border print:border-none print:shadow-none print:p-0">
                                            <h1 className="text-3xl font-bold mb-6 text-center border-b pb-4">My Safety Plan</h1>

                                            <div className="space-y-6">
                                                <section>
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <Phone className="h-5 w-5" /> Emergency Contacts
                                                    </h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {contacts.map((c, i) => (
                                                            <div key={i} className="p-3 bg-gray-50 rounded border">
                                                                <p className="font-semibold">{c.name}</p>
                                                                <p className="text-sm text-gray-600">{c.relation} • {c.phone}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>

                                                <section>
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <MapPin className="h-5 w-5" /> Safe Places
                                                    </h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {safePlaces.map((p, i) => (
                                                            <div key={i} className="p-3 bg-gray-50 rounded border">
                                                                <p className="font-semibold">{p.name}</p>
                                                                <p className="text-sm text-gray-600">{p.address}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>

                                                <section>
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <Heart className="h-5 w-5" /> Coping Strategies
                                                    </h3>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {copingStrategies.map((s, i) => (
                                                            <li key={i}>{s}</li>
                                                        ))}
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <Shield className="h-5 w-5" /> Action Plan
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <p className="font-semibold text-sm text-gray-500 uppercase">Triggers</p>
                                                            <p>{actionPlan.trigger || "Not specified"}</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-sm text-gray-500 uppercase">Immediate Actions</p>
                                                            <p>{actionPlan.immediateAction || "Not specified"}</p>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-center print:hidden">
                                            <Button onClick={handleSave} className="w-full md:w-auto">
                                                <Save className="mr-2 h-4 w-4" /> Save Plan
                                            </Button>
                                            <Button onClick={handlePrint} variant="outline" className="w-full md:w-auto">
                                                <Printer className="mr-2 h-4 w-4" /> Print Plan
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6 print:hidden">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>

                        {currentStep < steps.length && (
                            <Button onClick={nextStep}>
                                Next Step <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default SafetyPlan;