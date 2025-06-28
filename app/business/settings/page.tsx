"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { User, Bell, Shield, CreditCard, Building, MapPin, Save, Eye, EyeOff } from "lucide-react"

export default function BusinessSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    maintenance: true,
    billing: true,
    alerts: true,
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and business information</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Business Profile</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Company Information
                </CardTitle>
                <CardDescription>Update your business details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="AquaTech Industries" />
                </div>

                <div>
                  <Label htmlFor="business-type">Business Type</Label>
                  <select id="business-type" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Manufacturing</option>
                    <option>Office Building</option>
                    <option>Retail</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="tax-id">Tax ID / EIN</Label>
                  <Input id="tax-id" defaultValue="12-3456789" />
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://aquatech-industries.com" />
                </div>

                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Leading manufacturer of industrial equipment with multiple facilities requiring comprehensive water management solutions."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Primary Contact Information
                </CardTitle>
                <CardDescription>Main contact details for your business account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="primary-contact">Primary Contact Name</Label>
                  <Input id="primary-contact" defaultValue="John Smith" />
                </div>

                <div>
                  <Label htmlFor="contact-title">Title</Label>
                  <Input id="contact-title" defaultValue="Facilities Manager" />
                </div>

                <div>
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" defaultValue="john.smith@aquatech-industries.com" />
                </div>

                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" defaultValue="+1 (555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    defaultValue="123 Industrial Blvd, Suite 100&#10;Manufacturing District&#10;New York, NY 10001"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>Manage user accounts and permissions for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Current Users</h3>
                  <Button>Add User</Button>
                </div>

                <div className="border rounded-lg">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">John Smith</h4>
                        <p className="text-sm text-gray-500">john.smith@aquatech-industries.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Admin</span>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-sm text-gray-500">sarah.johnson@aquatech-industries.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Manager</span>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Mike Wilson</h4>
                        <p className="text-sm text-gray-500">mike.wilson@aquatech-industries.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">Viewer</span>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-500">Receive critical alerts via SMS</p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-gray-500">Browser and mobile push notifications</p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance-notifications">Maintenance Alerts</Label>
                      <p className="text-sm text-gray-500">Scheduled and emergency maintenance notifications</p>
                    </div>
                    <Switch
                      id="maintenance-notifications"
                      checked={notifications.maintenance}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, maintenance: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="billing-notifications">Billing Notifications</Label>
                      <p className="text-sm text-gray-500">Invoice and payment notifications</p>
                    </div>
                    <Switch
                      id="billing-notifications"
                      checked={notifications.billing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, billing: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="system-alerts">System Alerts</Label>
                      <p className="text-sm text-gray-500">System status and performance alerts</p>
                    </div>
                    <Switch
                      id="system-alerts"
                      checked={notifications.alerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, alerts: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Configure security options for your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                  />
                </div>

                <div>
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <select
                    id="session-timeout"
                    value={security.sessionTimeout}
                    onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                  <select
                    id="password-expiry"
                    value={security.passwordExpiry}
                    onChange={(e) => setSecurity({ ...security, passwordExpiry: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                  >
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative">
                    <Input id="current-password" type={showPassword ? "text" : "password"} />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>

                <div>
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>

                <Button className="w-full">Update Password</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing Information
              </CardTitle>
              <CardDescription>Manage your payment methods and billing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Add Payment Method
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Billing Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="billing-company">Company Name</Label>
                    <Input id="billing-company" defaultValue="AquaTech Industries" />
                  </div>
                  <div>
                    <Label htmlFor="billing-tax-id">Tax ID</Label>
                    <Input id="billing-tax-id" defaultValue="12-3456789" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="billing-address">Address</Label>
                    <Input id="billing-address" defaultValue="123 Industrial Blvd, Suite 100" />
                  </div>
                  <div>
                    <Label htmlFor="billing-city">City</Label>
                    <Input id="billing-city" defaultValue="New York" />
                  </div>
                  <div>
                    <Label htmlFor="billing-state">State</Label>
                    <Input id="billing-state" defaultValue="NY" />
                  </div>
                  <div>
                    <Label htmlFor="billing-zip">ZIP Code</Label>
                    <Input id="billing-zip" defaultValue="10001" />
                  </div>
                  <div>
                    <Label htmlFor="billing-country">Country</Label>
                    <Input id="billing-country" defaultValue="United States" />
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
