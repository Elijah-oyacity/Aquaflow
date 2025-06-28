"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Calendar, Download, Droplets, Check, X, AlertTriangle } from "lucide-react"

const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 8000,
    bottles: 20,
    features: ["20 bottles per month", "Standard delivery", "Email support"],
  },
  {
    id: "family",
    name: "Family Premium Plan",
    price: 15000,
    bottles: "Unlimited",
    features: ["Unlimited bottles", "Priority delivery", "24/7 phone support", "Quality guarantee"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Plus",
    price: 25000,
    bottles: "Unlimited",
    features: [
      "Unlimited bottles",
      "Same-day delivery",
      "Dedicated support",
      "Premium water options",
      "Free maintenance",
    ],
  },
]

export default function HouseholdSubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("family")
  const [showPlanModal, setShowPlanModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePlanChange = async () => {
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setShowPlanModal(false)
    setShowPaymentModal(false)
  }

  const handleCancelSubscription = async () => {
    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setShowCancelModal(false)
  }

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Droplets className="h-5 w-5 mr-2 text-blue-600" />
            Current Subscription
          </CardTitle>
          <CardDescription>Your active plan and billing information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Family Premium Plan</h3>
              <p className="text-blue-700 dark:text-blue-300">₦15,000/month • Unlimited bottles</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Active since January 15, 2024</p>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Active</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">47</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bottles This Month</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">23</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Days Remaining</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">₦15,000</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Next Payment</div>
            </div>
          </div>

          {/* Subscription Management Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Dialog open={showPlanModal} onOpenChange={setShowPlanModal}>
              <DialogTrigger asChild>
                <Button className="flex-1">
                  <Droplets className="h-4 w-4 mr-2" />
                  Change Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Choose Your Plan</DialogTitle>
                  <DialogDescription>Select the plan that best fits your water consumption needs</DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  {subscriptionPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
                          Most Popular
                        </Badge>
                      )}

                      <div className="text-center space-y-4">
                        <h3 className="text-lg font-bold">{plan.name}</h3>
                        <div>
                          <span className="text-3xl font-bold">₦{plan.price.toLocaleString()}</span>
                          <span className="text-gray-600 dark:text-gray-400">/month</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{plan.bottles} bottles per month</p>

                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <RadioGroup value={selectedPlan} className="hidden">
                          <RadioGroupItem value={plan.id} />
                        </RadioGroup>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button variant="outline" onClick={() => setShowPlanModal(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setShowPlanModal(false)
                      setShowPaymentModal(true)
                    }}
                    disabled={selectedPlan === "family"}
                  >
                    {selectedPlan === "family" ? "Current Plan" : "Continue to Payment"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={showCancelModal} onOpenChange={setShowCancelModal}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Cancel Subscription
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                    Cancel Subscription
                  </DialogTitle>
                  <DialogDescription>
                    Are you sure you want to cancel your subscription? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">What happens when you cancel:</h4>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      <li>• Your subscription will remain active until March 15, 2024</li>
                      <li>• You'll lose access to unlimited bottles</li>
                      <li>• No refund for the current billing period</li>
                      <li>• You can resubscribe anytime</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowCancelModal(false)}>
                    Keep Subscription
                  </Button>
                  <Button variant="destructive" onClick={handleCancelSubscription} disabled={isProcessing}>
                    {isProcessing ? "Cancelling..." : "Cancel Subscription"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Subscription Change</DialogTitle>
            <DialogDescription>Confirm your new plan and payment details</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Plan Summary */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 className="font-medium mb-2">Plan Summary</h4>
              <div className="flex justify-between items-center">
                <span>{subscriptionPlans.find((p) => p.id === selectedPlan)?.name}</span>
                <span className="font-bold">
                  ₦{subscriptionPlans.find((p) => p.id === selectedPlan)?.price.toLocaleString()}/month
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Change takes effect immediately</p>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h4 className="font-medium">Payment Method</h4>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/26</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="space-y-4">
              <h4 className="font-medium">Billing Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
              Cancel
            </Button>
            <Button onClick={handlePlanChange} disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Confirm Change"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Billing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-green-600" />
            Billing Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-6 w-6 text-gray-400" />
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/26</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Update
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-gray-400" />
              <div>
                <p className="font-medium">Next billing date</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 15, 2024</p>
              </div>
            </div>
            <Badge variant="outline">Auto-renew enabled</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Usage History */}
      <Card>
        <CardHeader>
          <CardTitle>Usage History</CardTitle>
          <CardDescription>Your water consumption over the past months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { month: "February 2024", bottles: 52, cost: "₦15,000", status: "paid" },
              { month: "January 2024", bottles: 48, cost: "₦15,000", status: "paid" },
              { month: "December 2023", bottles: 45, cost: "₦15,000", status: "paid" },
            ].map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{record.month}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{record.bottles} bottles consumed</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{record.cost}</p>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Paid</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Download Invoice</CardTitle>
            <CardDescription>Get your latest billing statement</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download February Invoice
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Subscription</CardTitle>
            <CardDescription>Update your plan or payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              <CreditCard className="h-4 w-4 mr-2" />
              Update Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
