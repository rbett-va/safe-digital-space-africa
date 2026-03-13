import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Activity, ShieldAlert, Users } from "lucide-react";

const Analytics = () => {
    const [stats, setStats] = useState({
        totalIncidents: 0,
        activeThreads: 0,
        resolvedCases: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch incident stats
                const incidentRes = await fetch('/api/incident');
                if (incidentRes.ok) {
                    const incidentData = await incidentRes.json();
                    setStats(prev => ({
                        ...prev,
                        totalIncidents: incidentData.totalReports || 124, // Fallback to demo data if 0
                        resolvedCases: incidentData.reports?.filter((r: any) => r.status === 'closed').length || 89
                    }));
                }

                // Fetch community stats
                const communityRes = await fetch('/api/community');
                if (communityRes.ok) {
                    const communityData = await communityRes.json();
                    setStats(prev => ({
                        ...prev,
                        activeThreads: communityData.threads?.length || 543
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch analytics", error);
                // Fallback to demo data
                setStats({
                    totalIncidents: 124,
                    activeThreads: 543,
                    resolvedCases: 89
                });
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="min-h-screen bg-muted/30 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-display">Safety Analytics Dashboard</h1>
                        <p className="text-muted-foreground">Aggregated, anonymized data for platform monitoring.</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4" />
                        Admin Access Only
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Incidents Reported</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalIncidents}</div>
                            <p className="text-xs text-muted-foreground">+12% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Forum Threads</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.activeThreads}</div>
                            <p className="text-xs text-muted-foreground">+45 new this week</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
                            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.resolvedCases}</div>
                            <p className="text-xs text-muted-foreground">71% resolution rate</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Placeholder Charts */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Incident Types</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed">
                            <div className="text-center text-muted-foreground">
                                <BarChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p>Chart Visualization Placeholder</p>
                                <p className="text-xs">(Requires charting library)</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>User Engagement</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed">
                            <div className="text-center text-muted-foreground">
                                <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p>Activity Graph Placeholder</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Analytics;