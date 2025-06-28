import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, HelpCircle, FileText, Send } from "lucide-react"

export default function HouseholdSupportPage() {
  return (
    <div className="space-y-6">
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle>Phone Support</CardTitle>
            <CardDescription>Speak directly with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-600 mb-4">
              Mon-Fri: 8AM-8PM
              <br />
              Sat-Sun: 9AM-5PM
            </p>
            <Button className="w-full">Call Now</Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Get instant help through chat</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Average response time:
              <br />
              2-3 minutes
            </p>
            <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle>Email Support</CardTitle>
            <CardDescription>Send us a detailed message</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Response within:
              <br />
              24 hours
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Send Email
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Request Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
            Submit Support Request
          </CardTitle>
          <CardDescription>Describe your issue and we'll get back to you quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Issue Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="maintenance">Maintenance Request</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description of your issue" />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide detailed information about your issue..."
                className="min-h-[120px]"
              />
            </div>

            <Button className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-gray-600" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                question: "How often should I replace the water bottles?",
                answer:
                  "Our system automatically cleans and refills bottles. You don't need to replace them unless they're damaged.",
              },
              {
                question: "What should I do if the water tastes different?",
                answer:
                  "Contact support immediately. This could indicate a filter needs replacement or system maintenance is required.",
              },
              {
                question: "How do I schedule maintenance?",
                answer:
                  "You can schedule maintenance through your dashboard, call our support line, or use the maintenance request form.",
              },
              {
                question: "Is the water safe for children and elderly?",
                answer:
                  "Yes, our purification system removes all harmful contaminants and is safe for all family members.",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
