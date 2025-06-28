"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Play, Pause, Square, TrendingUp, DollarSign } from "lucide-react"

export default function TimeTrackingPage() {
  const [isTracking, setIsTracking] = useState(false)
  const [currentTime, setCurrentTime] = useState("00:00:00")

  const todayStats = {
    totalHours: "7.5",
    jobsCompleted: 4,
    milesTravel: 45,
    earnings: "$285.00",
  }

  const recentEntries = [
    {
      id: 1,
      date: "2024-01-15",
      startTime: "08:00 AM",
      endTime: "10:30 AM",
      duration: "2h 30m",
      jobType: "Installation",
      location: "123 Oak Street",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-01-15",
      startTime: "11:00 AM",
      endTime: "12:45 PM",
      duration: "1h 45m",
      jobType: "Maintenance",
      location: "456 Pine Avenue",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-01-15",
      startTime: "01:30 PM",
      endTime: "03:15 PM",
      duration: "1h 45m",
      jobType: "Repair",
      location: "789 Elm Drive",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-01-15",
      startTime: "03:45 PM",
      endTime: "05:15 PM",
      duration: "1h 30m",
      jobType: "Inspection",
      location: "321 Maple Court",
      status: "Completed",
    },
  ]

  const weeklyData = [
    { day: "Mon", hours: 8.0, jobs: 5 },
    { day: "Tue", hours: 7.5, jobs: 4 },
    { day: "Wed", hours: 8.5, jobs: 6 },
    { day: "Thu", hours: 7.0, jobs: 4 },
    { day: "Fri", hours: 7.5, jobs: 4 },
    { day: "Sat", hours: 4.0, jobs: 2 },
    { day: "Sun", hours: 0, jobs: 0 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Time Tracking</h1>
          <p className="text-muted-foreground">Monitor your work hours and productivity</p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">January 15, 2024</span>
        </div>
      </div>

      {/* Current Timer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Current Session</span>
          </CardTitle>
          <CardDescription>Track your current work session</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-4xl font-bold font-mono">{currentTime}</div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Current Location: 123 Oak Street</span>
              </div>
              <Badge variant={isTracking ? "default" : "secondary"}>{isTracking ? "Active" : "Inactive"}</Badge>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setIsTracking(!isTracking)}
                variant={isTracking ? "destructive" : "default"}
                size="lg"
              >
                {isTracking ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg">
                <Square className="h-4 w-4 mr-2" />
                Stop
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.totalHours}</div>
            <p className="text-xs text-muted-foreground">+0.5 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Completed</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.jobsCompleted}</div>
            <p className="text-xs text-muted-foreground">Same as yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Miles Traveled</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.milesTravel}</div>
            <p className="text-xs text-muted-foreground">+5 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.earnings}</div>
            <p className="text-xs text-muted-foreground">+$15 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed View */}
      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Time Entries</CardTitle>
              <CardDescription>Detailed breakdown of your work sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEntries.map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{entry.jobType}</Badge>
                        <span className="text-sm text-muted-foreground">{entry.location}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {entry.startTime} - {entry.endTime}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{entry.duration}</div>
                      <Badge variant="secondary">{entry.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>Your productivity this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((day) => (
                  <div key={day.day} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">{day.day}</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(day.hours / 8) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{day.hours}h</div>
                      <div className="text-sm text-muted-foreground">{day.jobs} jobs</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Summary</CardTitle>
              <CardDescription>January 2024 performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-2xl font-bold">156.5h</div>
                  <div className="text-sm text-muted-foreground">Total Hours</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-sm text-muted-foreground">Jobs Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">$4,725</div>
                  <div className="text-sm text-muted-foreground">Total Earnings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
