"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Home, RefreshCw, AlertTriangle } from "lucide-react"

export default function ServerError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm max-w-md mx-auto">
          <CardContent className="pt-12 pb-8">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                AquaFlow
              </span>
            </div>

            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>

            <div className="text-6xl font-bold text-gray-300 mb-4">500</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Server Error</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Something went wrong on our end. Our technical team has been notified and is working to fix the issue.
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
