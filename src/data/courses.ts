export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number; // Index of correct option
}

export interface Lesson {
    id: string;
    title: string;
    type: "video" | "text" | "quiz";
    duration: string;
    content?: string; // Markdown content for text lessons
    videoUrl?: string; // URL for video lessons
    questions?: Question[]; // For quiz type
}

export interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    modules: Module[];
}

export const courses: Record<string, Course> = {
    "privacy-basics": {
        id: "privacy-basics",
        title: "Online Privacy Basics",
        description: "Learn how to protect your personal information online.",
        modules: [
            {
                id: "m1",
                title: "Introduction to Digital Privacy",
                lessons: [
                    {
                        id: "l1",
                        title: "Why Privacy Matters",
                        type: "text",
                        duration: "5 min",
                        content: `
# Why Privacy Matters

In the digital age, privacy is not just a luxury; it's a fundamental right. Every time you go online, you leave a digital footprint.

## What is Digital Privacy?
Digital privacy refers to the protection of your personal information while you are connected to the Internet.

## Key Concepts
* **Data Collection**: How websites gather your info.
* **Consent**: Agreeing to share your data.
* **Security**: Protecting data from theft.

> "Privacy is not about having something to hide, but about having control over what you share."
            `
                    },
                    {
                        id: "l2",
                        title: "Common Privacy Risks",
                        type: "text",
                        duration: "10 min",
                        content: `
# Common Privacy Risks

Be aware of these common threats to your privacy:

1. **Phishing**: Fake emails trying to steal your login info.
2. **Tracking Cookies**: Files that follow your browsing habits.
3. **Data Breaches**: When companies lose your data to hackers.

## How to Spot a Phishing Email
* Check the sender's email address carefully.
* Look for spelling mistakes.
* Hover over links before clicking.
            `
                    },
                    {
                        id: "q1",
                        title: "Module 1 Quiz",
                        type: "quiz",
                        duration: "5 min",
                        questions: [
                            {
                                id: "q1_1",
                                text: "What is digital privacy?",
                                options: [
                                    "Hiding everything from everyone",
                                    "Protection of personal info online",
                                    "Using the internet only at night",
                                    "Deleting all your accounts"
                                ],
                                correctAnswer: 1
                            },
                            {
                                id: "q1_2",
                                text: "What is Phishing?",
                                options: [
                                    "A sport",
                                    "A way to catch fish",
                                    "Fake emails trying to steal info",
                                    "A type of computer virus"
                                ],
                                correctAnswer: 2
                            }
                        ]
                    }
                ]
            },
            {
                id: "m2",
                title: "Securing Your Accounts",
                lessons: [
                    {
                        id: "l3",
                        title: "Creating Strong Passwords",
                        type: "text",
                        duration: "8 min",
                        content: `
# Creating Strong Passwords

A strong password is your first line of defense.

## Tips for Strong Passwords
* Use at least 12 characters.
* Mix uppercase, lowercase, numbers, and symbols.
* **Never** use personal info like birthdays.

## Example
Weak: \`password123\`
Strong: \`Tr0ub4dour&3\`
            `
                    },
                    {
                        id: "q2",
                        title: "Module 2 Quiz",
                        type: "quiz",
                        duration: "5 min",
                        questions: [
                            {
                                id: "q2_1",
                                text: "Which is a strong password?",
                                options: [
                                    "123456",
                                    "password",
                                    "Kj#9!mP2$xL",
                                    "mynameisjohn"
                                ],
                                correctAnswer: 2
                            }
                        ]
                    }
                ]
            }
        ]
    }
};