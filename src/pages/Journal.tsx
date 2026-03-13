import { useState, useEffect } from "react";
import { Lock, Unlock, Plus, Save, Trash2, FileText, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface JournalEntry {
    id: string;
    title: string;
    content: string;
    date: string;
}

const Journal = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [password, setPassword] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isSetupMode, setIsSetupMode] = useState(false); // True if no password set yet
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Editor State
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    const { toast } = useToast();

    useEffect(() => {
        const savedPassword = localStorage.getItem("journal_password");
        const savedEntries = localStorage.getItem("journal_entries");

        if (!savedPassword) {
            setIsSetupMode(true);
        } else {
            setPassword(savedPassword);
        }

        if (savedEntries) {
            try {
                setEntries(JSON.parse(savedEntries));
            } catch (e) {
                console.error("Failed to parse entries", e);
            }
        }
    }, []);

    const handleUnlock = () => {
        if (inputPassword === password) {
            setIsLocked(false);
            toast({ title: "Journal Unlocked", className: "bg-green-600 text-white" });
        } else {
            toast({ title: "Incorrect Password", variant: "destructive" });
        }
    };

    const handleSetPassword = () => {
        if (inputPassword.length < 4) {
            toast({ title: "Password too short", description: "Minimum 4 characters required.", variant: "destructive" });
            return;
        }
        localStorage.setItem("journal_password", inputPassword);
        setPassword(inputPassword);
        setIsSetupMode(false);
        setIsLocked(false);
        toast({ title: "Password Set", description: "Your journal is now secured.", className: "bg-green-600 text-white" });
    };

    const handleLock = () => {
        setIsLocked(true);
        setInputPassword("");
        setSelectedEntryId(null);
    };

    const handleSaveEntry = () => {
        if (!editTitle.trim()) {
            toast({ title: "Title Required", variant: "destructive" });
            return;
        }

        const newEntry: JournalEntry = {
            id: selectedEntryId || Date.now().toString(),
            title: editTitle,
            content: editContent,
            date: new Date().toISOString(),
        };

        let newEntries;
        if (selectedEntryId) {
            newEntries = entries.map(e => e.id === selectedEntryId ? newEntry : e);
        } else {
            newEntries = [newEntry, ...entries];
        }

        setEntries(newEntries);
        localStorage.setItem("journal_entries", JSON.stringify(newEntries));

        if (!selectedEntryId) {
            setSelectedEntryId(newEntry.id);
        }

        toast({ title: "Entry Saved", className: "bg-green-600 text-white" });
    };

    const handleNewEntry = () => {
        setSelectedEntryId(null);
        setEditTitle("");
        setEditContent("");
    };

    const handleSelectEntry = (entry: JournalEntry) => {
        setSelectedEntryId(entry.id);
        setEditTitle(entry.title);
        setEditContent(entry.content);
    };

    const handleDeleteEntry = (id: string) => {
        const newEntries = entries.filter(e => e.id !== id);
        setEntries(newEntries);
        localStorage.setItem("journal_entries", JSON.stringify(newEntries));
        if (selectedEntryId === id) {
            handleNewEntry();
        }
        toast({ title: "Entry Deleted" });
    };

    const filteredEntries = entries.filter(e =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLocked) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader className="text-center">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                            {isSetupMode ? "Set Journal Password" : "Unlock Journal"}
                        </CardTitle>
                        <p className="text-muted-foreground">
                            {isSetupMode
                                ? "Create a password to protect your private entries."
                                : "Enter your password to access your entries."}
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Enter password"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (isSetupMode ? handleSetPassword() : handleUnlock())}
                        />
                        <Button
                            className="w-full"
                            onClick={isSetupMode ? handleSetPassword : handleUnlock}
                        >
                            {isSetupMode ? "Set Password" : "Unlock"}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-4rem)] bg-background flex flex-col">
            {/* Header */}
            <div className="border-b p-4 flex justify-between items-center bg-card">
                <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <h1 className="text-xl font-bold">Encrypted Journal</h1>
                </div>
                <Button variant="destructive" size="sm" onClick={handleLock}>
                    <Lock className="mr-2 h-4 w-4" /> Lock Journal
                </Button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar List */}
                <div className="w-80 border-r bg-muted/10 flex flex-col">
                    <div className="p-4 space-y-4">
                        <Button onClick={handleNewEntry} className="w-full">
                            <Plus className="mr-2 h-4 w-4" /> New Entry
                        </Button>
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search entries..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="p-2 space-y-2">
                            {filteredEntries.length === 0 ? (
                                <div className="text-center p-8 text-muted-foreground text-sm">
                                    No entries found.
                                </div>
                            ) : (
                                filteredEntries.map(entry => (
                                    <div
                                        key={entry.id}
                                        onClick={() => handleSelectEntry(entry)}
                                        className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted ${selectedEntryId === entry.id ? "bg-primary/10 border-l-4 border-primary" : ""
                                            }`}
                                    >
                                        <h3 className="font-medium truncate">{entry.title}</h3>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                            <Calendar className="h-3 w-3" />
                                            {format(new Date(entry.date), "MMM d, yyyy")}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate mt-1 opacity-70">
                                            {entry.content}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col bg-background">
                    <div className="p-6 flex-1 flex flex-col max-w-3xl mx-auto w-full">
                        <Input
                            className="text-3xl font-bold border-none shadow-none px-0 focus-visible:ring-0 mb-4 h-auto placeholder:text-muted-foreground/50"
                            placeholder="Entry Title..."
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <div className="flex items-center text-sm text-muted-foreground mb-6">
                            <Calendar className="h-4 w-4 mr-2" />
                            {selectedEntryId
                                ? format(new Date(entries.find(e => e.id === selectedEntryId)?.date || new Date()), "MMMM d, yyyy 'at' h:mm a")
                                : format(new Date(), "MMMM d, yyyy 'at' h:mm a")
                            }
                        </div>
                        <Textarea
                            className="flex-1 resize-none border-none shadow-none px-0 focus-visible:ring-0 text-lg leading-relaxed placeholder:text-muted-foreground/50"
                            placeholder="Start writing..."
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    </div>

                    <div className="p-4 border-t flex justify-between items-center bg-muted/10">
                        {selectedEntryId && (
                            <Button
                                variant="ghost"
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => handleDeleteEntry(selectedEntryId)}
                            >
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </Button>
                        )}
                        <div className="flex-1"></div>
                        <Button onClick={handleSaveEntry}>
                            <Save className="mr-2 h-4 w-4" /> Save Entry
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journal;