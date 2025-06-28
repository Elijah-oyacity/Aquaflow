import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Home, Droplets, Thermometer, Activity, Settings } from "lucide-react"

export default function HouseholdLocationsPage() {
  return (
    <div className="space-y-6">
      {/* Location Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Home className="h-5 w-5 mr-2 text-blue-600" />
            Your Home Setup
          </CardTitle>
          <CardDescription>Monitor water access points throughout your home</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900">5</div>
              <div className="text-sm text-blue-700">Active Locations</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-900">47L</div>
              <div className="text-sm text-green-700">Daily Consumption</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-900">98%</div>
              <div className="text-sm text-purple-700">System Efficiency</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            name: "Kitchen",
            type: "Primary Station",
            status: "active",
            bottles: 3,
            dailyUsage: 18.5,
            temperature: 22,
            lastActivity: "5 minutes ago",
            efficiency: 98,
          },
          {
            name: "Living Room",
            type: "Secondary Station",
            status: "active",
            bottles: 2,
            dailyUsage: 12.3,
            temperature: 24,
            lastActivity: "1 hour ago",
            efficiency: 95,
          },
          {
            name: "Master Bedroom",
            type: "Personal Station",
            status: "active",
            bottles: 1,
            dailyUsage: 8.7,
            temperature: 23,
            lastActivity: "3 hours ago",
            efficiency: 92,
          },
          {
            name: "Home Office",
            type: "Work Station",
            status: "active",
            bottles: 1,
            dailyUsage: 6.2,
            temperature: 25,
            lastActivity: "30 minutes ago",
            efficiency: 89,
          },
          {
            name: "Guest Room",
            type: "Guest Station",
            status: "standby",
            bottles: 1,
            dailyUsage: 1.3,
            temperature: 22,
            lastActivity: "2 days ago",
            efficiency: 85,
          },
        ].map((location, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  {location.name}
                </CardTitle>
                <Badge
                  className={location.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                >
                  {location.status.charAt(0).toUpperCase() + location.status.slice(1)}
                </Badge>
              </div>
              <CardDescription>{location.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{location.bottles} Bottles</p>
                    <p className="text-xs text-gray-600">Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">{location.dailyUsage}L</p>
                    <p className="text-xs text-gray-600">Daily Usage</p>
                  </div>
                </div>
              </div>

              {/* Temperature & Efficiency */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="text-sm font-medium">{location.temperature}°C</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Efficiency</span>
                    <span>{location.efficiency}%</span>
                  </div>
                  <Progress value={location.efficiency} className="h-2" />
                </div>
              </div>

              {/* Last Activity */}
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-600">Last activity: {location.lastActivity}</p>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Settings className="h-3 w-3 mr-1" />
                  Configure
                </Button>
                <Button size="sm" className="flex-1">
                  <Droplets className="h-3 w-3 mr-1" />
                  Refill
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Location Usage Analytics</CardTitle>
          <CardDescription>Water consumption patterns by location over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { location: "Kitchen", usage: [15, 18, 16, 20, 17, 19, 18], total: 123 },
              { location: "Living Room", usage: [10, 12, 11, 14, 13, 12, 12], total: 84 },
              { location: "Master Bedroom", usage: [8, 9, 7, 10, 8, 9, 9], total: 60 },
              { location: "Home Office", usage: [5, 7, 6, 8, 6, 7, 6], total: 45 },
              { location: "Guest Room", usage: [1, 2, 1, 3, 1, 2, 1], total: 11 },
            ].map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{data.location}</span>
                  <span className="text-sm text-gray-600">{data.total}L this week</span>
                </div>
                <div className="flex space-x-1 h-8">
                  {data.usage.map((day, dayIndex) => (
                    <div key={dayIndex} className="flex-1 bg-blue-200 rounded-sm flex items-end">
                      <div className="w-full bg-blue-600 rounded-sm" style={{ height: `${(day / 20) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Recommendations */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">System Recommendations</CardTitle>
          <CardDescription className="text-blue-700">
            Optimize your water system based on usage patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
              <div>
                <p className="font-medium text-blue-900">Kitchen Optimization</p>
                <p className="text-sm text-blue-700">
                  Consider adding one more bottle to the kitchen station during peak hours (6-8 PM)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
              <div>
                <p className="font-medium text-blue-900">Energy Efficiency</p>
                <p className="text-sm text-blue-700">
                  Guest room station can be set to eco-mode when not in use to save energy
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
              <div>
                <p className="font-medium text-blue-900">Maintenance Schedule</p>
                <p className="text-sm text-blue-700">
                  Schedule filter replacement for high-usage locations (Kitchen, Living Room) first
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
