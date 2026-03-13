import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield } from "lucide-react";

export const NewThreadForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [sudoName, setSudoName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!title || !category || !content || !sudoName) {
            toast({
                title: "Missing Fields",
                description: "Please fill in all fields to start a discussion.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch('/api/community', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'create_thread',
                    data: {
                        title,
                        category,
                        content,
                        sudoName
                    }
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to create thread');
            }

            toast({
                title: "Discussion Started",
                description: "Your thread has been posted successfully.",
            });

            // Reset form
            setTitle("");
            setCategory("");
            setContent("");
            setSudoName("");

            // Optional: Trigger a refresh of the thread list if we had a context or callback
            // window.location.reload(); // Simple brute force refresh for now
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to post thread. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border shadow-sm">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Start a New Discussion
                </h3>
                <p className="text-sm text-muted-foreground">
                    Share your experiences or ask questions safely. Your identity is protected.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="title">Topic Title</Label>
                <Input
                    id="title"
                    placeholder="e.g., How do I secure my Instagram?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Digital Privacy Q&A">Digital Privacy Q&A</SelectItem>
                            <SelectItem value="Dealing with Harassment">Dealing with Harassment</SelectItem>
                            <SelectItem value="Empowerment Stories">Empowerment Stories</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="sudoName">Pseudonym (Sudo Name)</Label>
                    <Input
                        id="sudoName"
                        placeholder="e.g., CyberSafe_Jane"
                        value={sudoName}
                        onChange={(e) => setSudoName(e.target.value)}
                        required
                    />
                    <p className="text-xs text-muted-foreground">This is the only name others will see.</p>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Message</Label>
                <Textarea
                    id="content"
                    placeholder="Type your message here..."
                    className="min-h-[120px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Discussion"}
            </Button>
        </form>
    );
};