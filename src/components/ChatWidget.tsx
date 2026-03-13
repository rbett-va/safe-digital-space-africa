import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatDisclaimerModal } from "./ChatDisclaimerModal";
import { useToast } from "@/hooks/use-toast";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatActive, setIsChatActive] = useState(false);
    const { toast } = useToast();

    const handleStartChat = () => {
        setIsOpen(true);
    };

    const handleAccept = () => {
        setIsOpen(false);
        setIsChatActive(true);

        // Inject Tawk.to script
        // Note: Replace 'YOUR_PROPERTY_ID/YOUR_WIDGET_ID' with your actual Tawk.to ID
        // Example: '65a1234567890/1hk12345'
        const script = document.createElement("script");
        script.async = true;
        script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);

        toast({
            title: "Connecting to Support...",
            description: "Chat widget is loading... (If no ID is configured, this will fail silently)",
        });
    };

    const handleDecline = () => {
        setIsOpen(false);
    };

    if (isChatActive) {
        return null; // The third-party widget usually takes over the UI
    }

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={handleStartChat}
                    className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white p-0 flex items-center justify-center transition-transform hover:scale-105"
                    aria-label="Start Live Chat"
                >
                    <MessageCircle className="h-7 w-7" />
                </Button>
            </div>

            <ChatDisclaimerModal
                open={isOpen}
                onAccept={handleAccept}
                onDecline={handleDecline}
            />
        </>
    );
};