import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, AlertTriangle, CheckCircle, Wrench, Phone, Navigation } from "lucide-react"
import Link from "next/link"

export default function TechnicianJobs() {
  const jobs = [
    {
      id: "JOB-001",
      customer: "Bella Vista Restaurant",
      address: "123 Main St, Downtown",
      type: "Filter Replacement",
      priority: "High",
      scheduledTime: "9:00 AM",
      estimatedDuration: "45 min",
      status: "Assigned",
      phone: "+1 (555) 123-4567",
    },
    {
      id: "JOB-002",
      customer: "Johnson Family",
      address: "456 Oak Avenue, Suburbs",
      type: "Routine Maintenance",
      priority: "Medium",
      scheduledTime: "11:30 AM",
      estimatedDuration: "30 min",
      status: "Assigned",
      phone: "+1 (555) 987-6543",
    },
    {
      id: "JOB-003",
      customer: "City Medical Clinic",
      address: "789 Health Blvd, Medical District",
      type: "System Diagnostic",
      priority: "Low",
      scheduledTime: "2:00 PM",
      estimatedDuration: "60 min",
      status: "Assigned",
      phone: "+1 (555) 456-7890",
    },
  ]

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
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Jobs</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">All scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">0% completion rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Est. Time</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h 15m</div>
            <p className="text-xs text-muted-foreground">Total for today</p>
          </CardContent>
        </Card>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Assigned Jobs</h2>
          <Button>
            <Navigation className="h-4 w-4 mr-2" />
            Optimize Route
          </Button>
        </div>

        {jobs.map((job, index) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{job.customer}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.address}
                  </CardDescription>
                </div>
                <Badge className={getPriorityColor(job.priority)}>{job.priority} Priority</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Wrench className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{job.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{job.scheduledTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Est. {job.estimatedDuration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{job.phone}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href={`/technician/job/${job.id}`} className="flex-1">
                  <Button className="w-full">Start Job</Button>
                </Link>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Customer
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/technician/check-in-out">
              <Button variant="outline" className="w-full h-16 flex-col bg-transparent">
                <CheckCircle className="h-6 w-6 mb-2" />
                Check In/Out
              </Button>
            </Link>
            <Link href="/technician/diagnostics">
              <Button variant="outline" className="w-full h-16 flex-col bg-transparent">
                <Wrench className="h-6 w-6 mb-2" />
                Run Diagnostics
              </Button>
            </Link>
            <Button variant="outline" className="w-full h-16 flex-col bg-transparent">
              <AlertTriangle className="h-6 w-6 mb-2" />
              Report Emergency
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
