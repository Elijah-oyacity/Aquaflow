"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TestTube, Upload, Camera, CheckCircle, History, Info } from "lucide-react"

export default function WaterTestPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const analyzeTestStrip = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setTestResult("excellent")
      setIsAnalyzing(false)
    }, 3000)
  }

  const testHistory = [
    {
      date: "2024-03-10",
      result: "Excellent",
      ph: "7.2",
      tds: "45 ppm",
      chlorine: "0.1 ppm",
      status: "passed",
    },
    {
      date: "2024-03-03",
      result: "Good",
      ph: "7.1",
      tds: "52 ppm",
      chlorine: "0.2 ppm",
      status: "passed",
    },
    {
      date: "2024-02-25",
      result: "Excellent",
      ph: "7.3",
      tds: "41 ppm",
      chlorine: "0.1 ppm",
      status: "passed",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Test Strip Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TestTube className="h-5 w-5 mr-2 text-blue-600" />
            Water Quality Test
          </CardTitle>
          <CardDescription>Upload a photo of your test strip for instant analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Upload Test Strip Photo</h3>
                <p className="text-gray-600">Take a clear photo of your test strip against a white background</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Button asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </span>
                  </Button>
                </Label>
                <Input id="file-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                <Button variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
              </div>
              {selectedFile && <div className="text-sm text-gray-600">Selected: {selectedFile.name}</div>}
            </div>
          </div>

          {/* Analysis Button */}
          {selectedFile && (
            <div className="text-center">
              <Button onClick={analyzeTestStrip} disabled={isAnalyzing} className="w-full sm:w-auto">
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <TestTube className="h-4 w-4 mr-2" />
                    Analyze Test Strip
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Test Result */}
          {testResult && (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-900">Water Quality: Excellent</h3>
                    <p className="text-green-700">Your water meets all safety standards</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600">7.2</div>
                    <div className="text-sm text-gray-600">pH Level</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600">45 ppm</div>
                    <div className="text-sm text-gray-600">TDS</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600">0.1 ppm</div>
                    <div className="text-sm text-gray-600">Chlorine</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Testing Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="h-5 w-5 mr-2 text-blue-600" />
            Testing Instructions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mt-0.5">
                1
              </div>
              <div>
                <h4 className="font-medium">Prepare the test strip</h4>
                <p className="text-sm text-gray-600">
                  Remove one test strip from the container and close it immediately
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mt-0.5">
                2
              </div>
              <div>
                <h4 className="font-medium">Dip in water</h4>
                <p className="text-sm text-gray-600">Dip the test strip in your purified water for 2-3 seconds</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mt-0.5">
                3
              </div>
              <div>
                <h4 className="font-medium">Wait for results</h4>
                <p className="text-sm text-gray-600">Wait 60 seconds for the colors to develop fully</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-blue-600 mt-0.5">
                4
              </div>
              <div>
                <h4 className="font-medium">Take photo</h4>
                <p className="text-sm text-gray-600">
                  Place the strip on a white surface and take a clear photo in good lighting
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <History className="h-5 w-5 mr-2 text-gray-600" />
            Test History
          </CardTitle>
          <CardDescription>Your recent water quality test results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testHistory.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{test.date}</p>
                    <p className="text-sm text-gray-600">
                      pH: {test.ph} | TDS: {test.tds} | Chlorine: {test.chlorine}
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">{test.result}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Manual Entry Option */}
      <Card>
        <CardHeader>
          <CardTitle>Manual Test Entry</CardTitle>
          <CardDescription>Enter test results manually if you prefer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="ph">pH Level</Label>
              <Input id="ph" placeholder="7.0" />
            </div>
            <div>
              <Label htmlFor="tds">TDS (ppm)</Label>
              <Input id="tds" placeholder="50" />
            </div>
            <div>
              <Label htmlFor="chlorine">Chlorine (ppm)</Label>
              <Input id="chlorine" placeholder="0.1" />
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea id="notes" placeholder="Any observations about taste, smell, or appearance..." />
          </div>
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            Submit Manual Results
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
