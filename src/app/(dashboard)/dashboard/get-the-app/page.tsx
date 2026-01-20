"use client";

import { Smartphone, QrCode, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetTheAppPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">Get the App</h2>
        <p className="text-xs text-slate-600">
          Instructions for using the system via mobile browsers – web-only, no native
          install required.
        </p>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Smartphone className="h-4 w-4 text-blue-700" />
            Mobile browser access
          </CardTitle>
          <CardDescription className="text-xs text-slate-600">
            Interns can access the system through supported mobile browsers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-slate-700">
          <p>
            1. Open your mobile browser (Chrome, Safari, Edge) and visit the official PESO
            OJT Attendance URL.
          </p>
          <p>2. Allow camera and location permissions for QR and GPS verification.</p>
          <p>3. Add the site to your home screen for quick access.</p>
          <div className="flex items-center gap-3 rounded-md border border-dashed border-slate-200 bg-slate-50 px-3 py-3">
            <QrCode className="h-10 w-10 text-slate-400" />
            <div>
              <p className="text-xs font-semibold text-slate-900">
                QR code placeholder
              </p>
              <p className="text-[11px] text-slate-500">
                Generate a QR linking to the login page so interns can scan and open the
                system quickly.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-slate-100 bg-white px-3 py-2">
            <Globe className="h-4 w-4 text-slate-400" />
            <p className="text-[11px] text-slate-600">
              Supported: latest versions of Chrome, Edge, Safari, and Firefox on Android
              and iOS.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

