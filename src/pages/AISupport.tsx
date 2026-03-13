import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

const initialMessages: Message[] = [
    {
        id: "1",
        role: "assistant",
        content: "Hello! I'm your Safe Digital Assistant. I can help you with digital safety tips, privacy settings, or guide you to resources. How can I help you today?",
        timestamp: new Date()
    }
];

const AISupport = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI response delay
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: generateResponse(userMessage.content),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("password")) {
            return "Strong passwords are key! Use at least 12 characters, mix letters, numbers, and symbols. Would you like me to help you generate one?";
        }
        if (lowerInput.includes("harass") || lowerInput.includes("bully")) {
            return "I'm sorry to hear that. Please document everything (screenshots), block the user, and report them to the platform. You can also check our Legal Resources page for more help.";
        }
        if (lowerInput.includes("hack")) {
            return "If you think you've been hacked, change your passwords immediately and enable Two-Factor Authentication (2FA). Check your email for any login alerts.";
        }
        return "That's a great question. While I'm an AI, I recommend checking our Digital Literacy courses for in-depth guides. Is there anything specific about online safety you'd like to know?";
    };

    return (
        <div className="h-[calc(100vh-4rem)] bg-muted/30 p-4 md:p-8 flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl h-full flex flex-col shadow-xl overflow-hidden border-none">
                <CardHeader className="bg-primary text-primary-foreground p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Bot className="h-8 w-8" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">AI Support Assistant</CardTitle>
                            <p className="text-primary-foreground/80 text-sm">Always here to help you navigate safely.</p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 p-0 overflow-hidden bg-background relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

                    <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
                        <div className="space-y-6">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                        <Avatar className="h-8 w-8 mt-1 border">
                                            {msg.role === "assistant" ? (
                                                <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-4 w-4" /></AvatarFallback>
                                            ) : (
                                                <AvatarFallback className="bg-muted"><User className="h-4 w-4" /></AvatarFallback>
                                            )}
                                        </Avatar>

                                        <div className={`p-4 rounded-2xl shadow-sm ${msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted rounded-tl-none"
                                            }`}>
                                            <p className="text-sm md:text-base leading-relaxed">{msg.content}</p>
                                            <p className={`text-[10px] mt-2 opacity-70 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="flex gap-3 max-w-[80%]">
                                        <Avatar className="h-8 w-8 mt-1 border">
                                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-4 w-4" /></AvatarFallback>
                                        </Avatar>
                                        <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex items-center gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>

                <CardFooter className="p-4 bg-background border-t">
                    <form
                        className="flex w-full gap-2"
                        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                    >
                        <Input
                            placeholder="Type your question..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1"
                        />
                        <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AISupport;