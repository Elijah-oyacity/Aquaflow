import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wrench, Calendar, CheckCircle, AlertTriangle, Plus } from "lucide-react"

export default function HouseholdMaintenancePage() {
  return (
    <div className="space-y-6">
      {/* Request New Service */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-blue-600" />
            Request Maintenance Service
          </CardTitle>
          <CardDescription>Schedule a maintenance visit or report an issue</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service-type">Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine">Routine Maintenance</SelectItem>
                    <SelectItem value="filter">Filter Replacement</SelectItem>
                    <SelectItem value="repair">System Repair</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Routine</SelectItem>
                    <SelectItem value="medium">Medium - Soon</SelectItem>
                    <SelectItem value="high">High - Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Issue Description</Label>
              <Textarea
                id="description"
                placeholder="Please describe the issue or maintenance needed..."
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="preferred-date">Preferred Date</Label>
              <Input type="date" id="preferred-date" />
            </div>

            <Button className="w-full">
              <Wrench className="h-4 w-4 mr-2" />
              Submit Service Request
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Upcoming Maintenance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-orange-600" />
            Upcoming Maintenance
          </CardTitle>
          <CardDescription>Scheduled maintenance visits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="font-medium">Filter Replacement</p>
                  <p className="text-sm text-gray-600">March 15, 2024 at 10:00 AM</p>
                  <p className="text-sm text-gray-600">Technician: Mike Thompson</p>
                </div>
              </div>
              <Badge className="bg-orange-100 text-orange-800">Scheduled</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Service History
          </CardTitle>
          <CardDescription>Past maintenance and service records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "February 28, 2024",
                type: "Routine Maintenance",
                technician: "Mike Thompson",
                status: "completed",
                notes: "System cleaned, filters checked, all components working properly",
              },
              {
                date: "January 15, 2024",
                type: "Filter Replacement",
                technician: "Sarah Wilson",
                status: "completed",
                notes: "Replaced primary and secondary filters, system performance optimal",
              },
              {
                date: "December 20, 2023",
                type: "System Installation",
                technician: "Mike Thompson",
                status: "completed",
                notes: "Initial system installation and setup completed successfully",
              },
            ].map((service, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{service.type}</p>
                    <p className="text-sm text-gray-600">{service.date}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">Technician: {service.technician}</p>
                <p className="text-sm text-gray-700">{service.notes}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center text-red-900">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
            Emergency Service
          </CardTitle>
          <CardDescription className="text-red-700">For urgent issues that require immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-red-600 hover:bg-red-700">Call Emergency Line: +1 (555) 911-AQUA</Button>
            <Button variant="outline" className="flex-1 border-red-300 text-red-700 hover:bg-red-100 bg-transparent">
              Report Emergency Online
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
