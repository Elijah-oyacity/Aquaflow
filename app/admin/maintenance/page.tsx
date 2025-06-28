import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wrench, Search, Filter, Download, Calendar, Clock, AlertTriangle, CheckCircle, User, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminMaintenancePage() {
  const maintenanceJobs = [
    {
      id: "MAINT-001",
      customer: "Bella Vista Restaurant",
      type: "Filter Replacement",
      priority: "High",
      status: "In Progress",
      technician: "Mike Thompson",
      scheduledDate: "2024-03-15",
      estimatedDuration: "45 min",
      location: "Downtown Lagos",
      systemId: "SYS-BVR-001",
    },
    {
      id: "MAINT-002",
      customer: "Johnson Family",
      type: "Routine Maintenance",
      priority: "Medium",
      status: "Scheduled",
      technician: "Sarah Wilson",
      scheduledDate: "2024-03-16",
      estimatedDuration: "30 min",
      location: "Victoria Island",
      systemId: "SYS-JOH-002",
    },
    {
      id: "MAINT-003",
      customer: "Tech Startup Inc.",
      type: "System Diagnostic",
      priority: "Low",
      status: "Completed",
      technician: "David Chen",
      scheduledDate: "2024-03-14",
      estimatedDuration: "60 min",
      location: "Ikeja",
      systemId: "SYS-TSI-003",
    },
    {
      id: "MAINT-004",
      customer: "City Medical Clinic",
      type: "Emergency Repair",
      priority: "Critical",
      status: "Assigned",
      technician: "Emma Rodriguez",
      scheduledDate: "2024-03-15",
      estimatedDuration: "90 min",
      location: "Lekki",
      systemId: "SYS-CMC-004",
    },
  ]

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
      case "Assigned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Overdue":
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
            <Wrench className="h-6 w-6 mr-2 text-orange-600" />
            Maintenance Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Schedule and track system maintenance across all locations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Schedule
          </Button>
          <Button>Schedule Maintenance</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Jobs</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">8 completed, 15 pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">Scheduled maintenance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">On-time completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Types</CardTitle>
            <CardDescription>Distribution of maintenance activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Routine Maintenance</span>
                <Badge variant="outline">45%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Filter Replacements</span>
                <Badge variant="outline">30%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">System Repairs</span>
                <Badge variant="outline">15%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Emergency Calls</span>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">10%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technician Workload</CardTitle>
            <CardDescription>Current assignments by technician</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Mike Thompson</span>
                <Badge variant="outline">8 jobs</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Sarah Wilson</span>
                <Badge variant="outline">6 jobs</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">David Chen</span>
                <Badge variant="outline">4 jobs</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Emma Rodriguez</span>
                <Badge variant="outline">5 jobs</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Jobs */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Schedule</CardTitle>
          <CardDescription>All scheduled and ongoing maintenance activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search maintenance jobs..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Jobs Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-4 font-medium">Job ID</th>
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Priority</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Technician</th>
                  <th className="text-left p-4 font-medium">Scheduled</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceJobs.map((job) => (
                  <tr key={job.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4">
                      <Link
                        href={`/admin/maintenance/${job.id}`}
                        className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {job.id}
                      </Link>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{job.systemId}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{job.customer}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{job.location}</div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{job.type}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getPriorityColor(job.priority)}>{job.priority}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm">{job.technician}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{job.scheduledDate}</td>
                    <td className="p-4">
                      <Link href={`/admin/maintenance/${job.id}`}>
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
    </div>
  )
}
