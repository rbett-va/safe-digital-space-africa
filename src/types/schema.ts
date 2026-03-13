import { z } from "zod";

// --- Community Forum Schemas ---

export const PostSchema = z.object({
    id: z.string(),
    threadId: z.string(),
    content: z.string().min(1, "Content cannot be empty"),
    sudoName: z.string(),
    createdAt: z.string(), // ISO date string
});

export const ThreadSchema = z.object({
    id: z.string(),
    title: z.string().min(5, "Title must be at least 5 characters"),
    category: z.enum(['Digital Privacy Q&A', 'Dealing with Harassment', 'Empowerment Stories']),
    sudoName: z.string(),
    createdAt: z.string(), // ISO date string
    status: z.enum(['active', 'closed', 'archived']),
    posts: z.array(PostSchema).optional(),
    replyCount: z.number().default(0),
});

export type Post = z.infer<typeof PostSchema>;
export type Thread = z.infer<typeof ThreadSchema>;

// --- Incident Reporting Schemas ---

export const IncidentReportSchema = z.object({
    reportId: z.string(),
    userReference: z.string(), // Secure hash
    typeOfIncident: z.enum([
        'Harassment',
        'Hacking/Unauthorized Access',
        'Identity Theft',
        'Non-Consensual Image Sharing',
        'Stalking',
        'Other'
    ]),
    description: z.string().min(20, "Please provide more detail"), // Encrypted text in backend
    platform: z.string().optional(),
    dateOccurred: z.string().optional(),
    evidenceFiles: z.array(z.string()).optional(), // URLs or file references
    status: z.enum(['received', 'reviewing', 'action_taken', 'closed']).default('received'),
    submittedAt: z.string(),
});

export type IncidentReport = z.infer<typeof IncidentReportSchema>;