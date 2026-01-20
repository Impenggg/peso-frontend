"use client";

import { CalendarClock, Clock3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_SCHEDULES = [
  {
    name: "Standard OJT Shift",
    time: "08:00 AM – 05:00 PM",
    days: "Mon – Fri",
  },
  {
    name: "Flexible Shift",
    time: "Any 8 hrs / day",
    days: "Mon – Sat",
  },
];

export default function WorkSchedulesPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">Work Schedules</h2>
        <p className="text-xs text-slate-600">
          Define and monitor shift patterns, flexible schedules, and holiday handling.
        </p>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <CalendarClock className="h-4 w-4 text-blue-700" />
            Schedule templates
          </CardTitle>
          <CardDescription className="text-xs text-slate-600">
            Basic schedule list – connect to schedules API for full CRUD.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-xs text-slate-700">
          {MOCK_SCHEDULES.map((sched) => (
            <div
              key={sched.name}
              className="flex items-center justify-between rounded-md border border-slate-100 bg-white px-3 py-2"
            >
              <div>
                <p className="font-semibold text-slate-900">{sched.name}</p>
                <p className="text-[11px] text-slate-500">
                  {sched.time} • {sched.days}
                </p>
              </div>
              <Clock3 className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

