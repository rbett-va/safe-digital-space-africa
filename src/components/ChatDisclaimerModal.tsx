import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ShieldAlert } from "lucide-react";

interface ChatDisclaimerModalProps {
    open: boolean;
    onAccept: () => void;
    onDecline: () => void;
}

export const ChatDisclaimerModal = ({ open, onAccept, onDecline }: ChatDisclaimerModalProps) => {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-primary">
                        <ShieldAlert className="h-5 w-5" />
                        Confidentiality & Safety Notice
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-3 pt-2">
                        <p>
                            You are about to start a live chat session. While we prioritize your privacy, please be aware of the following:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Do not share sensitive personal information (like passwords or financial details) unless explicitly asked by a verified counselor.</li>
                            <li>For your safety, chat logs may be retained for quality and training purposes, but are kept strictly confidential.</li>
                            <li>If you are in immediate physical danger, please close this chat and call local emergency services or the 116 helpline immediately.</li>
                        </ul>
                        <p className="font-medium text-foreground">
                            Do you acknowledge these terms and wish to proceed?
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onDecline}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onAccept} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        I Acknowledge & Start Chat
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};