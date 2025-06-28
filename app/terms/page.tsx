import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, ArrowLeft, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-xl">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              AquaFlow
            </span>
          </div>
          <Link href="/">
            <Button variant="outline" className="bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: December 2024</p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">AquaFlow Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using AquaFlow's Water-as-a-Service platform, you accept and agree to be bound by
                    the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                    use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">2. Service Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">AquaFlow provides Water-as-a-Service through:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>On-site water purification system installation</li>
                    <li>Automated glass bottle filling and sealing</li>
                    <li>Regular maintenance and filter replacements</li>
                    <li>Web application for monitoring and management</li>
                    <li>24/7 customer support</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">3. Subscription Plans</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Household Plan (₦15,000/month)</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Up to 20L/day capacity</li>
                        <li>6 reusable glass bottles</li>
                        <li>Full maintenance service</li>
                        <li>Dashboard access</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Plan (₦35,000/month)</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Up to 100L/day capacity</li>
                        <li>12+ bottles and inventory tracking</li>
                        <li>Advanced analytics</li>
                        <li>Multi-site management</li>
                        <li>Priority support</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Payment Terms</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Monthly subscriptions are billed in advance</li>
                    <li>Annual subscriptions receive discounted rates</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>Price changes will be communicated 30 days in advance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Installation and Maintenance</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Professional installation is included in all plans</li>
                    <li>Regular maintenance and filter replacements are covered</li>
                    <li>Customer must provide reasonable access for service</li>
                    <li>Equipment remains property of AquaFlow</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. User Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Proper use of equipment according to guidelines</li>
                    <li>Timely payment of subscription fees</li>
                    <li>Reporting issues or malfunctions promptly</li>
                    <li>Maintaining reasonable access for technicians</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    AquaFlow's liability is limited to the monthly subscription fee. We are not liable for indirect,
                    incidental, or consequential damages. Our water quality meets all applicable safety standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Termination</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Either party may terminate with 30 days written notice</li>
                    <li>Equipment must be returned in good condition</li>
                    <li>Outstanding fees remain due upon termination</li>
                    <li>Data will be deleted according to our privacy policy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">9. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For questions about these terms, contact us at:
                    <br />
                    Email: legal@aquaflow.com
                    <br />
                    Phone: +1 (555) 123-4567
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
