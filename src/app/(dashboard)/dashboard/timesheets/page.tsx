"use client";

import { FileText, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MOCK_TIMESHEETS = [
  {
    intern: "Juan Dela Cruz",
    date: "2026-01-20",
    timeIn: "08:05 AM",
    timeOut: "05:02 PM",
    breakTotal: "01:00",
    status: "On time",
  },
  {
    intern: "Maria Santos",
    date: "2026-01-20",
    timeIn: "08:27 AM",
    timeOut: "05:16 PM",
    breakTotal: "00:45",
    status: "Late",
  },
];

export default function TimesheetsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Timesheets</h2>
          <p className="text-xs text-slate-600">
            Daily time records with time-in/out, breaks, and status indicators.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-slate-200 text-xs text-slate-700 hover:bg-slate-50"
          >
            <Filter className="h-3.5 w-3.5" />
            Filters
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-slate-200 text-xs text-slate-700 hover:bg-slate-50"
          >
            Export Excel
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-slate-200 text-xs text-slate-700 hover:bg-slate-50"
          >
            Export PDF
          </Button>
        </div>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FileText className="h-4 w-4 text-blue-700" />
              Daily Time Records
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Summary of intern time-in, time-out, breaks, and status.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-2 rounded-md bg-slate-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Intern</span>
            <span>Date</span>
            <span>Time in</span>
            <span>Time out</span>
            <span>Break</span>
            <span>Status</span>
          </div>
          <div className="space-y-1.5">
            {MOCK_TIMESHEETS.map((row) => (
              <div
                key={`${row.intern}-${row.date}`}
                className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-2 rounded-md border border-slate-100 bg-white px-3 py-2 text-xs text-slate-700"
              >
                <span className="truncate font-medium text-slate-900">
                  {row.intern}
                </span>
                <span>{row.date}</span>
                <span>{row.timeIn}</span>
                <span>{row.timeOut}</span>
                <span>{row.breakTotal}</span>
                <span>
                  {row.status === "On time" && (
                    <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                      On time
                    </span>
                  )}
                  {row.status === "Late" && (
                    <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200">
                      Late
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <Separator />
          <p className="text-[11px] text-slate-500">
            Manual corrections and admin overrides will be logged in the audit trail once
            backend integration is complete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

