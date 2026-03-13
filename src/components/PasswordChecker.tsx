import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, X, Eye, EyeOff, Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

const PasswordChecker = () => {
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
            description: "A-Z characters",
            icon: "text_fields"
        },
        { 
            label: "Include Lowercase Letters", 
            met: /[a-z]/.test(password),
            description: "a-z characters",
            icon: "format_ink_highlighter"
        },
        { 
            label: "Include Numbers", 
            met: /[0-9]/.test(password),
            description: "0-9 digits",
            icon: "pin"
        },
        { 
            label: "Include Symbols", 
            met: /[^A-Za-z0-9]/.test(password),
            description: "!@#$%^&*",
            icon: "alternate_email"
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

    const RequirementIcon = ({ icon, active }: { icon: string; active: boolean }) => {
        const iconClass = active ? "text-primary" : "text-zinc-400 dark:text-zinc-600";
        return (
            <div className={`flex items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 shrink-0 size-10 ${iconClass}`}>
                {icon === "text_fields" && <Shield className="h-5 w-5" />}
                {icon === "format_ink_highlighter" && <Lock className="h-5 w-5" />}
                {icon === "pin" && <AlertTriangle className="h-5 w-5" />}
                {icon === "alternate_email" && <CheckCircle2 className="h-5 w-5" />}
            </div>
        );
    };

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
        <div className="space-y-6">
            {/* Password Input Section */}
            <div className="relative">
                <Label htmlFor="password-check" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 block">
                    Enter Your Password
                </Label>
                <div className="relative flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Type your password here..."
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
                <div>
                    <div className="flex w-full items-center gap-2">
                        {getSegments()}
                    </div>
                    <p className={`text-sm font-medium pt-2 ${strengthInfo.textColor}`}>
                        {strengthInfo.label}
                    </p>
                </div>
            )}

            {/* Requirements Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Password Requirements
                </h3>

                {/* Requirements List */}
                <div className="flex flex-col gap-2 bg-background-light dark:bg-background-dark rounded-xl overflow-hidden">
                    {requirements.map((req, index) => (
                        <div key={req.label}>
                            <div className="flex items-center gap-4 px-4 min-h-14 justify-between">
                                <div className="flex items-center gap-4">
                                    <RequirementIcon icon={req.icon} active={req.met} />
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
            </div>

            {/* Generate Button */}
            {!password && (
                <div className="pt-4">
                    <button className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90">
                        <Shield className="h-5 w-5" />
                        Analyze Password Strength
                    </button>
                </div>
            )}
        </div>
    );
};

export default PasswordChecker;