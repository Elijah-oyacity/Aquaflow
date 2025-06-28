"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Gauge,
  Search,
  Settings,
  Thermometer,
  Zap,
  FileText,
  Play,
  RotateCcw,
} from "lucide-react"

export default function TechnicianDiagnostics() {
  const [selectedSystem, setSelectedSystem] = useState("")
  const [diagnosticRunning, setDiagnosticRunning] = useState(false)
  const [diagnosticProgress, setDiagnosticProgress] = useState(0)
  const [diagnosticResults, setDiagnosticResults] = useState<any>(null)

  const systemTypes = [
    { value: "residential", label: "Residential System" },
    { value: "commercial", label: "Commercial System" },
    { value: "industrial", label: "Industrial System" },
  ]

  const runDiagnostic = () => {
    setDiagnosticRunning(true)
    setDiagnosticProgress(0)

    // Simulate diagnostic progress
    const interval = setInterval(() => {
      setDiagnosticProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setDiagnosticRunning(false)
          setDiagnosticResults({
            overall: "Good",
            waterPressure: { value: 45, status: "Normal", unit: "PSI" },
            flowRate: { value: 2.3, status: "Normal", unit: "GPM" },
            temperature: { value: 68, status: "Normal", unit: "°F" },
            ph: { value: 7.2, status: "Normal", unit: "pH" },
            tds: { value: 150, status: "Normal", unit: "ppm" },
            filterLife: { value: 75, status: "Good", unit: "%" },
            pumpStatus: { value: "Running", status: "Normal" },
            leakDetection: { value: "No Leaks", status: "Good" },
          })
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal":
      case "Good":
        return "text-green-600"
      case "Warning":
        return "text-yellow-600"
      case "Critical":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Normal":
      case "Good":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "Critical":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">System Diagnostics</h1>
          <p className="text-gray-600">Run comprehensive system checks and diagnostics</p>
        </div>
      </div>

      <Tabs defaultValue="quick" className="space-y-6">
        <TabsList>
          <TabsTrigger value="quick">Quick Diagnostic</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Tests</TabsTrigger>
          <TabsTrigger value="history">Test History</TabsTrigger>
        </TabsList>

        <TabsContent value="quick" className="space-y-6">
          {/* System Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                System Selection
              </CardTitle>
              <CardDescription>Select the system type to run diagnostics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="systemType">System Type</Label>
                  <Select value={selectedSystem} onValueChange={setSelectedSystem}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select system type" />
                    </SelectTrigger>
                    <SelectContent>
                      {systemTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="serialNumber">Serial Number</Label>
                  <Input id="serialNumber" placeholder="Enter system serial number" />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button onClick={runDiagnostic} disabled={!selectedSystem || diagnosticRunning} className="flex-1">
                  <Play className="h-4 w-4 mr-2" />
                  {diagnosticRunning ? "Running Diagnostic..." : "Start Diagnostic"}
                </Button>
                <Button variant="outline" disabled={diagnosticRunning} className="bg-transparent">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              {diagnosticRunning && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Diagnostic Progress</span>
                    <span>{diagnosticProgress}%</span>
                  </div>
                  <Progress value={diagnosticProgress} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Diagnostic Results */}
          {diagnosticResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Water Quality */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Droplets className="h-5 w-5 mr-2 text-blue-600" />
                    Water Quality
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">pH Level</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.ph.value} {diagnosticResults.ph.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.ph.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">TDS</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.tds.value} {diagnosticResults.tds.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.tds.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Temperature</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.temperature.value}
                        {diagnosticResults.temperature.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.temperature.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Gauge className="h-5 w-5 mr-2 text-green-600" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Water Pressure</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.waterPressure.value} {diagnosticResults.waterPressure.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.waterPressure.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Flow Rate</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.flowRate.value} {diagnosticResults.flowRate.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.flowRate.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pump Status</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{diagnosticResults.pumpStatus.value}</span>
                      {getStatusIcon(diagnosticResults.pumpStatus.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Activity className="h-5 w-5 mr-2 text-purple-600" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Filter Life</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        {diagnosticResults.filterLife.value}
                        {diagnosticResults.filterLife.unit}
                      </span>
                      {getStatusIcon(diagnosticResults.filterLife.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Leak Detection</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{diagnosticResults.leakDetection.value}</span>
                      {getStatusIcon(diagnosticResults.leakDetection.status)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Overall Status</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">{diagnosticResults.overall}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Recommendations */}
          {diagnosticResults && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">System Operating Normally</p>
                      <p className="text-sm text-green-600">
                        All parameters are within normal ranges. Continue regular maintenance schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Activity className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Filter Replacement Due Soon</p>
                      <p className="text-sm text-blue-600">
                        Filter life at 75%. Schedule replacement within the next 2 weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Diagnostic Tests</CardTitle>
              <CardDescription>Run specific component tests and calibrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Zap className="h-6 w-6 mb-2" />
                  Electrical Test
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Thermometer className="h-6 w-6 mb-2" />
                  Temperature Calibration
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Gauge className="h-6 w-6 mb-2" />
                  Pressure Test
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Droplets className="h-6 w-6 mb-2" />
                  Flow Rate Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Diagnostic History</CardTitle>
              <CardDescription>Previous diagnostic results and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">System Diagnostic #{i}</p>
                      <p className="text-sm text-gray-600">December {25 - i}, 2024 - 2:30 PM</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-green-100 text-green-800">Passed</Badge>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Search className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
