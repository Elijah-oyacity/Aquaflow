"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Droplets, ArrowLeft, CheckCircle, Building2, Home, UserCheck } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    companyName: "",
    address: "",
    experience: "",
    certifications: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const typeParam = searchParams.get("type")
  useEffect(() => {
    if (
      typeParam &&
      ["household", "business", "technician"].includes(typeParam) &&
      formData.accountType !== typeParam
    ) {
      setFormData((prev) => ({ ...prev, accountType: typeParam }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on account type
      if (formData.accountType === "household") {
        router.push("/household/dashboard")
      } else if (formData.accountType === "business") {
        router.push("/business/dashboard")
      } else if (formData.accountType === "technician") {
        router.push("/technician/jobs")
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-xl">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              AquaFlow
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join the water revolution today</p>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Get Started</CardTitle>
            <CardDescription>Choose your role and create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Account Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card
                    className={`cursor-pointer border-2 transition-all ${
                      formData.accountType === "household"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInputChange("accountType", "household")}
                  >
                    <CardContent className="p-6 text-center">
                      <Home className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold mb-2">Household</h3>
                      <p className="text-sm text-gray-600">₦15,000/month</p>
                      <p className="text-xs text-gray-500 mt-1">Perfect for families</p>
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 transition-all ${
                      formData.accountType === "business"
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInputChange("accountType", "business")}
                  >
                    <CardContent className="p-6 text-center">
                      <Building2 className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                      <h3 className="font-semibold mb-2">Business</h3>
                      <p className="text-sm text-gray-600">₦35,000/month</p>
                      <p className="text-xs text-gray-500 mt-1">For restaurants & offices</p>
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer border-2 transition-all ${
                      formData.accountType === "technician"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInputChange("accountType", "technician")}
                  >
                    <CardContent className="p-6 text-center">
                      <UserCheck className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                      <h3 className="font-semibold mb-2">Technician</h3>
                      <p className="text-sm text-gray-600">Join our team</p>
                      <p className="text-xs text-gray-500 mt-1">Installation & maintenance</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+234 xxx xxx xxxx"
                  required
                  className="mt-1"
                />
              </div>

              {/* Business Information */}
              {formData.accountType === "business" && (
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    placeholder="Your Company Ltd."
                    required
                    className="mt-1"
                  />
                </div>
              )}

              {/* Technician Information */}
              {formData.accountType === "technician" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="e.g., 3 years in plumbing/electrical work"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="certifications">Certifications (Optional)</Label>
                    <Input
                      id="certifications"
                      value={formData.certifications}
                      onChange={(e) => handleInputChange("certifications", e.target.value)}
                      placeholder="e.g., Plumbing certification, Electrical license"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              {/* Address */}
              <div>
                <Label htmlFor="address">
                  {formData.accountType === "technician" ? "Current Address" : "Installation Address"}
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="123 Main Street, Lagos, Nigeria"
                  required
                  className="mt-1"
                />
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="••••••••"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="••••••••"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                disabled={!formData.agreeToTerms || isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
