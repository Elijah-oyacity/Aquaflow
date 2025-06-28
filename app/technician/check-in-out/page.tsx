"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, MapPin, CheckCircle, LogOut, LogIn, Camera, FileText, Calendar, User, Briefcase } from "lucide-react"

export default function TechnicianCheckInOut() {
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [currentLocation, setCurrentLocation] = useState("")
  const [notes, setNotes] = useState("")
  const [checkInTime, setCheckInTime] = useState<Date | null>(null)

  const handleCheckIn = () => {
    setIsCheckedIn(true)
    setCheckInTime(new Date())
    // In real app, this would send location and time to backend
  }

  const handleCheckOut = () => {
    setIsCheckedIn(false)
    setCheckInTime(null)
    setNotes("")
    // In real app, this would calculate total time and send to backend
  }

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const getWorkingTime = () => {
    if (!checkInTime) return "00:00:00"
    const now = new Date()
    const diff = now.getTime() - checkInTime.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const todayStats = {
    totalHours: "6.5",
    jobsCompleted: "3",
    milesTravel: "45.2",
    efficiency: "92%",
  }

  const recentActivity = [
    { time: "2:30 PM", action: "Checked out from City Medical Clinic", location: "789 Health Blvd" },
    { time: "1:15 PM", action: "Checked in at City Medical Clinic", location: "789 Health Blvd" },
    { time: "12:45 PM", action: "Checked out from Johnson Family", location: "456 Oak Avenue" },
    { time: "11:30 AM", action: "Checked in at Johnson Family", location: "456 Oak Avenue" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Check In/Out</h1>
          <p className="text-gray-600">Track your work hours and locations</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Current Time</p>
          <p className="text-xl font-mono">{getCurrentTime()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Check In/Out Card */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                {isCheckedIn ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Currently Checked In
                  </>
                ) : (
                  <>
                    <Clock className="h-5 w-5 mr-2" />
                    Ready to Check In
                  </>
                )}
              </CardTitle>
              <CardDescription>
                {isCheckedIn
                  ? `Checked in at ${checkInTime?.toLocaleTimeString()}`
                  : "Check in to start tracking your work time"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isCheckedIn && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 font-medium">Working Time</span>
                    <span className="text-2xl font-mono text-green-800">{getWorkingTime()}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Current Location</Label>
                  <Select value={currentLocation} onValueChange={setCurrentLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="bella-vista">Bella Vista Restaurant</SelectItem>
                      <SelectItem value="johnson-family">Johnson Family</SelectItem>
                      <SelectItem value="city-medical">City Medical Clinic</SelectItem>
                      <SelectItem value="field">Field Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="jobType">Activity Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="diagnostic">Diagnostic</SelectItem>
                      <SelectItem value="emergency">Emergency Repair</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any notes about your current activity..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="flex space-x-4">
                {!isCheckedIn ? (
                  <Button onClick={handleCheckIn} disabled={!currentLocation} className="flex-1">
                    <LogIn className="h-4 w-4 mr-2" />
                    Check In
                  </Button>
                ) : (
                  <Button onClick={handleCheckOut} variant="destructive" className="flex-1">
                    <LogOut className="h-4 w-4 mr-2" />
                    Check Out
                  </Button>
                )}
                <Button variant="outline" className="bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your check-in/out history for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {activity.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Today's Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Today's Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Hours</span>
                <span className="font-medium">{todayStats.totalHours}h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Jobs Completed</span>
                <span className="font-medium">{todayStats.jobsCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Miles Traveled</span>
                <span className="font-medium">{todayStats.milesTravel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Efficiency</span>
                <Badge className="bg-green-100 text-green-800">{todayStats.efficiency}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent">
                <User className="h-4 w-4 mr-2" />
                View Timesheet
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Briefcase className="h-4 w-4 mr-2" />
                Submit Expenses
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>

          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                {isCheckedIn ? (
                  <>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="font-medium text-green-800">On Duty</p>
                    <p className="text-sm text-gray-600">Working since {checkInTime?.toLocaleTimeString()}</p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <p className="font-medium text-gray-800">Off Duty</p>
                    <p className="text-sm text-gray-600">Ready to check in</p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
