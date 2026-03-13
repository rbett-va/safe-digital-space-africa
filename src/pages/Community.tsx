import { useState, useEffect } from "react";
import { MessageSquare, Heart, Share2, MoreHorizontal, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface Post {
    id: string;
    title: string;
    content: string;
    author: string; // "Anonymous" usually
    timestamp: string;
    likes: number;
    replies: number;
    tags: string[];
}

const initialPosts: Post[] = [
    {
        id: "1",
        title: "How do I deal with online harassment?",
        content: "I've been receiving threatening messages from an anonymous account. I've blocked them, but they keep making new ones. Has anyone else experienced this?",
        author: "Anonymous",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        likes: 12,
        replies: 5,
        tags: ["Harassment", "Advice Needed"]
    },
    {
        id: "2",
        title: "Success Story: Recovered my hacked account!",
        content: "Just wanted to share some hope. After 2 weeks of back and forth with support, I finally got my Instagram back. Make sure you have 2FA on!",
        author: "Sarah K.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        likes: 45,
        replies: 8,
        tags: ["Success Story", "Security"]
    }
];

const Community = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");
    const { toast } = useToast();

    useEffect(() => {
        const savedPosts = localStorage.getItem("community_posts");
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    const handlePostSubmit = () => {
        if (!newPostTitle.trim() || !newPostContent.trim()) {
            toast({ title: "Please fill in all fields", variant: "destructive" });
            return;
        }

        const newPost: Post = {
            id: Date.now().toString(),
            title: newPostTitle,
            content: newPostContent,
            author: "Anonymous",
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: 0,
            tags: ["General"]
        };

        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem("community_posts", JSON.stringify(updatedPosts));

        setNewPostTitle("");
        setNewPostContent("");

        toast({
            title: "Post Published",
            description: "Your post has been shared anonymously.",
            className: "bg-green-600 text-white"
        });
    };

    const handleLike = (id: string) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);
        localStorage.setItem("community_posts", JSON.stringify(updatedPosts));
    };

    return (
        <div className="min-h-screen bg-muted/30 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold font-display mb-4">Community Forum</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A safe space to share experiences, ask for advice, and support one another.
                        All posts are anonymous by default to protect your identity.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Create Post */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Create a Post</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    placeholder="Title"
                                    value={newPostTitle}
                                    onChange={(e) => setNewPostTitle(e.target.value)}
                                />
                                <Textarea
                                    placeholder="Share your thoughts..."
                                    value={newPostContent}
                                    onChange={(e) => setNewPostContent(e.target.value)}
                                    rows={4}
                                />
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <User className="h-4 w-4 mr-2" />
                                        Posting as Anonymous
                                    </div>
                                    <Button onClick={handlePostSubmit}>
                                        <Send className="mr-2 h-4 w-4" /> Post Anonymously
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Posts Feed */}
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <Card key={post.id} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarFallback className="bg-primary/10 text-primary">
                                                        {post.author[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold text-sm">{post.author}</p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {formatDistanceToNow(new Date(post.timestamp))} ago
                                                    </p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.content}
                                        </p>

                                        <div className="flex items-center gap-2 mb-4">
                                            {post.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6 pt-4 border-t text-sm text-muted-foreground">
                                            <button
                                                onClick={() => handleLike(post.id)}
                                                className="flex items-center gap-2 hover:text-primary transition-colors"
                                            >
                                                <Heart className="h-4 w-4" /> {post.likes} Likes
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                                <MessageSquare className="h-4 w-4" /> {post.replies} Replies
                                            </button>
                                            <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                                                <Share2 className="h-4 w-4" /> Share
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Community Guidelines</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-muted-foreground">
                                <p>1. Be respectful and supportive.</p>
                                <p>2. Do not share personal identifiable information (PII).</p>
                                <p>3. No hate speech or bullying.</p>
                                <p>4. Report suspicious behavior.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Popular Topics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {["Cyberbullying", "Privacy", "Social Media", "Legal Help", "Mental Health", "Tech Support"].map(topic => (
                                        <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-primary/10">
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;