"use client";

import { Clock3, Camera, QrCode, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TimeTrackingPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">Time Tracking</h2>
        <p className="text-xs text-slate-600">
          Monitor clock-in/out events, breaks, and verification methods in real time.
        </p>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Clock3 className="h-4 w-4 text-blue-700" />
            Recent tracking activity
          </CardTitle>
          <CardDescription className="text-xs text-slate-600">
            A detailed audit trail will be wired here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-xs text-slate-700">
          <div className="flex items-center justify-between rounded-md border border-slate-100 bg-white px-3 py-2">
            <div>
              <p className="font-semibold text-slate-900">Juan Dela Cruz</p>
              <p className="text-[11px] text-slate-500">
                Clock-in • 08:03 AM • Today
              </p>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-600">
              <Smartphone className="h-3 w-3" />
              <QrCode className="h-3 w-3" />
              <Camera className="h-3 w-3" />
            </div>
          </div>
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
            Stream of clock events, breaks, and overrides will appear here.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

