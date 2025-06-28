import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Download, Droplets, DollarSign, Building2 } from "lucide-react"

export default function BusinessAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into your water usage and costs</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Consumption</CardTitle>
            <Droplets className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847 L</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1 text-green-600" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦3,240</div>
            <p className="text-xs text-muted-foreground">vs. bottled water</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            <Building2 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">All operational</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">System efficiency</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage by Location */}
      <Card>
        <CardHeader>
          <CardTitle>Usage by Location</CardTitle>
          <CardDescription>Water consumption breakdown across all locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Main Restaurant</span>
                <span className="text-sm text-gray-600">1,245L (44%)</span>
              </div>
              <Progress value={44} className="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Kitchen Prep Area</span>
                <span className="text-sm text-gray-600">892L (31%)</span>
              </div>
              <Progress value={31} className="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Staff Break Room</span>
                <span className="text-sm text-gray-600">710L (25%)</span>
              </div>
              <Progress value={25} className="h-3" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Cost Comparison</CardTitle>
            <CardDescription>AquaFlow vs. traditional bottled water</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900">AquaFlow Service</p>
                  <p className="text-sm text-blue-700">Monthly subscription</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-900">₦35,000</p>
                  <p className="text-sm text-blue-700">Fixed cost</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-red-900">Bottled Water</p>
                  <p className="text-sm text-red-700">Estimated equivalent</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-900">₦68,240</p>
                  <p className="text-sm text-red-700">Variable cost</p>
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-900">Monthly Savings: ₦33,240</p>
                <p className="text-sm text-green-700">Annual savings: ₦398,880</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>Your contribution to sustainability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2,847</div>
                <p className="text-sm text-gray-600">Plastic bottles saved this month</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">85.4 kg</div>
                <p className="text-sm text-gray-600">CO₂ emissions reduced</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">34,164</div>
                <p className="text-sm text-gray-600">Total bottles saved since start</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Trends</CardTitle>
          <CardDescription>Daily water consumption patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              <div className="font-medium">Mon</div>
              <div className="font-medium">Tue</div>
              <div className="font-medium">Wed</div>
              <div className="font-medium">Thu</div>
              <div className="font-medium">Fri</div>
              <div className="font-medium">Sat</div>
              <div className="font-medium">Sun</div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[95, 87, 92, 88, 94, 76, 68].map((usage, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded p-2 mb-1">
                    <div className="bg-blue-600 rounded" style={{ height: `${usage}px`, width: "100%" }}></div>
                  </div>
                  <div className="text-xs text-gray-600">{usage}L</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
          <CardDescription>Operational efficiency across all locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
              <p className="text-sm text-gray-600">System Uptime</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7.1</div>
              <p className="text-sm text-gray-600">Average pH Level</p>
              <Badge className="mt-2 bg-blue-100 text-blue-800">Optimal</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">42 ppm</div>
              <p className="text-sm text-gray-600">Average TDS</p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">Excellent</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
