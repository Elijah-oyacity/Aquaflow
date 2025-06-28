import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Droplets, CheckCircle, AlertTriangle, Calendar, Wrench, TestTube, Phone } from "lucide-react"
import Link from "next/link"

export default function HouseholdDashboard() {
  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Quality</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Excellent</div>
            <p className="text-xs text-muted-foreground">Last tested 2 days ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscription</CardTitle>
            <Droplets className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">Renews in 23 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bottles This Month</CardTitle>
            <Droplets className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Maintenance</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 15</div>
            <p className="text-xs text-muted-foreground">Filter replacement due</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Water Quality Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TestTube className="h-5 w-5 mr-2 text-green-600" />
              Water Quality Status
            </CardTitle>
            <CardDescription>Latest test results and system health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">pH Level</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                7.2 - Optimal
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">TDS (Total Dissolved Solids)</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                45 ppm - Excellent
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Chlorine</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                0.1 ppm - Safe
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">System Pressure</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Normal
              </Badge>
            </div>
            <div className="pt-4">
              <Link href="/household/test">
                <Button className="w-full">
                  <TestTube className="h-4 w-4 mr-2" />
                  Test Water Quality
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Droplets className="h-5 w-5 mr-2 text-blue-600" />
              Subscription Details
            </CardTitle>
            <CardDescription>Your current plan and usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Plan</span>
              <Badge className="bg-blue-100 text-blue-800">Family Premium</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Monthly Allowance</span>
              <span className="text-sm">Unlimited</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Next Billing</span>
              <span className="text-sm">March 15, 2024</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Bottles Used This Month</span>
                <span>47 / Unlimited</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="pt-4">
              <Link href="/household/subscription">
                <Button variant="outline" className="w-full bg-transparent">
                  View Subscription Details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Water quality test completed</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">12 bottles filled automatically</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Wrench className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Routine maintenance completed</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Filter replacement completed</p>
                  <p className="text-xs text-muted-foreground">2 weeks ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and support options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/household/test">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <TestTube className="h-4 w-4 mr-2" />
                Test Water Quality
              </Button>
            </Link>
            <Link href="/household/maintenance">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Wrench className="h-4 w-4 mr-2" />
                Request Maintenance
              </Button>
            </Link>
            <Link href="/household/support">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report Issue
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Health Alert */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-green-900">System Operating Normally</h3>
              <p className="text-sm text-green-700">
                All systems are functioning properly. Your next scheduled maintenance is in 15 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
