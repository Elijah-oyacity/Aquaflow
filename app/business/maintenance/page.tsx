"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Wrench, Search, Plus, Calendar, Clock, AlertTriangle, CheckCircle, User, MapPin } from "lucide-react"

const maintenanceRequests = [
  {
    id: "MNT-001",
    title: "Filter Replacement - Downtown Office",
    location: "Downtown Office Complex",
    priority: "High",
    status: "In Progress",
    technician: "John Smith",
    requestDate: "2024-01-20",
    scheduledDate: "2024-01-22",
    estimatedDuration: "2 hours",
    description: "Replace primary water filtration system filters",
    type: "Preventive",
  },
  {
    id: "MNT-002",
    title: "Pressure System Check - Manufacturing Plant",
    location: "Manufacturing Plant A",
    priority: "Medium",
    status: "Scheduled",
    technician: "Sarah Johnson",
    requestDate: "2024-01-18",
    scheduledDate: "2024-01-25",
    estimatedDuration: "4 hours",
    description: "Routine pressure system inspection and calibration",
    type: "Preventive",
  },
  {
    id: "MNT-003",
    title: "Emergency Leak Repair - Retail Store",
    location: "Retail Store Network",
    priority: "Critical",
    status: "Completed",
    technician: "Mike Wilson",
    requestDate: "2024-01-15",
    scheduledDate: "2024-01-15",
    estimatedDuration: "1 hour",
    description: "Emergency repair of water line leak in storage area",
    type: "Emergency",
  },
  {
    id: "MNT-004",
    title: "UV System Maintenance - Warehouse",
    location: "Warehouse Facility",
    priority: "Low",
    status: "Pending",
    technician: "Unassigned",
    requestDate: "2024-01-21",
    scheduledDate: "TBD",
    estimatedDuration: "3 hours",
    description: "UV sterilization system cleaning and bulb replacement",
    type: "Preventive",
  },
]

const upcomingMaintenance = [
  {
    id: "SCH-001",
    title: "Quarterly System Inspection",
    location: "All Locations",
    date: "2024-02-01",
    technician: "Team Assignment",
    type: "Scheduled",
  },
  {
    id: "SCH-002",
    title: "Filter Replacement Program",
    location: "Downtown Office Complex",
    date: "2024-02-05",
    technician: "John Smith",
    type: "Scheduled",
  },
  {
    id: "SCH-003",
    title: "Water Quality Testing",
    location: "Manufacturing Plant A",
    date: "2024-02-10",
    technician: "Sarah Johnson",
    type: "Scheduled",
  },
]

const priorities = ["All", "Critical", "High", "Medium", "Low"]
const statuses = ["All", "Pending", "Scheduled", "In Progress", "Completed"]

export default function BusinessMaintenancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPriority, setSelectedPriority] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredRequests = maintenanceRequests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = selectedPriority === "All" || request.priority === selectedPriority
    const matchesStatus = selectedStatus === "All" || request.status === selectedStatus
    return matchesSearch && matchesPriority && matchesStatus
  })

  const totalRequests = maintenanceRequests.length
  const pendingRequests = maintenanceRequests.filter((req) => req.status === "Pending").length
  const inProgressRequests = maintenanceRequests.filter((req) => req.status === "In Progress").length
  const criticalRequests = maintenanceRequests.filter((req) => req.priority === "Critical").length

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>
      case "High":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Medium
          </Badge>
        )
      case "Low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="default" className="bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 mr-1" />
            In Progress
          </Badge>
        )
      case "Scheduled":
        return (
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Calendar className="h-3 w-3 mr-1" />
            Scheduled
          </Badge>
        )
      case "Pending":
        return (
          <Badge variant="outline">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Maintenance Management</h1>
          <p className="text-gray-600 mt-1">Schedule and track maintenance for your water systems</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Request Maintenance
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRequests}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingRequests}</div>
            <p className="text-xs text-muted-foreground">Awaiting assignment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{inProgressRequests}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalRequests}</div>
            <p className="text-xs text-muted-foreground">Urgent attention needed</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList>
          <TabsTrigger value="requests">Maintenance Requests</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Maintenance</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Requests</CardTitle>
              <CardDescription>Manage and track all maintenance requests across your locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    {priorities.map((priority) => (
                      <option key={priority} value={priority}>
                        {priority} Priority
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status} Status
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Technician</TableHead>
                      <TableHead>Scheduled</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{request.title}</div>
                            <div className="text-sm text-gray-500">{request.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            {request.location}
                          </div>
                        </TableCell>
                        <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 text-gray-400" />
                            {request.technician}
                          </div>
                        </TableCell>
                        <TableCell>{request.scheduledDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Maintenance</CardTitle>
              <CardDescription>Upcoming preventive maintenance and inspections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Maintenance</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Technician</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingMaintenance.map((maintenance) => (
                      <TableRow key={maintenance.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{maintenance.title}</div>
                            <div className="text-sm text-gray-500">{maintenance.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>{maintenance.location}</TableCell>
                        <TableCell>{maintenance.date}</TableCell>
                        <TableCell>{maintenance.technician}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{maintenance.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
              <CardDescription>View completed maintenance requests and their details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Completed Date</TableHead>
                      <TableHead>Technician</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceRequests
                      .filter((req) => req.status === "Completed")
                      .map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{request.title}</div>
                              <div className="text-sm text-gray-500">{request.id}</div>
                            </div>
                          </TableCell>
                          <TableCell>{request.location}</TableCell>
                          <TableCell>{request.scheduledDate}</TableCell>
                          <TableCell>{request.technician}</TableCell>
                          <TableCell>{request.estimatedDuration}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
