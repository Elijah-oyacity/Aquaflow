"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
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

            <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Oops! The page you're looking for seems to have dried up. Let's get you back to flowing water.
            </p>

            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()} className="w-full bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
