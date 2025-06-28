"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Wrench,
  CheckCircle,
  Phone,
  Mail,
  FileText,
  Camera,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function MaintenanceDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const maintenanceJob = {
    id: params.id,
    title: "Filter Replacement - Downtown Office",
    customer: {
      name: "Bella Vista Restaurant",
      email: "manager@bellavista.com",
      phone: "+1 (555) 987-6543",
      address: "123 Business Ave, Downtown, NY 10001",
      type: "Business",
    },
    location: "Downtown Office Complex",
    priority: "High",
    status: "In Progress",
    technician: {
      name: "John Smith",
      email: "john.smith@aquaflow.com",
      phone: "+1 (555) 123-4567",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    requestDate: "2024-01-20",
    scheduledDate: "2024-01-22",
    startTime: "09:00 AM",
    estimatedDuration: "2 hours",
    actualDuration: "1h 45m",
    description: "Replace primary water filtration system filters and perform system diagnostics",
    type: "Preventive",
    systemId: "SYS-BVR-001",
    cost: "$150.00",
    partsUsed: [
      { name: "Primary Filter Cartridge", quantity: 2, cost: "$45.00" },
      { name: "Secondary Filter", quantity: 1, cost: "$25.00" },
      { name: "O-Ring Seal", quantity: 4, cost: "$8.00" },
    ],
    workLog: [
      {
        timestamp: "09:00 AM",
        action: "Arrived on site and checked in",
        technician: "John Smith",
      },
      {
        timestamp: "09:15 AM",
        action: "Performed initial system inspection",
        technician: "John Smith",
      },
      {
        timestamp: "09:30 AM",
        action: "Shut down system and began filter replacement",
        technician: "John Smith",
      },
      {
        timestamp: "10:45 AM",
        action: "Completed filter installation, running system tests",
        technician: "John Smith",
      },
    ],
    notes:
      "Customer reported slight taste issue. Filters were due for replacement. System running optimally after maintenance.",
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "High":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Scheduled":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/maintenance">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Maintenance
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">{maintenanceJob.title}</h1>
            <p className="text-gray-600 dark:text-gray-400">Job ID: {maintenanceJob.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Call Technician
          </Button>
          <Button>Update Status</Button>
        </div>
      </div>

      {/* Job Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-4">
                <Badge className={getPriorityColor(maintenanceJob.priority)}>{maintenanceJob.priority} Priority</Badge>
                <Badge className={getStatusColor(maintenanceJob.status)}>{maintenanceJob.status}</Badge>
                <Badge variant="outline">{maintenanceJob.type}</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    Scheduled: {maintenanceJob.scheduledDate} at {maintenanceJob.startTime}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    Duration: {maintenanceJob.estimatedDuration} (Est.) / {maintenanceJob.actualDuration} (Actual)
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    {maintenanceJob.location}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Wrench className="h-4 w-4 mr-2 text-gray-500" />
                    System ID: {maintenanceJob.systemId}
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                    Total Cost: {maintenanceJob.cost}
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="h-4 w-4 mr-2 text-gray-500" />
                    Request Date: {maintenanceJob.requestDate}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{maintenanceJob.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Assigned Technician</h3>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Avatar>
                    <AvatarImage
                      src={maintenanceJob.technician.avatar || "/placeholder.svg"}
                      alt={maintenanceJob.technician.name}
                    />
                    <AvatarFallback>
                      {maintenanceJob.technician.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{maintenanceJob.technician.name}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Mail className="h-3 w-3 mr-1" />
                      {maintenanceJob.technician.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Phone className="h-3 w-3 mr-1" />
                      {maintenanceJob.technician.phone}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Customer Information</h3>
                <div className="p-3 border rounded-lg space-y-2">
                  <p className="font-medium">{maintenanceJob.customer.name}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="h-3 w-3 mr-1" />
                    {maintenanceJob.customer.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-3 w-3 mr-1" />
                    {maintenanceJob.customer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-3 w-3 mr-1" />
                    {maintenanceJob.customer.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="worklog" className="space-y-4">
        <TabsList>
          <TabsTrigger value="worklog">Work Log</TabsTrigger>
          <TabsTrigger value="parts">Parts & Materials</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="notes">Notes & Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="worklog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Log</CardTitle>
              <CardDescription>Detailed timeline of work performed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceJob.workLog.map((entry, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{entry.timestamp}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{entry.technician}</span>
                      </div>
                      <p className="text-sm">{entry.action}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Add Work Log Entry</h4>
                <div className="space-y-3">
                  <Textarea placeholder="Describe the work performed..." rows={3} />
                  <Button>Add Entry</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Parts & Materials Used</CardTitle>
              <CardDescription>Inventory items used for this maintenance job</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceJob.partsUsed.map((part, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{part.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quantity: {part.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{part.cost}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Per unit</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Parts Cost:</span>
                  <span className="text-lg font-bold">
                    $
                    {maintenanceJob.partsUsed
                      .reduce((total, part) => total + Number.parseFloat(part.cost.replace("$", "")), 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Photos</CardTitle>
              <CardDescription>Before, during, and after photos of the maintenance work</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {maintenanceJob.photos.map((photo, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Job photo ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm font-medium">Photo {index + 1}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {index === 0 ? "Before" : index === 1 ? "During" : "After"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Add Photos
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notes & Reports</CardTitle>
              <CardDescription>Additional notes, observations, and completion report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Technician Notes</h4>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm">{maintenanceJob.notes}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">System Status After Maintenance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Water Quality</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Excellent - 98% purity</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">System Pressure</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Normal - 45 PSI</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Flow Rate</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Optimal - 2.5 GPM</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Filter Life</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">New - 6 months remaining</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Recommendations</h4>
                  <div className="p-4 border rounded-lg">
                    <ul className="text-sm space-y-1">
                      <li>• Schedule next filter replacement in 6 months</li>
                      <li>• Monitor water pressure weekly</li>
                      <li>• Customer should contact support if taste issues persist</li>
                    </ul>
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
