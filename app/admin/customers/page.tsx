import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Filter, Download, Eye, Edit, MoreHorizontal, Building2, Home } from "lucide-react"
import Link from "next/link"

export default function AdminCustomersPage() {
  const customers = [
    {
      id: "CUST-001",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      type: "Household",
      plan: "Family Premium",
      status: "Active",
      joinDate: "2024-01-15",
      lastPayment: "2024-03-01",
      systemHealth: "Excellent",
    },
    {
      id: "CUST-002",
      name: "Bella Vista Restaurant",
      email: "manager@bellavista.com",
      phone: "+1 (555) 987-6543",
      type: "Business",
      plan: "Business Pro",
      status: "Active",
      joinDate: "2023-11-20",
      lastPayment: "2024-03-01",
      systemHealth: "Good",
    },
    {
      id: "CUST-003",
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 456-7890",
      type: "Household",
      plan: "Family Premium",
      status: "Pending",
      joinDate: "2024-03-05",
      lastPayment: "N/A",
      systemHealth: "Installation Pending",
    },
    {
      id: "CUST-004",
      name: "Tech Startup Inc.",
      email: "admin@techstartup.com",
      phone: "+1 (555) 321-0987",
      type: "Business",
      plan: "Business Pro",
      status: "Active",
      joinDate: "2024-02-10",
      lastPayment: "2024-03-01",
      systemHealth: "Excellent",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Needs Attention":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Installation Pending":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <Users className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
            Customer Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all customer accounts and subscriptions</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button>Add Customer</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Household</CardTitle>
            <Home className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-muted-foreground">68% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Business</CardTitle>
            <Building2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">400</div>
            <p className="text-xs text-muted-foreground">32% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Systems</CardTitle>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">95.3%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,189</div>
            <p className="text-xs text-muted-foreground">58 pending installation</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
          <CardDescription>Search and filter customer accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Customer Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="household">Household</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Customer Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Plan</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">System Health</th>
                  <th className="text-left p-4 font-medium">Join Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="p-4">
                      <Link
                        href={`/admin/customers/${customer.id}`}
                        className="block hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{customer.email}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{customer.phone}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        {customer.type === "Business" ? (
                          <Building2 className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                        ) : (
                          <Home className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                        )}
                        {customer.type}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{customer.plan}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getHealthColor(customer.systemHealth)}>{customer.systemHealth}</Badge>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{customer.joinDate}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/customers/${customer.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
