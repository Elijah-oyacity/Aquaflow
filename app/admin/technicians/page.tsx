import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserCheck, Search, Filter, Download, Eye, Edit, MoreHorizontal, MapPin, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function AdminTechniciansPage() {
  const technicians = [
    {
      id: "TECH-001",
      name: "Mike Thompson",
      email: "mike.thompson@aquaflow.com",
      phone: "+1 (555) 111-2222",
      status: "Active",
      rating: 4.9,
      completedJobs: 247,
      location: "Lagos Central",
      specialization: "Installation & Maintenance",
      joinDate: "2023-06-15",
      lastActive: "2 hours ago",
      currentJobs: 3,
    },
    {
      id: "TECH-002",
      name: "Sarah Wilson",
      email: "sarah.wilson@aquaflow.com",
      phone: "+1 (555) 333-4444",
      status: "Active",
      rating: 4.8,
      completedJobs: 189,
      location: "Victoria Island",
      specialization: "Repairs & Diagnostics",
      joinDate: "2023-08-20",
      lastActive: "1 hour ago",
      currentJobs: 2,
    },
    {
      id: "TECH-003",
      name: "David Chen",
      email: "david.chen@aquaflow.com",
      phone: "+1 (555) 555-6666",
      status: "Off Duty",
      rating: 4.7,
      completedJobs: 156,
      location: "Ikeja",
      specialization: "Installation",
      joinDate: "2023-10-10",
      lastActive: "8 hours ago",
      currentJobs: 0,
    },
    {
      id: "TECH-004",
      name: "Emma Rodriguez",
      email: "emma.rodriguez@aquaflow.com",
      phone: "+1 (555) 777-8888",
      status: "Active",
      rating: 4.9,
      completedJobs: 203,
      location: "Lekki",
      specialization: "Maintenance & Quality Control",
      joinDate: "2023-07-05",
      lastActive: "30 minutes ago",
      currentJobs: 4,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Off Duty":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      case "Busy":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Unavailable":
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
            <UserCheck className="h-6 w-6 mr-2 text-purple-600" />
            Technician Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Manage field technicians and their assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>Add Technician</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Technicians</CardTitle>
            <UserCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Today</CardTitle>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">75%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">6 off duty</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">Excellent performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Today</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">94% completion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators for the team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">On-Time Completion</span>
                <span className="text-sm font-bold text-green-600">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Customer Satisfaction</span>
                <span className="text-sm font-bold text-green-600">4.8/5.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Job Duration</span>
                <span className="text-sm font-bold">42 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">First-Time Fix Rate</span>
                <span className="text-sm font-bold text-green-600">89%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Workload</CardTitle>
            <CardDescription>Active jobs distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Installation Jobs</span>
                <Badge variant="outline">23 active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Maintenance Jobs</span>
                <Badge variant="outline">31 active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Emergency Repairs</span>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">8 urgent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Quality Inspections</span>
                <Badge variant="outline">5 scheduled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technician Database */}
      <Card>
        <CardHeader>
          <CardTitle>Technician Database</CardTitle>
          <CardDescription>Manage technician profiles and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search technicians..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="off-duty">Off Duty</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="lagos-central">Lagos Central</SelectItem>
                <SelectItem value="victoria-island">Victoria Island</SelectItem>
                <SelectItem value="ikeja">Ikeja</SelectItem>
                <SelectItem value="lekki">Lekki</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Technician Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Technician</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Rating</th>
                  <th className="text-left p-4 font-medium">Location</th>
                  <th className="text-left p-4 font-medium">Current Jobs</th>
                  <th className="text-left p-4 font-medium">Completed</th>
                  <th className="text-left p-4 font-medium">Last Active</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {technicians.map((tech) => (
                  <tr key={tech.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4">
                      <div>
                        <Link
                          href={`/admin/technicians/${tech.id}`}
                          className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {tech.name}
                        </Link>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tech.email}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{tech.specialization}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(tech.status)}>{tech.status}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{tech.rating}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm">{tech.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{tech.currentJobs} active</Badge>
                    </td>
                    <td className="p-4 text-sm">{tech.completedJobs}</td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{tech.lastActive}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/technicians/${tech.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
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
