"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function BillingDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const invoice = {
    id: params.id,
    customer: {
      name: "Bella Vista Restaurant",
      email: "manager@bellavista.com",
      phone: "+1 (555) 987-6543",
      address: "123 Business Ave, Downtown, NY 10001",
      type: "Business",
    },
    plan: "Business Pro",
    amount: "₦35,000",
    status: "Paid",
    dueDate: "2024-03-01",
    paidDate: "2024-02-28",
    issueDate: "2024-02-01",
    method: "Bank Transfer",
    description: "Monthly subscription - Business Pro",
    billingPeriod: "February 2024",
    lineItems: [
      {
        description: "Business Pro Monthly Subscription",
        quantity: 1,
        unitPrice: "₦30,000",
        total: "₦30,000",
      },
      {
        description: "Additional Location (Manufacturing Plant)",
        quantity: 1,
        unitPrice: "₦3,000",
        total: "₦3,000",
      },
      {
        description: "Premium Support Package",
        quantity: 1,
        unitPrice: "₦2,000",
        total: "₦2,000",
      },
    ],
    subtotal: "₦35,000",
    tax: "₦0",
    total: "₦35,000",
    paymentHistory: [
      {
        date: "2024-02-28",
        amount: "₦35,000",
        method: "Bank Transfer",
        status: "Completed",
        reference: "TXN-BT-20240228-001",
      },
    ],
    notes: "Payment received on time. Customer has excellent payment history.",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Overdue":
      case "Failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/billing">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Billing
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Invoice Details</h1>
            <p className="text-gray-600 dark:text-gray-400">Invoice ID: {invoice.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Send Invoice
          </Button>
          <Button>Process Payment</Button>
        </div>
      </div>

      {/* Invoice Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-4">
                <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                <Badge variant="outline">{invoice.plan}</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    Issue Date: {invoice.issueDate}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    Due Date: {invoice.dueDate}
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-gray-500" />
                    Paid Date: {invoice.paidDate}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                    Payment Method: {invoice.method}
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                    Amount: {invoice.amount}
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="h-4 w-4 mr-2 text-gray-500" />
                    Billing Period: {invoice.billingPeriod}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{invoice.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Customer Information</h3>
                <div className="p-3 border rounded-lg space-y-2">
                  <p className="font-medium">{invoice.customer.name}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="h-3 w-3 mr-1" />
                    {invoice.customer.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-3 w-3 mr-1" />
                    {invoice.customer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-3 w-3 mr-1" />
                    {invoice.customer.address}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Payment Summary</h3>
                <div className="p-3 border rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{invoice.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>{invoice.tax}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span>{invoice.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="items" className="space-y-4">
        <TabsList>
          <TabsTrigger value="items">Line Items</TabsTrigger>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="items" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Line Items</CardTitle>
              <CardDescription>Detailed breakdown of charges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Description</th>
                      <th className="text-left p-4 font-medium">Quantity</th>
                      <th className="text-left p-4 font-medium">Unit Price</th>
                      <th className="text-left p-4 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.lineItems.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">{item.description}</td>
                        <td className="p-4">{item.quantity}</td>
                        <td className="p-4">{item.unitPrice}</td>
                        <td className="p-4 font-medium">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2">
                      <td colSpan={3} className="p-4 text-right font-medium">
                        Total:
                      </td>
                      <td className="p-4 font-bold text-lg">{invoice.total}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>All payment transactions for this invoice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoice.paymentHistory.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Payment Received</span>
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {payment.date} • {payment.method}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Reference: {payment.reference}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{payment.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Notes</CardTitle>
              <CardDescription>Additional notes and comments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm">{invoice.notes}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Customer Payment History</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">On-time Payment Rate</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Invoices</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold">₦420,000</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Paid</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Actions</CardTitle>
              <CardDescription>Available actions for this invoice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col bg-transparent">
                  <Download className="h-5 w-5 mb-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="h-16 flex-col bg-transparent">
                  <Mail className="h-5 w-5 mb-2" />
                  Email Invoice
                </Button>
                <Button variant="outline" className="h-16 flex-col bg-transparent">
                  <FileText className="h-5 w-5 mb-2" />
                  Duplicate Invoice
                </Button>
                <Button variant="outline" className="h-16 flex-col bg-transparent">
                  <CreditCard className="h-5 w-5 mb-2" />
                  Process Refund
                </Button>
              </div>

              {invoice.status === "Overdue" && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-800 dark:text-red-200">Overdue Invoice</span>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                    This invoice is overdue. Consider sending a payment reminder or contacting the customer.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Send Reminder
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact Customer
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
