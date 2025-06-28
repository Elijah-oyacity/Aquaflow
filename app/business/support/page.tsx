"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HelpCircle, Phone, Mail, Clock, Search, Plus, FileText, Video, Users } from "lucide-react"

const supportTickets = [
  {
    id: "SUP-001",
    subject: "Water pressure issue at Downtown Office",
    status: "Open",
    priority: "High",
    category: "Technical",
    created: "2024-01-20",
    lastUpdate: "2024-01-21",
    assignedTo: "Technical Support Team",
  },
  {
    id: "SUP-002",
    subject: "Billing inquiry for January invoice",
    status: "In Progress",
    priority: "Medium",
    category: "Billing",
    created: "2024-01-18",
    lastUpdate: "2024-01-20",
    assignedTo: "Billing Support",
  },
  {
    id: "SUP-003",
    subject: "Request for additional location setup",
    status: "Resolved",
    priority: "Low",
    category: "Account",
    created: "2024-01-15",
    lastUpdate: "2024-01-19",
    assignedTo: "Account Manager",
  },
]

const faqItems = [
  {
    question: "How do I add a new location to my business account?",
    answer:
      'You can add new locations through the Locations page in your dashboard. Click "Add Location" and fill in the required details including address, expected usage, and system requirements.',
    category: "Account Management",
  },
  {
    question: "What should I do if I notice unusual water usage patterns?",
    answer:
      "Monitor your usage analytics dashboard for any anomalies. If you notice significant spikes, check for leaks or system malfunctions. Contact our technical support team if the issue persists.",
    category: "Technical",
  },
  {
    question: "How often should maintenance be performed on water systems?",
    answer:
      "We recommend quarterly inspections for most systems, with filter replacements every 3-6 months depending on usage. Our maintenance team will create a custom schedule based on your specific needs.",
    category: "Maintenance",
  },
  {
    question: "Can I upgrade or downgrade my subscription plan?",
    answer:
      "Yes, you can change your subscription plan at any time through the Subscription page. Changes will be prorated and reflected in your next billing cycle.",
    category: "Billing",
  },
]

const contactOptions = [
  {
    title: "Technical Support",
    description: "Get help with system issues, maintenance, and technical questions",
    icon: HelpCircle,
    contact: "tech-support@aquaflow.com",
    phone: "1-800-AQUA-TECH",
    hours: "24/7 Emergency Support",
  },
  {
    title: "Account Management",
    description: "Assistance with billing, subscriptions, and account settings",
    icon: Users,
    contact: "accounts@aquaflow.com",
    phone: "1-800-AQUA-ACCT",
    hours: "Mon-Fri 8AM-6PM EST",
  },
  {
    title: "Sales & Upgrades",
    description: "Information about new features, upgrades, and expansion",
    icon: Phone,
    contact: "sales@aquaflow.com",
    phone: "1-800-AQUA-SALE",
    hours: "Mon-Fri 9AM-5PM EST",
  },
]

export default function BusinessSupportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFAQ = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return <Badge variant="destructive">Open</Badge>
      case "In Progress":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            In Progress
          </Badge>
        )
      case "Resolved":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Medium
          </Badge>
        )
      case "Low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-1">Get help and support for your AquaFlow business account</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <option.icon className="h-5 w-5" />
                {option.title}
              </CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                {option.contact}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-gray-400" />
                {option.phone}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-400" />
                {option.hours}
              </div>
              <Button className="w-full mt-4">Contact Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="contact">Contact Form</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Support Tickets</CardTitle>
              <CardDescription>Track and manage your support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Update</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {supportTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.category}</TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>{ticket.lastUpdate}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Update
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
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about AquaFlow services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="All">All Categories</option>
                  <option value="Account Management">Account Management</option>
                  <option value="Technical">Technical</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Billing">Billing</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredFAQ.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {item.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Documentation
                </CardTitle>
                <CardDescription>Comprehensive guides and documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  User Manual
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  API Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Best Practices Guide
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Troubleshooting Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Video Tutorials
                </CardTitle>
                <CardDescription>Step-by-step video guides</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Getting Started
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Dashboard Overview
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Maintenance Scheduling
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Analytics & Reporting
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Send us a message and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Brief description of your issue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Technical Support</option>
                      <option>Billing Inquiry</option>
                      <option>Account Management</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Priority</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Affected Location</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>All Locations</option>
                      <option>Downtown Office Complex</option>
                      <option>Manufacturing Plant A</option>
                      <option>Retail Store Network</option>
                      <option>Warehouse Facility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    placeholder="Please provide detailed information about your issue or question..."
                    rows={6}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Submit Ticket</Button>
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
