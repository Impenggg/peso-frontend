"use client";

import {
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Users,
  AlertCircle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type StatCard = {
  label: string;
  value: string;
  description: string;
  trend?: string;
};

type RecentAttendanceItem = {
  intern: string;
  timeIn: string;
  timeOut: string;
  status: "On time" | "Late" | "Absent";
};

type PendingApprovalItem = {
  id: string;
  intern: string;
  type: string;
  submittedAt: string;
};

const MOCK_STATS: StatCard[] = [
  {
    label: "Total interns",
    value: "128",
    description: "Registered OJT interns in the system.",
    trend: "+5 this week",
  },
  {
    label: "Active today",
    value: "87",
    description: "Interns who have clocked in today.",
    trend: "68% of total",
  },
  {
    label: "Pending approvals",
    value: "14",
    description: "Attendance records awaiting review.",
    trend: "Review within 24 hours",
  },
  {
    label: "Attendance rate",
    value: "94%",
    description: "Average attendance across all interns (30 days).",
    trend: "Target: 95%+",
  },
];

const MOCK_RECENT_ATTENDANCE: RecentAttendanceItem[] = [
  {
    intern: "Juan Dela Cruz",
    timeIn: "08:01 AM",
    timeOut: "05:02 PM",
    status: "On time",
  },
  {
    intern: "Maria Santos",
    timeIn: "08:23 AM",
    timeOut: "05:11 PM",
    status: "Late",
  },
  {
    intern: "Jose Ramos",
    timeIn: "—",
    timeOut: "—",
    status: "Absent",
  },
  {
    intern: "Ana Flores",
    timeIn: "07:55 AM",
    timeOut: "04:59 PM",
    status: "On time",
  },
];

const MOCK_PENDING_APPROVALS: PendingApprovalItem[] = [
  {
    id: "#A-1023",
    intern: "Juan Dela Cruz",
    type: "Time correction (Clock in)",
    submittedAt: "Today • 09:14 AM",
  },
  {
    id: "#A-1024",
    intern: "Maria Santos",
    type: "Overtime request",
    submittedAt: "Today • 08:47 AM",
  },
  {
    id: "#A-1025",
    intern: "Ana Flores",
    type: "Undertime explanation",
    submittedAt: "Yesterday • 04:32 PM",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
        {/* Top-level stats */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {MOCK_STATS.map((stat) => (
            <Card key={stat.label} className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </CardTitle>
                <CardDescription className="text-[11px] text-slate-500">
                  {stat.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-end justify-between">
                <p className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                {stat.trend ? (
                  <p className="text-[11px] font-medium text-emerald-700">
                    {stat.trend}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Attendance + approvals */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
              <div>
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Clock3 className="h-4 w-4 text-blue-700" />
                  Today&apos;s attendance snapshot
                </CardTitle>
                <CardDescription className="text-xs text-slate-600">
                  Recent attendance logs from interns.
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
              >
                View full attendance
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-2 rounded-md bg-slate-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                <span>Intern</span>
                <span>Time in</span>
                <span>Time out</span>
                <span>Status</span>
              </div>
              <div className="space-y-1.5">
                {MOCK_RECENT_ATTENDANCE.map((item) => (
                  <div
                    key={item.intern}
                    className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center gap-2 rounded-md border border-slate-100 bg-white px-3 py-2 text-xs text-slate-700"
                  >
                    <span className="truncate font-medium text-slate-900">
                      {item.intern}
                    </span>
                    <span>{item.timeIn}</span>
                    <span>{item.timeOut}</span>
                    <span>
                      {item.status === "On time" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                          <CheckCircle2 className="h-3 w-3" />
                          On time
                        </span>
                      )}
                      {item.status === "Late" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200">
                          <Clock3 className="h-3 w-3" />
                          Late
                        </span>
                      )}
                      {item.status === "Absent" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-700 ring-1 ring-red-200">
                          <AlertCircle className="h-3 w-3" />
                          Absent
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
              <div>
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Users className="h-4 w-4 text-red-600" />
                  Pending approvals
                </CardTitle>
                <CardDescription className="text-xs text-slate-600">
                  Review attendance corrections and overtime requests.
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 text-xs font-semibold text-red-700 hover:bg-red-50"
              >
                Open approvals
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {MOCK_PENDING_APPROVALS.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-md border border-slate-100 bg-white px-3 py-2 text-xs text-slate-700"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-slate-900">
                        {item.intern}
                      </p>
                      <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {item.id}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {item.type}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {item.submittedAt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-1 rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                <p>
                  Approve or reject requests promptly to keep attendance records
                  accurate and DTRs up to date.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick links */}
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Users className="h-4 w-4 text-blue-700" />
                Manage interns
              </CardTitle>
              <CardDescription className="text-xs text-slate-600">
                View and update intern profiles and schedules.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
              >
                Go to interns
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Clock3 className="h-4 w-4 text-red-600" />
                Attendance & schedules
              </CardTitle>
              <CardDescription className="text-xs text-slate-600">
                Configure shifts, holidays, and attendance rules.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-red-200 text-xs font-semibold text-red-700 hover:bg-red-50"
              >
                Manage attendance
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FileText className="h-4 w-4 text-blue-700" />
                Reports & DTR
              </CardTitle>
              <CardDescription className="text-xs text-slate-600">
                Generate summaries, DTRs, and export files.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
              >
                Open reports
              </Button>
            </CardContent>
          </Card>
        </section>
    </div>
  );
}

