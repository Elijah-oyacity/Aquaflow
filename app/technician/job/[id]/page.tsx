"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, AlertTriangle, CheckCircle, Wrench, Phone, Camera, FileText, User, Home } from "lucide-react"
import Link from "next/link"

export default function JobDetail() {
  const params = useParams()
  const jobId = params.id as string

  const [jobStatus, setJobStatus] = useState("In Progress")
  const [workLog, setWorkLog] = useState("")
  const [partsUsed, setPartsUsed] = useState("")
  const [timeSpent, setTimeSpent] = useState("")
  const [issuesFound, setIssuesFound] = useState("")

  // Mock job data - in real app this would come from API
  const job = {
    id: jobId,
    customer: "Bella Vista Restaurant",
    address: "123 Main St, Downtown",
    type: "Filter Replacement",
    priority: "High",
    scheduledTime: "9:00 AM",
    estimatedDuration: "45 min",
    status: "In Progress",
    phone: "+1 (555) 123-4567",
    description:
      "Replace water filtration system filters and perform system diagnostic check. Customer reported decreased water pressure and unusual taste.",
    customerContact: "Maria Rodriguez",
    accessInstructions: "Use service entrance on the side of building. Ask for Maria at front desk.",
    systemInfo: {
      model: "AquaFlow Pro 3000",
      serialNumber: "AF3000-2023-1547",
      installDate: "March 15, 2023",
      lastMaintenance: "September 10, 2024",
    },
  }

  const handleSubmitLog = () => {
    // Handle work log submission
    console.log("Submitting work log:", {
      jobId,
      status: jobStatus,
      workLog,
      partsUsed,
      timeSpent,
      issuesFound,
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Job #{job.id}</h1>
          <p className="text-gray-600">{job.customer}</p>
        </div>
        <Badge className={getPriorityColor(job.priority)}>{job.priority} Priority</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Customer</Label>
                  <p className="text-sm">{job.customer}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Contact Person</Label>
                  <p className="text-sm">{job.customerContact}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Phone</Label>
                  <p className="text-sm">{job.phone}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Address</Label>
                  <p className="text-sm flex items-start">
                    <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                    {job.address}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500">Access Instructions</Label>
                <p className="text-sm bg-blue-50 p-3 rounded-lg">{job.accessInstructions}</p>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                Job Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Service Type</Label>
                  <p className="text-sm">{job.type}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Scheduled Time</Label>
                  <p className="text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.scheduledTime}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Est. Duration</Label>
                  <p className="text-sm">{job.estimatedDuration}</p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500">Description</Label>
                <p className="text-sm bg-gray-50 p-3 rounded-lg">{job.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* System Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                System Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Model</Label>
                  <p className="text-sm">{job.systemInfo.model}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Serial Number</Label>
                  <p className="text-sm">{job.systemInfo.serialNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Install Date</Label>
                  <p className="text-sm">{job.systemInfo.installDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Last Maintenance</Label>
                  <p className="text-sm">{job.systemInfo.lastMaintenance}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Log */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Work Log
              </CardTitle>
              <CardDescription>Document your work and any findings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="workLog">Work Performed</Label>
                <Textarea
                  id="workLog"
                  placeholder="Describe the work performed, steps taken, and any observations..."
                  value={workLog}
                  onChange={(e) => setWorkLog(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="partsUsed">Parts Used</Label>
                  <Input
                    id="partsUsed"
                    placeholder="List parts and quantities"
                    value={partsUsed}
                    onChange={(e) => setPartsUsed(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="timeSpent">Time Spent (minutes)</Label>
                  <Input
                    id="timeSpent"
                    type="number"
                    placeholder="45"
                    value={timeSpent}
                    onChange={(e) => setTimeSpent(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="issuesFound">Issues Found</Label>
                <Textarea
                  id="issuesFound"
                  placeholder="Document any issues, recommendations, or follow-up needed..."
                  value={issuesFound}
                  onChange={(e) => setIssuesFound(e.target.value)}
                />
              </div>

              <div>
                <Label>Job Status</Label>
                <Select value={jobStatus} onValueChange={setJobStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Requires Follow-up">Requires Follow-up</SelectItem>
                    <SelectItem value="Customer Not Available">Customer Not Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Customer
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Camera className="h-4 w-4 mr-2" />
                Take Photos
              </Button>
              <Separator />
              <Button variant="outline" className="w-full bg-transparent">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
            </CardContent>
          </Card>

          {/* Submit Work Log */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Job</CardTitle>
              <CardDescription>Submit your work log and update job status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={handleSubmitLog} className="w-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Submit Work Log
              </Button>
              <Link href="/technician/jobs">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Jobs
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Job Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Job Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">8:45 AM - Job assigned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">9:15 AM - Arrived on site</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">9:20 AM - Started work</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
