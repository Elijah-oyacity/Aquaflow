"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Droplets, Clipboard, MapPin, Wrench, CheckSquare, Settings, Clock, Menu, LogOut } from "lucide-react"

const navigation = [
  { name: "Assigned Jobs", href: "/technician/jobs", icon: Clipboard },
  { name: "Route Planner", href: "/technician/routes", icon: MapPin },
  { name: "Diagnostics", href: "/technician/diagnostics", icon: Wrench },
  { name: "Check In/Out", href: "/technician/check-in-out", icon: CheckSquare },
  { name: "Time Tracking", href: "/technician/time-tracking", icon: Clock },
  { name: "Settings", href: "/technician/settings", icon: Settings },
]

export default function TechnicianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="min-h-screen bg-background">
        {/* Mobile sidebar */}
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-full flex-col">
            <div className="border-b border-border p-6">
              <div className="flex items-center space-x-2">
                <Droplets className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">AquaFlow</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Technician Portal</p>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigation.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
                        pathname === href
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border p-4">
              <Link href="/login">
                <Button variant="outline" className="w-full bg-transparent">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>

        {/* Desktop sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-grow flex-col border-r border-border bg-card">
            <div className="border-b border-border p-6">
              <div className="flex items-center space-x-2">
                <Droplets className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">AquaFlow</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Technician Portal</p>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigation.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
                        pathname === href
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border p-4">
              <Link href="/login">
                <Button variant="outline" className="w-full bg-transparent">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="lg:pl-64">
          {/* Top bar */}
          <div className="border-b border-border bg-card px-4 py-4 lg:px-6">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <div className="flex items-center">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <h1 className="ml-2 text-2xl font-semibold lg:ml-0">Technician Dashboard</h1>
              </div>

              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <div className="text-sm text-muted-foreground">
                  Welcome,&nbsp;<span className="font-medium">Mike Thompson</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </Sheet>
  )
}
