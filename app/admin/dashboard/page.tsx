import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  UserCheck,
  Wrench,
  TestTube,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Systems</CardTitle>
            <Building2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,189</div>
            <p className="text-xs text-muted-foreground">95.3% operational</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$284,750</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Technicians</CardTitle>
            <UserCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">18 active today</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              System Health Overview
            </CardTitle>
            <CardDescription>Real-time status of all water systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Operational Systems</span>
              <span className="text-sm">1,189 / 1,247</span>
            </div>
            <Progress value={95.3} className="h-2" />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">1,189</div>
                <div className="text-sm text-gray-600">Healthy</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">42</div>
                <div className="text-sm text-gray-600">Maintenance Due</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">16</div>
                <div className="text-sm text-gray-600">Issues</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">0</div>
                <div className="text-sm text-gray-600">Offline</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Customer Growth
            </CardTitle>
            <CardDescription>Customer acquisition and retention metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Household Customers</span>
                <span className="text-sm">847 (+8%)</span>
              </div>
              <Progress value={68} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Business Customers</span>
                <span className="text-sm">400 (+15%)</span>
              </div>
              <Progress value={32} className="h-2" />
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>New This Month:</span>
                <span className="font-medium">127 customers</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Churn Rate:</span>
                <span className="font-medium text-green-600">2.1%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg. Revenue per Customer:</span>
                <span className="font-medium">$228</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
              Pending Actions
            </CardTitle>
            <CardDescription>Items requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-900">Critical System Failures</p>
                  <p className="text-sm text-red-700">16 systems need immediate attention</p>
                </div>
              </div>
              <Badge className="bg-red-100 text-red-800">Urgent</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Wrench className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-900">Overdue Maintenance</p>
                  <p className="text-sm text-yellow-700">42 systems past due date</p>
                </div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">High</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TestTube className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Test Results Review</p>
                  <p className="text-sm text-blue-700">23 tests awaiting verification</p>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Medium</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Technician Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="h-5 w-5 mr-2 text-purple-600" />
              Technician Performance
            </CardTitle>
            <CardDescription>Field team metrics and efficiency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">Active Today</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">94%</div>
                <div className="text-sm text-gray-600">On-Time Rate</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Jobs Completed Today:</span>
                <span className="font-medium">67</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg. Job Duration:</span>
                <span className="font-medium">42 min</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Customer Satisfaction:</span>
                <span className="font-medium text-green-600">4.8/5.0</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/admin/technicians">
                <Button variant="outline" className="w-full bg-transparent">
                  Manage Technicians
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest system events and administrative actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">System failure reported - Downtown Restaurant</p>
                <p className="text-xs text-muted-foreground">Technician dispatched • 15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">New business customer onboarded - Tech Startup Inc.</p>
                <p className="text-xs text-muted-foreground">3 locations added • 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Bulk maintenance completed - Residential District</p>
                <p className="text-xs text-muted-foreground">47 systems serviced • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <TestTube className="h-5 w-5 text-purple-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Water quality audit completed - Medical Center</p>
                <p className="text-xs text-muted-foreground">All tests passed • 4 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
