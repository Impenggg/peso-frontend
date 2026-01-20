"use client";

import { Settings2, ShieldCheck, MapPin, QrCode, Camera, Fingerprint } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">System Settings</h2>
        <p className="text-xs text-slate-600">
          Configure attendance rules, verification methods, and system preferences.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              Attendance rules
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Grace period, overtime thresholds, and rounding rules.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center justify-between">
              <span>Grace period (minutes)</span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px]">
                10
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Minimum overtime (minutes)</span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px]">
                60
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Settings2 className="h-4 w-4 text-blue-700" />
              Verification methods
            </CardTitle>
            <CardDescription className="text-xs text-slate-600">
              Enforce one or more checks for clock in/out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-700">
            <label className="flex items-center gap-2">
              <Checkbox id="gps" defaultChecked />
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-emerald-700" />
                GPS location
              </span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox id="selfie" defaultChecked />
              <span className="inline-flex items-center gap-1">
                <Camera className="h-3 w-3 text-emerald-700" />
                Selfie capture
              </span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox id="qr" defaultChecked />
              <span className="inline-flex items-center gap-1">
                <QrCode className="h-3 w-3 text-emerald-700" />
                QR code
              </span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox id="device" />
              <span className="inline-flex items-center gap-1">
                <Fingerprint className="h-3 w-3 text-emerald-700" />
                Device fingerprint
              </span>
            </label>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

