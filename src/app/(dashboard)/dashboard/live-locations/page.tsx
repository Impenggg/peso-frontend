"use client";

import { MapPin, Smartphone, Camera, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_LIVE_LOCATIONS = [
  {
    intern: "Juan Dela Cruz",
    status: "Clocked in",
    lastSeen: "2 min ago",
    location: "Cabuyao City Hall",
    verification: ["GPS", "Selfie"],
  },
  {
    intern: "Maria Santos",
    status: "On break",
    lastSeen: "10 min ago",
    location: "Off-site",
    verification: ["GPS"],
  },
];

export default function LiveLocationsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">Live Locations</h2>
        <p className="text-xs text-slate-600">
          Monitor currently clocked-in interns and validate their latest GPS and selfie
          data.
        </p>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <MapPin className="h-4 w-4 text-blue-700" />
            Currently clocked-in interns
          </CardTitle>
          <CardDescription className="text-xs text-slate-600">
            Browser-based geolocation and verification status.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {MOCK_LIVE_LOCATIONS.map((row) => (
            <div
              key={row.intern}
              className="flex flex-col gap-1 rounded-md border border-slate-100 bg-white px-3 py-2 text-xs text-slate-700 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{row.intern}</p>
                <p className="text-[11px] text-slate-500">
                  {row.status} • Last seen {row.lastSeen}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700 ring-1 ring-slate-200">
                  <Smartphone className="h-3 w-3" />
                  {row.location}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-600">
                  {row.verification.includes("GPS") && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-100">
                      GPS
                    </span>
                  )}
                  {row.verification.includes("Selfie") && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-100">
                      <Camera className="h-3 w-3" />
                      Selfie
                    </span>
                  )}
                  {row.location === "Off-site" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-800 ring-1 ring-amber-200">
                      <AlertCircle className="h-3 w-3" />
                      Off-site
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

