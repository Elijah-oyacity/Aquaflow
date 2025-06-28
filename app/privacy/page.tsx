import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, ArrowLeft, Shield } from "lucide-react"

export default function PrivacyPage() {
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
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: December 2024</p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">AquaFlow Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Personal Information</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Name, email address, phone number</li>
                        <li>Billing and installation address</li>
                        <li>Payment information (processed securely)</li>
                        <li>Account preferences and settings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">System Data</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Water quality test results</li>
                        <li>System performance metrics</li>
                        <li>Usage patterns and consumption data</li>
                        <li>Maintenance and service records</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide and maintain our water purification service</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Monitor system performance and water quality</li>
                    <li>Schedule maintenance and technical support</li>
                    <li>Send service updates and important notifications</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information. We may share information only in these
                    circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>With service providers who help us operate our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In case of business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Industry-standard encryption for data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Limited access to personal information</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Secure payment processing through certified providers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Data Retention</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Account information: Retained while account is active</li>
                    <li>System data: Retained for service optimization</li>
                    <li>Payment records: Retained as required by law</li>
                    <li>Marketing data: Until you opt out</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar technologies to improve your experience, analyze usage, and provide
                    personalized content. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our service is not intended for children under 13. We do not knowingly collect personal information
                    from children under 13. If you believe we have collected such information, please contact us
                    immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">9. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting
                    the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about this privacy policy, contact us at:
                    <br />
                    Email: privacy@aquaflow.com
                    <br />
                    Phone: +1 (555) 123-4567
                    <br />
                    Address: 123 Water Street, Lagos, Nigeria
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
