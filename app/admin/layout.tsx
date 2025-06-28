"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Droplets,
  BarChart3,
  Users,
  Wrench,
  TestTube,
  CreditCard,
  Settings,
  Menu,
  LogOut,
  Shield,
  UserCheck,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Technicians", href: "/admin/technicians", icon: UserCheck },
  { name: "Maintenance", href: "/admin/maintenance", icon: Wrench },
  { name: "Water Tests", href: "/admin/tests", icon: TestTube },
  { name: "Billing", href: "/admin/billing", icon: CreditCard },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Permissions", href: "/admin/permissions", icon: Shield },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-card border-r border-border">
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">AquaFlow</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Admin Portal</p>
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
              <Sheet>
                {/* trigger */}
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                {/* mobile sidebar content */}
                <SheetContent side="left" className="w-64 p-0 lg:hidden">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center space-x-2">
                        <Droplets className="h-8 w-8 text-blue-600" />
                        <span className="text-xl font-bold">AquaFlow</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Admin Portal</p>
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
                </SheetContent>
              </Sheet>
              <h1 className="text-2xl font-semibold ml-2 lg:ml-0">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-sm text-muted-foreground">Administrator</div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
