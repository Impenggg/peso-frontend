"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  CalendarClock,
  Clock3,
  Compass,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Settings2,
  Smartphone,
  UserCircle2,
  Users,
  Bell,
  Play,
  Square,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type DashboardLayoutProps = {
  children: ReactNode;
};

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { label: "Timesheets", href: "/dashboard/timesheets", icon: FileText },
  { label: "Live Locations", href: "/dashboard/live-locations", icon: Compass },
  { label: "Time Off", href: "/dashboard/time-off", icon: CalendarClock },
  { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings2 },
  { label: "People", href: "/dashboard/people", icon: Users },
  { label: "Time Tracking", href: "/dashboard/time-tracking", icon: Clock3 },
  { label: "Work Schedules", href: "/dashboard/work-schedules", icon: CalendarClock },
  { label: "Get the App", href: "/dashboard/get-the-app", icon: Smartphone },
];

function getSectionFromPath(pathname: string): string {
  const match = NAV_ITEMS.find((item) =>
    pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
  return match?.label ?? "Dashboard";
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();
  const [viewRange, setViewRange] = useState<"day" | "week" | "month">("day");
  const [isTracking, setIsTracking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = useMemo(() => getSectionFromPath(pathname), [pathname]);

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (isLoading) return;
    if (!isAdmin) {
      router.replace("/login");
    }
  }, [isAdmin, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm text-slate-700 shadow-sm">
          Loading admin workspace…
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 shadow-sm">
          <HelpCircle className="h-4 w-4" />
          <span>Admin access only. Redirecting…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white/95 backdrop-blur transition-transform",
          "md:static md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              PESO Admin
            </p>
            <p className="text-sm font-semibold text-slate-900">
              OJT Attendance System
            </p>
          </div>
        </div>
        <Separator />
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-3 text-sm">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => {
                  router.push(item.href);
                  setSidebarOpen(false);
                }}
                className={[
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-800 ring-1 ring-blue-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <Separator />
        <div className="flex flex-col gap-2 px-3 py-3 text-xs text-slate-500">
          <p className="font-semibold">
            Signed in as{" "}
            <span className="text-slate-900">
              {user?.name ?? user?.username ?? "Admin"}
            </span>
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="justify-start border-slate-200 text-xs text-slate-600 hover:bg-slate-50"
            onClick={() => {
              logout();
              router.replace("/login");
            }}
          >
            Sign out
          </Button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex min-h-screen flex-1 flex-col">
        {/* Top header bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-0 py-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 md:hidden"
                onClick={() => setSidebarOpen((v) => !v)}
                aria-label="Toggle navigation"
              >
                <Menu className="h-4 w-4" />
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Admin • {currentSection}
                </p>
                <h1 className="text-lg font-semibold text-slate-900">
                  {currentSection === "Dashboard"
                    ? "OJT Attendance Overview"
                    : currentSection}
                </h1>
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              {/* View switch */}
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-medium text-slate-600">
                {(["day", "week", "month"] as const).map((view) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setViewRange(view)}
                    className={[
                      "px-3 py-1 rounded-full transition-colors",
                      viewRange === view
                        ? "bg-white text-slate-900 shadow-sm"
                        : "hover:text-slate-900",
                    ].join(" ")}
                  >
                    {view === "day"
                      ? "Day"
                      : view === "week"
                        ? "Week"
                        : "Month"}
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:bg-slate-50"
                >
                  All Locations
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:bg-slate-50"
                >
                  All Groups
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 hover:bg-slate-50"
                >
                  All Schedules
                </button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                className={`hidden items-center gap-1 rounded-full px-3 text-xs font-semibold shadow-sm md:inline-flex ${
                  isTracking
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-700 hover:bg-blue-800"
                }`}
                onClick={() => setIsTracking((v) => !v)}
              >
                {isTracking ? (
                  <>
                    <Square className="h-3.5 w-3.5" />
                    Stop Tracking
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" />
                    Start Tracking
                  </>
                )}
              </Button>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                aria-label="Help and support"
              >
                <HelpCircle className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 sm:inline-flex"
                aria-label="User profile"
              >
                <UserCircle2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-0 py-4 md:px-0 md:py-6">
          <div className="flex w-full flex-col gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

