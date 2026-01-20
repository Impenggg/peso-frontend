"use client";

import { BarChart3, FileDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Reports</h2>
          <p className="text-xs text-slate-600">
            Generate DTRs, attendance summaries, and lateness/absence reports.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-slate-200 text-xs text-slate-700 hover:bg-slate-50"
          >
            <FileDown className="h-3.5 w-3.5" />
            Export current view
          </Button>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <BarChart3 className="h-4 w-4 text-blue-700" />
              Attendance summary
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              High-level view of presence, late, and absence counts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
              Chart.js visualization placeholder – connect to statistics API.
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-slate-900">
              Quick export options
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Pre-defined report presets for common use cases.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-700">
            <button className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-left hover:bg-slate-50">
              Daily Time Record (DTR) – current month
            </button>
            <button className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-left hover:bg-slate-50">
              Late & absences – last 30 days
            </button>
            <button className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-left hover:bg-slate-50">
              Hours rendered per intern – custom range
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

