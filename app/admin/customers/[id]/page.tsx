"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  Wrench,
  MessageSquare,
  DollarSign,
  Droplets,
  Thermometer,
  Activity,
  Building2,
  Home,
  Edit,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CustomerDetailPage() {
  const params = useParams()
  const customerId = params.id

  // Mock customer data - in real app, this would be fetched based on ID
  const customer = {
    id: customerId,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    type: "Household",
    plan: "Family Premium",
    status: "Active",
    joinDate: "2024-01-15",
    lastPayment: "2024-03-01",
    systemHealth: "Excellent",
    address: "123 Main Street, Anytown, ST 12345",
    avatar: "/placeholder.svg?height=80&width=80",
    totalSpent: "$2,847",
    monthlyBill: "$89",
    systemInstallDate: "2024-01-20",
    lastMaintenance: "2024-02-15",
    nextMaintenance: "2024-04-15",
  }

  const systemMetrics = [
    { label: "Water Quality", value: "98%", status: "excellent", icon: Droplets },
    { label: "System Efficiency", value: "94%", status: "good", icon: Activity },
    { label: "Temperature", value: "68°F", status: "normal", icon: Thermometer },
    { label: "Pressure", value: "45 PSI", status: "normal", icon: Activity },
  ]

  const maintenanceHistory = [
    {
      id: "MAINT-001",
      date: "2024-02-15",
      type: "Routine Maintenance",
      technician: "Mike Johnson",
      status: "Completed",
      notes: "Filter replacement and system check completed successfully",
    },
    {
      id: "MAINT-002",
      date: "2024-01-20",
      type: "Installation",
      technician: "Sarah Wilson",
      status: "Completed",
      notes: "Initial system installation and setup",
    },
  ]

  const billingHistory = [
    {
      id: "INV-001",
      date: "2024-03-01",
      amount: "$89.00",
      status: "Paid",
      description: "Monthly subscription - Family Premium",
    },
    {
      id: "INV-002",
      date: "2024-02-01",
      amount: "$89.00",
      status: "Paid",
      description: "Monthly subscription - Family Premium",
    },
    {
      id: "INV-003",
      date: "2024-01-20",
      amount: "$299.00",
      status: "Paid",
      description: "Installation fee and first month",
    },
  ]

  const supportTickets = [
    {
      id: "TICK-001",
      date: "2024-02-28",
      subject: "Water taste issue",
      status: "Resolved",
      priority: "Medium",
      lastUpdate: "2024-03-02",
    },
    {
      id: "TICK-002",
      date: "2024-01-25",
      subject: "Setup assistance",
      status: "Closed",
      priority: "Low",
      lastUpdate: "2024-01-26",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Completed":
      case "Paid":
      case "Resolved":
      case "Closed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Suspended":
      case "Overdue":
      case "Open":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getMetricColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 dark:text-green-400"
      case "good":
        return "text-blue-600 dark:text-blue-400"
      case "normal":
        return "text-gray-600 dark:text-gray-400"
      case "warning":
        return "text-yellow-600 dark:text-yellow-400"
      case "critical":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/customers">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Customers
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Customer Details</h1>
            <p className="text-gray-600 dark:text-gray-400">ID: {customer.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Customer
          </Button>
          <Button variant="outline">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Customer Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                <AvatarFallback className="text-lg">
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{customer.name}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                  {customer.type === "Business" ? (
                    <Building2 className="h-4 w-4 mr-2" />
                  ) : (
                    <Home className="h-4 w-4 mr-2" />
                  )}
                  {customer.type} Customer
                </div>
                <Badge className={getStatusColor(customer.status)} variant="secondary">
                  {customer.status}
                </Badge>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  {customer.email}
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  {customer.phone}
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  {customer.address}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  Joined: {customer.joinDate}
                </div>
                <div className="flex items-center text-sm">
                  <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                  Plan: {customer.plan}
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                  Total Spent: {customer.totalSpent}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
                  <p className={`text-2xl font-bold ${getMetricColor(metric.status)}`}>{metric.value}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${getMetricColor(metric.status)}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="system" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system">System Info</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>Current system status and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Installation Date</label>
                    <p className="text-sm">{customer.systemInstallDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">System Health</label>
                    <p className="text-sm">{customer.systemHealth}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Last Maintenance</label>
                    <p className="text-sm">{customer.lastMaintenance}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Next Maintenance</label>
                    <p className="text-sm">{customer.nextMaintenance}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Usage</label>
                    <p className="text-sm">2,847 gallons</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">System Model</label>
                    <p className="text-sm">AquaFlow Pro 3000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
              <CardDescription>All maintenance activities and service records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceHistory.map((maintenance) => (
                  <div
                    key={maintenance.id}
                    className="flex items-start space-x-4 p-4 border rounded-lg dark:border-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <Wrench className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{maintenance.type}</h4>
                        <Badge className={getStatusColor(maintenance.status)} variant="secondary">
                          {maintenance.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {maintenance.date} • Technician: {maintenance.technician}
                      </p>
                      <p className="text-sm mt-2">{maintenance.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Payment history and invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((bill) => (
                  <div
                    key={bill.id}
                    className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-medium">{bill.description}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {bill.date} • {bill.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{bill.amount}</p>
                      <Badge className={getStatusColor(bill.status)} variant="secondary">
                        {bill.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Customer support history and open tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-start space-x-4 p-4 border rounded-lg dark:border-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{ticket.subject}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{ticket.priority}</Badge>
                          <Badge className={getStatusColor(ticket.status)} variant="secondary">
                            {ticket.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Created: {ticket.date} • Last Update: {ticket.lastUpdate}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">ID: {ticket.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
