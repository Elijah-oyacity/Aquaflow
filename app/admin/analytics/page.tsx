import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Download, Users, Droplets, DollarSign, MapPin } from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">Comprehensive business intelligence and performance metrics</p>
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
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦18.7M</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1 text-green-600" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1 text-green-600" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Produced</CardTitle>
            <Droplets className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847,230L</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1 text-green-600" />
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            <Badge className="bg-green-100 text-green-800">Excellent</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">Above target of 99%</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>New customer acquisition over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Household Customers</span>
                <div className="text-right">
                  <div className="font-bold">847</div>
                  <div className="text-xs text-green-600">+8% this month</div>
                </div>
              </div>
              <Progress value={68} className="h-2" />

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Business Customers</span>
                <div className="text-right">
                  <div className="font-bold">400</div>
                  <div className="text-xs text-green-600">+15% this month</div>
                </div>
              </div>
              <Progress value={32} className="h-2" />

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Acquisition Cost:</span>
                  <span className="font-medium">₦12,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Customer Lifetime Value:</span>
                  <span className="font-medium">₦180,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Churn Rate:</span>
                  <span className="font-medium text-green-600">2.1%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Revenue breakdown and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Monthly Subscriptions</span>
                <div className="text-right">
                  <div className="font-bold">₦16.7M</div>
                  <div className="text-xs text-gray-600">89% of total</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Setup & Installation</span>
                <div className="text-right">
                  <div className="font-bold">₦1.5M</div>
                  <div className="text-xs text-gray-600">8% of total</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Additional Services</span>
                <div className="text-right">
                  <div className="font-bold">₦0.5M</div>
                  <div className="text-xs text-gray-600">3% of total</div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Average Revenue per User:</span>
                  <span className="font-medium">₦15,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monthly Recurring Revenue:</span>
                  <span className="font-medium">₦16.7M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Revenue Growth Rate:</span>
                  <span className="font-medium text-green-600">8.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operational Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Overall system health metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
                <p className="text-sm text-gray-600">System Uptime</p>
                <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Systems:</span>
                  <span className="font-medium">1,189 / 1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Maintenance Due:</span>
                  <span className="font-medium text-yellow-600">42</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Critical Issues:</span>
                  <span className="font-medium text-red-600">16</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Water Quality</CardTitle>
            <CardDescription>Quality metrics across all systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7.1</div>
                <p className="text-sm text-gray-600">Average pH Level</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">Optimal</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tests Passed:</span>
                  <span className="font-medium text-green-600">98.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average TDS:</span>
                  <span className="font-medium">42 ppm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Chlorine Levels:</span>
                  <span className="font-medium">0.1 ppm</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technician Performance</CardTitle>
            <CardDescription>Field team efficiency metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-sm text-gray-600">On-Time Completion</p>
                <Badge className="mt-2 bg-purple-100 text-purple-800">Excellent</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Technicians:</span>
                  <span className="font-medium">18 / 24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg Job Duration:</span>
                  <span className="font-medium">42 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Customer Rating:</span>
                  <span className="font-medium text-green-600">4.8/5.0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geographic Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Customer and system distribution across locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">347</div>
              <div className="text-sm text-gray-600">Lagos Central</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">289</div>
              <div className="text-sm text-gray-600">Victoria Island</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600">234</div>
              <div className="text-sm text-gray-600">Ikeja</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600">377</div>
              <div className="text-sm text-gray-600">Lekki</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trends and Forecasting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Growth Trends</CardTitle>
            <CardDescription>Key growth indicators and projections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-green-900">Customer Growth</p>
                  <p className="text-sm text-green-700">Monthly growth rate</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">+12%</p>
                  <p className="text-sm text-green-600">Above target</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900">Revenue Growth</p>
                  <p className="text-sm text-blue-700">Monthly revenue increase</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">+8.2%</p>
                  <p className="text-sm text-blue-600">Steady growth</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-medium text-purple-900">Market Expansion</p>
                  <p className="text-sm text-purple-700">New locations added</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">+23</p>
                  <p className="text-sm text-purple-600">This quarter</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operational Efficiency</CardTitle>
            <CardDescription>Key efficiency metrics and improvements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>System Efficiency:</span>
                  <span className="font-medium text-green-600">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cost per Liter:</span>
                  <span className="font-medium">₦0.22</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Energy Efficiency:</span>
                  <span className="font-medium text-green-600">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Waste Reduction:</span>
                  <span className="font-medium text-green-600">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
