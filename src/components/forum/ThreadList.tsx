import { useState, useEffect } from "react";
import { Thread } from "@/types/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, User, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export const ThreadList = () => {
    const [threads, setThreads] = useState<Thread[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                // Fetch from the actual API
                const res = await fetch('/api/community');
                if (!res.ok) {
                    throw new Error('Failed to fetch threads');
                }
                const data = await res.json();
                setThreads(data.threads);
            } catch (error) {
                console.error("Failed to fetch threads", error);

                // Fallback for demo if API fails (e.g. local dev without serverless)
                const mockData = [
                    {
                        id: '1',
                        title: 'How do I secure my WhatsApp?',
                        category: 'Digital Privacy Q&A',
                        sudoName: 'PrivacySeeker',
                        createdAt: new Date().toISOString(),
                        status: 'active',
                        replyCount: 2,
                    },
                    {
                        id: '2',
                        title: 'Sharing my story of overcoming cyberbullying',
                        category: 'Empowerment Stories',
                        sudoName: 'StrongerNow',
                        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
                        status: 'active',
                        replyCount: 5,
                    }
                ];
                setThreads(mockData as Thread[]);
            } finally {
                setLoading(false);
            }
        };

        fetchThreads();
    }, []);

    if (loading) {
        return <div className="text-center py-8">Loading discussions...</div>;
    }

    return (
        <div className="space-y-4">
            {threads.map((thread) => (
                <Card key={thread.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary/50">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <Badge variant="outline" className="mb-2">{thread.category}</Badge>
                                <CardTitle className="text-lg font-semibold text-primary">{thread.title}</CardTitle>
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {thread.replyCount}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                            <div className="flex items-center gap-2">
                                <User className="h-3 w-3" />
                                <span>{thread.sudoName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};