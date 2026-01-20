"use client";

import { Calendar, CalendarClock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_TIME_OFF = [
  {
    date: "2026-01-23",
    intern: "Ana Flores",
    type: "Approved absence",
    status: "Approved",
  },
  {
    date: "2026-02-01",
    intern: "Holiday",
    type: "Special non-working holiday",
    status: "Holiday",
  },
];

export default function TimeOffPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">Time Off & Holidays</h2>
        <p className="text-xs text-slate-600">
          Manage holidays, approved absences, and automatic attendance adjustments.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <CalendarClock className="h-4 w-4 text-red-600" />
              Upcoming holidays & leaves
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Calendar of holidays and approved absences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-700">
            {MOCK_TIME_OFF.map((item) => (
              <div
                key={`${item.date}-${item.intern}`}
                className="flex items-center justify-between rounded-md border border-slate-100 bg-white px-3 py-2"
              >
                <div>
                  <p className="font-semibold text-slate-900">{item.intern}</p>
                  <p className="text-[11px] text-slate-500">
                    {item.type} • {item.date}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                  <CheckCircle2 className="h-3 w-3" />
                  {item.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Calendar className="h-4 w-4 text-blue-700" />
              Leave calendar (overview)
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              A full calendar view will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
              Calendar component placeholder – connect to backend data later.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

