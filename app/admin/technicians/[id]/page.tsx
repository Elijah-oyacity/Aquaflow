import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Timer,
} from "lucide-react"
import Link from "next/link"

export default function TechnicianDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const technician = {
    id: params.id,
    name: "Mike Thompson",
    email: "mike.thompson@aquaflow.com",
    phone: "+1 (555) 111-2222",
    avatar: "/placeholder.svg?height=100&width=100",
    status: "Active",
    rating: 4.9,
    completedJobs: 247,
    location: "Lagos Central",
    specialization: "Installation & Maintenance",
    joinDate: "2023-06-15",
    lastActive: "2 hours ago",
    currentJobs: 3,
    certifications: ["Water Systems Installation", "Quality Control", "Emergency Repairs"],
    efficiency: 94,
    customerSatisfaction: 4.8,
    onTimeCompletion: 96,
    firstTimeFixRate: 89,
  }

  const recentJobs = [
    {
      id: "JOB-001",
      customer: "Sarah Johnson",
      type: "Installation",
      status: "Completed",
      date: "2024-01-15",
      duration: "2h 30m",
      rating: 5,
      location: "Victoria Island",
    },
    {
      id: "JOB-002",
      customer: "David Chen",
      type: "Maintenance",
      status: "Completed",
      date: "2024-01-14",
      duration: "1h 45m",
      rating: 5,
      location: "Ikeja",
    },
    {
      id: "JOB-003",
      customer: "Emma Wilson",
      type: "Repair",
      status: "In Progress",
      date: "2024-01-15",
      duration: "1h 20m",
      rating: null,
      location: "Lekki",
    },
  ]

  const performanceData = [
    { month: "Oct", jobs: 52, rating: 4.8 },
    { month: "Nov", jobs: 48, rating: 4.9 },
    { month: "Dec", jobs: 55, rating: 4.9 },
    { month: "Jan", jobs: 42, rating: 4.9 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Off Duty":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      case "Busy":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Scheduled":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/technicians">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Technicians
          </Button>
        </Link>
      </div>

      {/* Technician Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={technician.avatar || "/placeholder.svg"} alt={technician.name} />
                <AvatarFallback className="text-lg">
                  {technician.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{technician.name}</h1>
                  <Badge className={getStatusColor(technician.status)}>{technician.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {technician.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {technician.phone}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {technician.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Last active: {technician.lastActive}
                  </div>
                </div>
                <p className="text-sm font-medium">{technician.specialization}</p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold">{technician.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{technician.completedJobs}</div>
                <p className="text-sm text-muted-foreground">Jobs Completed</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{technician.efficiency}%</div>
                <p className="text-sm text-muted-foreground">Efficiency</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{technician.currentJobs}</div>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button>
              <Phone className="h-4 w-4 mr-2" />
              Call Technician
            </Button>
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Assign Job
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{technician.customerSatisfaction}/5.0</div>
            <Progress value={technician.customerSatisfaction * 20} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On-Time Completion</CardTitle>
            <Timer className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{technician.onTimeCompletion}%</div>
            <Progress value={technician.onTimeCompletion} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First-Time Fix Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{technician.firstTimeFixRate}%</div>
            <Progress value={technician.firstTimeFixRate} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{technician.efficiency}%</div>
            <Progress value={technician.efficiency} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="jobs">Recent Jobs</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Job History</CardTitle>
              <CardDescription>Latest jobs completed and in progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{job.id}</span>
                        <Badge className={getJobStatusColor(job.status)}>{job.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Customer: {job.customer}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{job.type}</span>
                        <span>{job.location}</span>
                        <span>{job.date}</span>
                        <span>Duration: {job.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {job.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-medium">{job.rating}</span>
                        </div>
                      )}
                      <Button variant="ghost" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Monthly performance metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceData.map((month) => (
                  <div key={month.month} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{month.month} 2024</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{month.jobs} jobs</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-medium">{month.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Progress value={(month.jobs / 60) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Skills</CardTitle>
              <CardDescription>Professional certifications and specializations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technician.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{cert}</p>
                      <p className="text-sm text-muted-foreground">Certified • Valid until 2025</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Skill Ratings</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Installation</span>
                      <span className="text-sm">95%</span>
                    </div>
                    <Progress value={95} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Maintenance</span>
                      <span className="text-sm">92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Diagnostics</span>
                      <span className="text-sm">88%</span>
                    </div>
                    <Progress value={88} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Customer Service</span>
                      <span className="text-sm">96%</span>
                    </div>
                    <Progress value={96} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Schedule</CardTitle>
              <CardDescription>Today's assignments and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">9:00 AM - Installation</p>
                      <p className="text-sm text-muted-foreground">Sarah Johnson • Victoria Island</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">In Progress</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">1:00 PM - Maintenance</p>
                      <p className="text-sm text-muted-foreground">David Chen • Ikeja</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Scheduled
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">3:30 PM - Quality Check</p>
                      <p className="text-sm text-muted-foreground">Emma Wilson • Lekki</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Scheduled</Badge>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Availability</h4>
                <p className="text-sm text-muted-foreground">Available for emergency calls after 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Next available slot: Tomorrow 9:00 AM</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
