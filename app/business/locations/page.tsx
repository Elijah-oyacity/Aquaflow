"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Building, Users, Droplets, Activity, AlertCircle, CheckCircle, Clock } from "lucide-react"

const locations = [
  {
    id: "LOC-001",
    name: "Downtown Office Complex",
    address: "123 Business Ave, Downtown, NY 10001",
    type: "Office Building",
    employees: 450,
    waterUsage: 12500,
    lastInspection: "2024-01-15",
    status: "Active",
    systemType: "Advanced Filtration",
    monthlyConsumption: 45000,
    efficiency: 92,
    alerts: 0,
  },
  {
    id: "LOC-002",
    name: "Manufacturing Plant A",
    address: "456 Industrial Blvd, Industrial Park, NY 10002",
    type: "Manufacturing",
    employees: 280,
    waterUsage: 35000,
    lastInspection: "2024-01-10",
    status: "Active",
    systemType: "Industrial Treatment",
    monthlyConsumption: 125000,
    efficiency: 88,
    alerts: 2,
  },
  {
    id: "LOC-003",
    name: "Retail Store Network",
    address: "789 Commerce St, Shopping District, NY 10003",
    type: "Retail",
    employees: 120,
    waterUsage: 8500,
    lastInspection: "2024-01-20",
    status: "Active",
    systemType: "Basic Filtration",
    monthlyConsumption: 28000,
    efficiency: 95,
    alerts: 0,
  },
  {
    id: "LOC-004",
    name: "Warehouse Facility",
    address: "321 Storage Way, Logistics Center, NY 10004",
    type: "Warehouse",
    employees: 85,
    waterUsage: 3200,
    lastInspection: "2023-12-28",
    status: "Maintenance Required",
    systemType: "Standard Filtration",
    monthlyConsumption: 12000,
    efficiency: 78,
    alerts: 3,
  },
]

const locationTypes = ["All", "Office Building", "Manufacturing", "Retail", "Warehouse"]

export default function BusinessLocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")

  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || location.type === selectedType
    return matchesSearch && matchesType
  })

  const totalLocations = locations.length
  const activeLocations = locations.filter((loc) => loc.status === "Active").length
  const totalEmployees = locations.reduce((sum, loc) => sum + loc.employees, 0)
  const totalWaterUsage = locations.reduce((sum, loc) => sum + loc.waterUsage, 0)
  const totalAlerts = locations.reduce((sum, loc) => sum + loc.alerts, 0)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        )
      case "Maintenance Required":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Maintenance Required
          </Badge>
        )
      case "Offline":
        return (
          <Badge variant="destructive">
            <AlertCircle className="h-3 w-3 mr-1" />
            Offline
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-600"
    if (efficiency >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Location Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage water systems across all business locations</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Location
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLocations}</div>
            <p className="text-xs text-muted-foreground">{activeLocations} active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEmployees.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all locations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Water Usage</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWaterUsage.toLocaleString()}L</div>
            <p className="text-xs text-muted-foreground">Per day average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Efficiency</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-muted-foreground">Average across locations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalAlerts}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Locations Management */}
      <Card>
        <CardHeader>
          <CardTitle>Business Locations</CardTitle>
          <CardDescription>Monitor water systems and usage across all your business locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {locationTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Locations Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Daily Usage</TableHead>
                  <TableHead>Efficiency</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLocations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{location.name}</div>
                        <div className="text-sm text-gray-500">{location.address}</div>
                      </div>
                    </TableCell>
                    <TableCell>{location.type}</TableCell>
                    <TableCell>{location.employees}</TableCell>
                    <TableCell>{location.waterUsage.toLocaleString()}L</TableCell>
                    <TableCell>
                      <span className={getEfficiencyColor(location.efficiency)}>{location.efficiency}%</span>
                    </TableCell>
                    <TableCell>{getStatusBadge(location.status)}</TableCell>
                    <TableCell>
                      {location.alerts > 0 ? (
                        <Badge variant="destructive">{location.alerts}</Badge>
                      ) : (
                        <span className="text-gray-400">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
