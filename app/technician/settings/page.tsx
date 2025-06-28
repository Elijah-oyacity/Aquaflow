"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Smartphone, MapPin, Clock, Wrench, Save, Camera, Navigation, Volume2 } from "lucide-react"

export default function TechnicianSettingsPage() {
  const [notifications, setNotifications] = useState({
    newJobs: true,
    jobUpdates: true,
    emergencyAlerts: true,
    scheduleChanges: true,
    systemMaintenance: false,
    promotions: false,
  })

  const [preferences, setPreferences] = useState({
    autoCheckIn: true,
    gpsTracking: true,
    offlineMode: false,
    soundAlerts: true,
    vibration: true,
    darkMode: false,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-500" />
                </div>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Mike" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Thompson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="mike.thompson@aquaflow.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input id="employeeId" defaultValue="TEC-001" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue="field-service">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="field-service">Field Service</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="emergency">Emergency Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Certifications & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Water Systems Certified</Badge>
                  <Badge variant="secondary">Electrical Licensed</Badge>
                  <Badge variant="secondary">Plumbing Certified</Badge>
                  <Badge variant="secondary">Safety Trained</Badge>
                  <Badge variant="outline">+ Add Certification</Badge>
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Preferences</span>
              </CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Job Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Job Assignments</Label>
                      <p className="text-sm text-muted-foreground">Get notified when new jobs are assigned to you</p>
                    </div>
                    <Switch
                      checked={notifications.newJobs}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newJobs: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Job Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about job changes or cancellations
                      </p>
                    </div>
                    <Switch
                      checked={notifications.jobUpdates}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, jobUpdates: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Emergency Alerts</Label>
                      <p className="text-sm text-muted-foreground">Critical alerts for emergency service calls</p>
                    </div>
                    <Switch
                      checked={notifications.emergencyAlerts}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, emergencyAlerts: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Schedule Changes</Label>
                      <p className="text-sm text-muted-foreground">Notifications about schedule modifications</p>
                    </div>
                    <Switch
                      checked={notifications.scheduleChanges}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, scheduleChanges: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">System Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>System Maintenance</Label>
                      <p className="text-sm text-muted-foreground">Updates about system downtime and maintenance</p>
                    </div>
                    <Switch
                      checked={notifications.systemMaintenance}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, systemMaintenance: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Promotions & Updates</Label>
                      <p className="text-sm text-muted-foreground">Company news and promotional content</p>
                    </div>
                    <Switch
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, promotions: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* App Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>App Preferences</span>
              </CardTitle>
              <CardDescription>Customize your app experience and behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Work Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Auto Check-in</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">Automatically check in when arriving at job sites</p>
                    </div>
                    <Switch
                      checked={preferences.autoCheckIn}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, autoCheckIn: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>GPS Tracking</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">Allow location tracking for route optimization</p>
                    </div>
                    <Switch
                      checked={preferences.gpsTracking}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, gpsTracking: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center space-x-2">
                        <Navigation className="h-4 w-4" />
                        <span>Offline Mode</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Enable offline functionality for poor signal areas
                      </p>
                    </div>
                    <Switch
                      checked={preferences.offlineMode}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, offlineMode: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Audio & Alerts</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="flex items-center space-x-2">
                        <Volume2 className="h-4 w-4" />
                        <span>Sound Alerts</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">Play sounds for notifications and alerts</p>
                    </div>
                    <Switch
                      checked={preferences.soundAlerts}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, soundAlerts: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Vibration</Label>
                      <p className="text-sm text-muted-foreground">Use vibration for notifications</p>
                    </div>
                    <Switch
                      checked={preferences.vibration}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, vibration: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Use dark theme for the application</p>
                    </div>
                    <Switch
                      checked={preferences.darkMode}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, darkMode: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription>Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Password & Authentication</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable 2FA</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Setup 2FA</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Privacy</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Location History</Label>
                      <p className="text-sm text-muted-foreground">Store location history for route optimization</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Support */}
        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5" />
                <span>Support & Help</span>
              </CardTitle>
              <CardDescription>Get help and provide feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">App Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">App Version</span>
                    <span className="text-sm">2.1.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <span className="text-sm">January 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Device ID</span>
                    <span className="text-sm">TEC-001-MOBILE</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Get Help</h4>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start bg-transparent">
                    View User Manual
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Contact IT Support
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Report a Bug
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Request Feature
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Feedback</h4>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Share your feedback</Label>
                  <Textarea id="feedback" placeholder="Tell us about your experience with the app..." rows={4} />
                </div>
                <Button>Submit Feedback</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
