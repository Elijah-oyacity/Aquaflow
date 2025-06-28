import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CreditCard,
  Search,
  Filter,
  Download,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function AdminBillingPage() {
  const billingData = [
    {
      id: "INV-001",
      customer: "Bella Vista Restaurant",
      plan: "Business Pro",
      amount: "₦35,000",
      status: "Paid",
      dueDate: "2024-03-01",
      paidDate: "2024-02-28",
      method: "Bank Transfer",
    },
    {
      id: "INV-002",
      customer: "Johnson Family",
      plan: "Family Premium",
      amount: "₦15,000",
      status: "Paid",
      dueDate: "2024-03-01",
      paidDate: "2024-03-01",
      method: "Card",
    },
    {
      id: "INV-003",
      customer: "Tech Startup Inc.",
      plan: "Business Pro",
      amount: "₦35,000",
      status: "Overdue",
      dueDate: "2024-02-28",
      paidDate: "N/A",
      method: "Bank Transfer",
    },
    {
      id: "INV-004",
      customer: "Sarah Wilson",
      plan: "Family Premium",
      amount: "₦15,000",
      status: "Pending",
      dueDate: "2024-03-15",
      paidDate: "N/A",
      method: "Card",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
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
            <CreditCard className="h-6 w-6 mr-2 text-green-600" />
            Billing Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Manage customer billing, payments, and financial reports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>Generate Invoice</Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦18.7M</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.3M</div>
            <p className="text-xs text-muted-foreground">47 overdue invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Excellent performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Payment Time</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3</div>
            <p className="text-xs text-muted-foreground">Days after due date</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Plan</CardTitle>
            <CardDescription>Monthly revenue breakdown by subscription plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Business Pro (₦35,000)</span>
                <div className="text-right">
                  <div className="font-bold">₦14.0M</div>
                  <div className="text-xs text-gray-600">400 customers</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Family Premium (₦15,000)</span>
                <div className="text-right">
                  <div className="font-bold">₦12.7M</div>
                  <div className="text-xs text-gray-600">847 customers</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Setup Fees & Others</span>
                <div className="text-right">
                  <div className="font-bold">₦2.0M</div>
                  <div className="text-xs text-gray-600">Various</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment methods used</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Bank Transfer</span>
                <Badge variant="outline">65%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Credit/Debit Card</span>
                <Badge variant="outline">28%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Mobile Money</span>
                <Badge variant="outline">5%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Cash</span>
                <Badge variant="outline">2%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>Latest billing transactions and payment status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search invoices..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="business">Business Pro</SelectItem>
                <SelectItem value="family">Family Premium</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Invoice Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-4 font-medium">Invoice ID</th>
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Plan</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Due Date</th>
                  <th className="text-left p-4 font-medium">Paid Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingData.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="p-4">
                      <Link
                        href={`/admin/billing/${invoice.id}`}
                        className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {invoice.id}
                      </Link>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{invoice.customer}</div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{invoice.plan}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="font-bold">{invoice.amount}</div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                    </td>
                    <td className="p-4 text-sm">{invoice.dueDate}</td>
                    <td className="p-4 text-sm">{invoice.paidDate}</td>
                    <td className="p-4">
                      <Link href={`/admin/billing/${invoice.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Send Reminders</CardTitle>
            <CardDescription>Send payment reminders to overdue customers</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Send Overdue Reminders</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Reports</CardTitle>
            <CardDescription>Create financial reports for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Monthly Financial Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Processing</CardTitle>
            <CardDescription>Process failed payments and refunds</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Process Failed Payments
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
