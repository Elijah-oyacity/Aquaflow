"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Droplets,
  Home,
  CreditCard,
  TestTube,
  Wrench,
  HelpCircle,
  Settings,
  Menu,
  LogOut,
  Package,
  MapPin,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/household/dashboard", icon: Home },
  { name: "Inventory", href: "/household/inventory", icon: Package },
  { name: "Locations", href: "/household/locations", icon: MapPin },
  { name: "Subscription", href: "/household/subscription", icon: CreditCard },
  { name: "Water Testing", href: "/household/test", icon: TestTube },
  { name: "Maintenance", href: "/household/maintenance", icon: Wrench },
  { name: "Support", href: "/household/support", icon: HelpCircle },
  { name: "Settings", href: "/household/settings", icon: Settings },
]

export default function HouseholdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        {/* Mobile toggle button must live inside <Sheet> */}
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="lg:hidden mt-4 ml-4">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <Droplets className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">AquaFlow</span>
              </div>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          pathname === item.href
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="p-4 border-t border-border">
              <Link href="/login">
                <Button variant="outline" className="w-full bg-transparent">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-card border-r border-border">
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">AquaFlow</span>
            </div>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <Link href="/login">
              <Button variant="outline" className="w-full bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-card border-b border-border px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
              <h1 className="text-2xl font-semibold ml-2 lg:ml-0">Household Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-sm text-muted-foreground">Welcome back, John!</div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
