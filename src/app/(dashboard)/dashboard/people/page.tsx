"use client";

import { Users, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_PEOPLE = [
  { name: "Juan Dela Cruz", role: "Intern", status: "Active" },
  { name: "Maria Santos", role: "Intern", status: "Active" },
  { name: "Engr. Reyes", role: "Supervisor", status: "Active" },
  { name: "PESO Admin", role: "Admin", status: "Active" },
];

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <section>
        <h2 className="text-sm font-semibold text-slate-900">People & Roles</h2>
        <p className="text-xs text-slate-600">
          Manage interns, supervisors, coordinators, and admin accounts with RBAC.
        </p>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Users className="h-4 w-4 text-blue-700" />
            Directory
          </CardTitle>
          <CardDescription className="text-xs text-slate-600">
            Basic list view – connect to users API for full management.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-1.5 text-xs text-slate-700">
          {MOCK_PEOPLE.map((person) => (
            <div
              key={`${person.name}-${person.role}`}
              className="flex items-center justify-between rounded-md border border-slate-100 bg-white px-3 py-2"
            >
              <div>
                <p className="font-semibold text-slate-900">{person.name}</p>
                <p className="text-[11px] text-slate-500">{person.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                  <ShieldCheck className="h-3 w-3" />
                  {person.status}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

