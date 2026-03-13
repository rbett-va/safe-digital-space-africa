import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Eye, EyeOff } from "lucide-react";

const PasswordStrength = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const checkStrength = (pass: string) => {
        let score = 0;
        if (pass.length >= 8) score += 25;
        if (pass.length >= 12) score += 15;
        if (/[A-Z]/.test(pass)) score += 25;
        if (/[a-z]/.test(pass)) score += 15;
        if (/[0-9]/.test(pass)) score += 25;
        if (/[^A-Za-z0-9]/.test(pass)) score += 25;
        return Math.min(score, 100);
    };

    const strength = checkStrength(password);

    const getStrengthInfo = (score: number) => {
        if (score < 30) return { 
            label: "Very Weak", 
            color: "bg-red-500",
            textColor: "text-red-500"
        };
        if (score < 50) return { 
            label: "Weak", 
            color: "bg-orange-500",
            textColor: "text-orange-500"
        };
        if (score < 70) return { 
            label: "Moderate", 
            color: "bg-yellow-500",
            textColor: "text-yellow-500"
        };
        if (score < 90) return { 
            label: "Strong", 
            color: "bg-blue-500",
            textColor: "text-blue-500"
        };
        return { 
            label: "Very Strong", 
            color: "bg-green-500",
            textColor: "text-green-500"
        };
    };

    const strengthInfo = getStrengthInfo(strength);

    const requirements = [
        { 
            label: "Include Uppercase Letters", 
            met: /[A-Z]/.test(password),
            description: "A-Z characters"
        },
        { 
            label: "Include Lowercase Letters", 
            met: /[a-z]/.test(password),
            description: "a-z characters"
        },
        { 
            label: "Include Numbers", 
            met: /[0-9]/.test(password),
            description: "0-9 digits"
        },
        { 
            label: "Include Symbols", 
            met: /[^A-Za-z0-9]/.test(password),
            description: "!@#$%^&*"
        },
    ];

    const ToggleSwitch = ({ checked }: { checked: boolean }) => (
        <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-zinc-300 dark:bg-zinc-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
            <div className="h-full w-[27px] rounded-full bg-white shadow-lg" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'}}></div>
            <input 
                type="checkbox" 
                checked={checked}
                className="invisible absolute"
                readOnly
            />
        </label>
    );

    const getSegments = () => {
        const segments = [];
        for (let i = 0; i < 4; i++) {
            const threshold = (i + 1) * 25;
            const isActive = strength >= threshold;
            segments.push(
                <div 
                    key={i}
                    className={`h-1 flex-1 rounded-full ${isActive ? strengthInfo.color : 'bg-zinc-200 dark:bg-zinc-800'}`}
                />
            );
        }
        return segments;
    };

    return (
        <div className="w-full h-full flex flex-col bg-background-light dark:bg-background-dark font-display">
            {/* Top App Bar */}
            <div className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex size-12 shrink-0 items-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                    <ArrowLeft className="h-6 w-6 mx-auto" />
                </button>
                <h2 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Password Strength Checker</h2>
                <div className="flex size-12 shrink-0 items-center"></div>
            </div>

            {/* Password Input Section */}
            <div className="px-4 pt-4 pb-4">
                <div className="relative flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="font-mono text-lg font-medium text-zinc-900 dark:text-white flex-1 truncate pr-2 bg-transparent border-none outline-none"
                    />
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                        <button className="text-primary hover:text-primary/80 transition-colors">
                            <CheckCircle2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Strength Indicator */}
            {password && (
                <div className="px-4 pb-6">
                    <div className="flex w-full items-center gap-2">
                        {getSegments()}
                    </div>
                    <p className={`text-sm font-medium pt-2 ${strengthInfo.textColor}`}>
                        {strengthInfo.label}
                    </p>
                </div>
            )}

            {/* Content Area */}
            <div className="flex-1 rounded-t-3xl bg-zinc-100 dark:bg-zinc-900/50 p-4 pt-6">
                {/* Section Header */}
                <h3 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Password Requirements
                </h3>

                {/* Requirements List */}
                <div className="flex flex-col gap-2 bg-background-light dark:bg-background-dark rounded-xl overflow-hidden">
                    {requirements.map((req, index) => (
                        <div key={req.label}>
                            <div className="flex items-center gap-4 px-4 min-h-14 justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 shrink-0 size-10 ${req.met ? 'text-primary' : 'text-zinc-400 dark:text-zinc-600'}`}>
                                        {req.met ? (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ) : (
                                            <div className="h-5 w-5 border-2 border-current rounded-full"></div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-zinc-900 dark:text-white text-base font-normal leading-normal flex-1 truncate">
                                            {req.label}
                                        </p>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                            {req.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <ToggleSwitch checked={req.met} />
                                </div>
                            </div>
                            {index < requirements.length - 1 && (
                                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 ml-16"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Generate New Password Button */}
                {!password && (
                    <div className="pt-8 pb-4">
                        <button 
                            onClick={() => {
                                // Generate a strong password for demo
                                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                                let result = "";
                                for (let i = 0; i < 16; i++) {
                                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                                }
                                setPassword(result);
                            }}
                            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90"
                        >
                            <CheckCircle2 className="h-5 w-5" />
                            Generate Strong Password
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export { PasswordStrength };