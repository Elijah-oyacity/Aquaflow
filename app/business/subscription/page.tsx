"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  CreditCard,
  Calendar,
  Download,
  FileText,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Building,
  Droplets,
} from "lucide-react"

const subscriptionData = {
  plan: "Enterprise Pro",
  status: "Active",
  nextBilling: "2024-02-15",
  monthlyRate: 2499.99,
  locations: 4,
  maxLocations: 10,
  employees: 935,
  maxEmployees: 2000,
  waterAllowance: 500000, // liters per month
  waterUsed: 210000,
  features: [
    "Advanced Water Treatment",
    "Real-time Monitoring",
    "Predictive Maintenance",
    "Priority Support",
    "Custom Analytics",
    "API Access",
  ],
}

const billingHistory = [
  {
    id: "INV-2024-001",
    date: "2024-01-15",
    amount: 2499.99,
    status: "Paid",
    period: "Jan 2024",
    dueDate: "2024-01-30",
  },
  {
    id: "INV-2023-012",
    date: "2023-12-15",
    amount: 2499.99,
    status: "Paid",
    period: "Dec 2023",
    dueDate: "2023-12-30",
  },
  {
    id: "INV-2023-011",
    date: "2023-11-15",
    amount: 2499.99,
    status: "Paid",
    period: "Nov 2023",
    dueDate: "2023-11-30",
  },
  {
    id: "INV-2023-010",
    date: "2023-10-15",
    amount: 2299.99,
    status: "Paid",
    period: "Oct 2023",
    dueDate: "2023-10-30",
  },
]

const usageData = [
  { month: "Jan 2024", water: 210000, cost: 2499.99 },
  { month: "Dec 2023", water: 195000, cost: 2499.99 },
  { month: "Nov 2023", water: 225000, cost: 2499.99 },
  { month: "Oct 2023", water: 180000, cost: 2299.99 },
  { month: "Sep 2023", water: 205000, cost: 2299.99 },
  { month: "Aug 2023", water: 220000, cost: 2299.99 },
]

export default function BusinessSubscriptionPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const waterUsagePercentage = (subscriptionData.waterUsed / subscriptionData.waterAllowance) * 100
  const locationUsagePercentage = (subscriptionData.locations / subscriptionData.maxLocations) * 100
  const employeeUsagePercentage = (subscriptionData.employees / subscriptionData.maxEmployees) * 100

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        )
      case "Paid":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Paid
          </Badge>
        )
      case "Pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Pending
          </Badge>
        )
      case "Overdue":
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscription Management</h1>
          <p className="text-gray-600 mt-1">Manage your AquaFlow business subscription and billing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Invoice
          </Button>
          <Button>Upgrade Plan</Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="billing">Billing History</TabsTrigger>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Current Subscription
              </CardTitle>
              <CardDescription>Your active AquaFlow business plan details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{subscriptionData.plan}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusBadge(subscriptionData.status)}
                      <span className="text-sm text-gray-500">Next billing: {subscriptionData.nextBilling}</span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold">
                    ${subscriptionData.monthlyRate.toLocaleString()}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Included Features:</h4>
                    <ul className="space-y-1">
                      {subscriptionData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Usage Metrics */}
                  <div>
                    <h4 className="font-medium mb-3">Current Usage</h4>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Water Allowance</span>
                          <span>
                            {subscriptionData.waterUsed.toLocaleString()}L /{" "}
                            {subscriptionData.waterAllowance.toLocaleString()}L
                          </span>
                        </div>
                        <Progress value={waterUsagePercentage} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Locations</span>
                          <span>
                            {subscriptionData.locations} / {subscriptionData.maxLocations}
                          </span>
                        </div>
                        <Progress value={locationUsagePercentage} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Employees</span>
                          <span>
                            {subscriptionData.employees.toLocaleString()} /{" "}
                            {subscriptionData.maxEmployees.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={employeeUsagePercentage} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${subscriptionData.monthlyRate.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 inline mr-1" />
                  +8.7% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{subscriptionData.locations}</div>
                <p className="text-xs text-muted-foreground">
                  {subscriptionData.maxLocations - subscriptionData.locations} remaining
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.round(waterUsagePercentage)}%</div>
                <p className="text-xs text-muted-foreground">Of monthly allowance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">Days remaining</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.period}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>Track your water consumption and costs over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Water Usage</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Efficiency</TableHead>
                      <TableHead>Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usageData.map((data, index) => (
                      <TableRow key={data.month}>
                        <TableCell className="font-medium">{data.month}</TableCell>
                        <TableCell>{data.water.toLocaleString()}L</TableCell>
                        <TableCell>${data.cost.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className="text-green-600">
                            {((data.water / subscriptionData.waterAllowance) * 100).toFixed(1)}%
                          </span>
                        </TableCell>
                        <TableCell>
                          {index > 0 && (
                            <span
                              className={data.water > usageData[index - 1].water ? "text-red-600" : "text-green-600"}
                            >
                              {data.water > usageData[index - 1].water ? "↑" : "↓"}
                              {Math.abs(
                                ((data.water - usageData[index - 1].water) / usageData[index - 1].water) * 100,
                              ).toFixed(1)}
                              %
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Settings</CardTitle>
              <CardDescription>Manage your subscription preferences and billing information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Plan Management</h3>
                  <div className="space-y-2">
                    <Button className="w-full">Upgrade Plan</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Change Plan
                    </Button>
                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700 bg-transparent">
                      Cancel Subscription
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing Settings</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-transparent">
                      Update Payment Method
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Change Billing Address
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download Tax Documents
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
