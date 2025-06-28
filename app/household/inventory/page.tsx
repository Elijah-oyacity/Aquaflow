import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Package, Droplets, AlertTriangle, CheckCircle, Plus } from "lucide-react"

export default function HouseholdInventoryPage() {
  return (
    <div className="space-y-6">
      {/* Current Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Bottles</CardTitle>
            <Droplets className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Available for use</p>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Filter Status</CardTitle>
            <Package className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">Next replacement in 45 days</p>
            <Progress value={65} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
            <Progress value={95} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Bottle Inventory */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Droplets className="h-5 w-5 mr-2 text-blue-600" />
            Water Bottle Inventory
          </CardTitle>
          <CardDescription>Track your water bottle usage and availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "B001", status: "full", location: "Kitchen Counter", lastFilled: "2 hours ago" },
              { id: "B002", status: "full", location: "Living Room", lastFilled: "4 hours ago" },
              { id: "B003", status: "half", location: "Bedroom", lastFilled: "1 day ago" },
              { id: "B004", status: "empty", location: "Office", lastFilled: "2 days ago" },
              { id: "B005", status: "full", location: "Kitchen Counter", lastFilled: "1 hour ago" },
              { id: "B006", status: "full", location: "Guest Room", lastFilled: "6 hours ago" },
              { id: "B007", status: "half", location: "Dining Room", lastFilled: "8 hours ago" },
              { id: "B008", status: "empty", location: "Storage", lastFilled: "3 days ago" },
            ].map((bottle) => (
              <div key={bottle.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Droplets
                      className={`h-8 w-8 ${
                        bottle.status === "full"
                          ? "text-blue-600"
                          : bottle.status === "half"
                            ? "text-yellow-600"
                            : "text-gray-400"
                      }`}
                    />
                    {bottle.status === "empty" && (
                      <AlertTriangle className="h-4 w-4 text-red-500 absolute -top-1 -right-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">Bottle {bottle.id}</p>
                    <p className="text-sm text-gray-600">{bottle.location}</p>
                    <p className="text-xs text-gray-500">Last filled: {bottle.lastFilled}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    className={
                      bottle.status === "full"
                        ? "bg-blue-100 text-blue-800"
                        : bottle.status === "half"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }
                  >
                    {bottle.status === "full" ? "Full" : bottle.status === "half" ? "Half Full" : "Empty"}
                  </Badge>
                  {bottle.status === "empty" && <Button size="sm">Request Refill</Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filter & Component Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2 text-green-600" />
            System Components
          </CardTitle>
          <CardDescription>Monitor the health of your AquaFlow system components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                component: "Primary Filter",
                status: "good",
                lifespan: 65,
                nextReplacement: "45 days",
                lastReplaced: "January 15, 2024",
              },
              {
                component: "Secondary Filter",
                status: "excellent",
                lifespan: 85,
                nextReplacement: "78 days",
                lastReplaced: "December 20, 2023",
              },
              {
                component: "UV Sterilizer",
                status: "good",
                lifespan: 70,
                nextReplacement: "120 days",
                lastReplaced: "October 10, 2023",
              },
              {
                component: "Pump System",
                status: "excellent",
                lifespan: 95,
                nextReplacement: "365 days",
                lastReplaced: "March 1, 2023",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{item.component}</h4>
                  <Badge
                    className={
                      item.status === "excellent"
                        ? "bg-green-100 text-green-800"
                        : item.status === "good"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Remaining Lifespan</span>
                    <span>{item.lifespan}%</span>
                  </div>
                  <Progress value={item.lifespan} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Next replacement: {item.nextReplacement}</span>
                    <span>Last replaced: {item.lastReplaced}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Request Bottle Refill</CardTitle>
            <CardDescription>Get empty bottles refilled quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Request Refill Service
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Maintenance</CardTitle>
            <CardDescription>Book filter replacement or system check</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              <Package className="h-4 w-4 mr-2" />
              Schedule Service
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
