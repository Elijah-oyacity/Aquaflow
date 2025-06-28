"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Building2,
  BarChart3,
  Package,
  MapPin,
  CreditCard,
  Wrench,
  HelpCircle,
  Settings,
  Menu,
  Bell,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/business/dashboard", icon: BarChart3 },
  { name: "Analytics", href: "/business/analytics", icon: BarChart3 },
  { name: "Inventory", href: "/business/inventory", icon: Package },
  { name: "Locations", href: "/business/locations", icon: MapPin },
  { name: "Subscription", href: "/business/subscription", icon: CreditCard },
  { name: "Maintenance", href: "/business/maintenance", icon: Wrench },
  { name: "Support", href: "/business/support", icon: HelpCircle },
  { name: "Settings", href: "/business/settings", icon: Settings },
]

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 bg-card overflow-y-auto border-r border-border">
          <div className="flex items-center flex-shrink-0 px-4">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">AquaFlow Business</span>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      isActive
                        ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-300"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive ? "text-blue-500" : "text-muted-foreground group-hover:text-accent-foreground",
                        "mr-3 flex-shrink-0 h-6 w-6",
                      )}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <div className="bg-card shadow-sm border-b border-border">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-0">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center flex-shrink-0 px-4 py-4 border-b border-border">
                        <Building2 className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-semibold">AquaFlow Business</span>
                      </div>
                      <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => {
                          const isActive = pathname === item.href
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                isActive
                                  ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-300"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                              )}
                            >
                              <item.icon
                                className={cn(
                                  isActive
                                    ? "text-blue-500"
                                    : "text-muted-foreground group-hover:text-accent-foreground",
                                  "mr-3 flex-shrink-0 h-6 w-6",
                                )}
                              />
                              {item.name}
                            </Link>
                          )
                        })}
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>

                <h1 className="ml-4 text-2xl font-semibold md:ml-0">Business Portal</h1>
              </div>

              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
