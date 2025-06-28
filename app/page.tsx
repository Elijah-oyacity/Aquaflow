import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Droplets,
  Shield,
  Smartphone,
  Wrench,
  Building2,
  Home,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Zap,
  Award,
  Users,
  UserCheck,
  MapPin,
  Clock,
  DollarSign,
  Sparkles,
  TrendingUp,
  Globe,
  Leaf,
  Heart,
  Target,
  Play,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-xl"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-32 left-1/2 w-6 h-6 bg-blue-400/20 dark:bg-blue-400/30 rotate-45 rounded-sm"></div>
        <div className="absolute top-64 right-1/4 w-4 h-4 bg-purple-400/20 dark:bg-purple-400/30 rotate-12 rounded-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-cyan-400/20 dark:bg-cyan-400/30 rotate-45 rounded-sm"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl">
                <Droplets className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AquaFlow
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "#features", label: "Features" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#technicians", label: "For Technicians" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="font-medium hover:bg-accent">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge className="mb-8 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/30 px-6 py-3 text-sm font-medium border border-blue-200 dark:border-blue-500/30 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />🚀 Water-as-a-Service Revolution
            </Badge>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Pure Water.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                On Demand.
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary subscription service delivering purified, safe drinking water through on-site smart
              purification and bottling systems.{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                Say goodbye to plastic bottles forever.
              </span>
            </p>
          </div>

          <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/register">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center">
                  Start Your Subscription
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 border-2 border-muted-foreground/20 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group bg-transparent"
              >
                <Play className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up delay-800 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "1,200+", label: "Happy Customers" },
              { icon: Award, value: "99.9%", label: "Uptime" },
              { icon: Shield, value: "ISO", label: "Certified" },
              { icon: UserCheck, value: "24", label: "Expert Technicians" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-4 group-hover:scale-105 group-hover:bg-card/70 transition-all duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24 px-4 relative bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 backdrop-blur-sm">
              <Target className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Everything You Need</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete water purification solution with smart technology and full-service support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplets,
                title: "On-Site Purification",
                description:
                  "Advanced 5-7 stage filtration system installed at your location for maximum purity and safety",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
              },
              {
                icon: Zap,
                title: "Automated Bottling",
                description:
                  "Smart system automatically cleans, fills, and seals premium glass bottles with zero manual effort",
                gradient: "from-green-500 to-green-600",
                bgColor: "bg-green-50/80 dark:bg-green-950/30",
              },
              {
                icon: Smartphone,
                title: "Smart Monitoring",
                description:
                  "Real-time monitoring through our web app with quality testing and subscription management",
                gradient: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50/80 dark:bg-purple-950/30",
              },
              {
                icon: Wrench,
                title: "Expert Maintenance",
                description:
                  "Professional technicians handle installation, maintenance, and 24/7 support - all included",
                gradient: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50/80 dark:bg-orange-950/30",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${feature.bgColor}`}
              >
                <CardHeader className="pb-6">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 relative bg-background">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-50 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">How It Works</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From installation to pure water in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 dark:from-blue-500/30 via-green-200 dark:via-green-500/30 via-purple-200 dark:via-purple-500/30 to-orange-200 dark:to-orange-500/30 -translate-y-1/2 z-0"></div>

            {[
              {
                step: "1",
                title: "Professional Installation",
                description: "Our certified technician installs your purification system and bottling machine",
                color: "blue",
                icon: Wrench,
              },
              {
                step: "2",
                title: "Automated Process",
                description: "Simply place empty bottles - the system handles cleaning, purifying, and filling",
                color: "green",
                icon: Zap,
              },
              {
                step: "3",
                title: "Quality Monitoring",
                description: "Use test strips and our app to monitor water quality and system performance",
                color: "purple",
                icon: Shield,
              },
              {
                step: "4",
                title: "Ongoing Maintenance",
                description: "We proactively handle all maintenance, repairs, and filter replacements",
                color: "orange",
                icon: Heart,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group relative z-10">
                <div className="relative mb-8">
                  <div
                    className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300 relative z-10`}
                  >
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 rounded-full w-24 h-24 mx-auto blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                </div>

                <div
                  className={`bg-${item.color}-50/50 dark:bg-${item.color}-950/30 backdrop-blur-sm border border-${item.color}-200/50 dark:border-${item.color}-500/30 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}-600 dark:text-${item.color}-400 mx-auto mb-4`} />
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 relative bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 backdrop-blur-sm">
              <Globe className="w-4 h-4 mr-2" />
              Perfect For
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Tailored Solutions</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're a family or business, we have the perfect plan for your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: Home,
                title: "Households",
                description: "Safe, convenient, automated water for your entire family",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
                features: [
                  "Simple dashboard and controls",
                  "Family-focused support tools",
                  "Eliminate plastic waste completely",
                  "Always have clean water available",
                  "Child-safe operation",
                  "Compact design for homes",
                ],
              },
              {
                icon: Building2,
                title: "Businesses",
                description: "Enterprise-grade solutions with advanced analytics and compliance",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50/80 dark:bg-purple-950/30",
                features: [
                  "Advanced analytics and reporting",
                  "Multi-location management",
                  "Compliance documentation",
                  "Inventory tracking systems",
                  "Priority technical support",
                  "Custom integration options",
                ],
              },
            ].map((audience, index) => (
              <Card
                key={index}
                className={`p-12 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden ${audience.bgColor}`}
              >
                <CardHeader className="text-center pb-8 relative z-10">
                  <div
                    className={`bg-gradient-to-r ${audience.gradient} rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                  >
                    <audience.icon className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-4xl mb-6 font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {audience.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group/item">
                        <div className="bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-full p-1 mr-4 group-hover/item:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technicians Section */}
      <section id="technicians" className="py-24 px-4 relative bg-background">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-orange-50 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/30 backdrop-blur-sm">
              <UserCheck className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">For Technicians</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join Nigeria's leading water technology company and build a rewarding career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Why Work With AquaFlow?
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: DollarSign,
                      title: "Competitive Compensation",
                      description: "Attractive salary packages with performance bonuses and comprehensive benefits",
                    },
                    {
                      icon: MapPin,
                      title: "Flexible Scheduling",
                      description:
                        "Optimized routes and flexible work hours to maximize your efficiency and work-life balance",
                    },
                    {
                      icon: Award,
                      title: "Professional Growth",
                      description:
                        "Continuous training on latest water purification technologies and career advancement",
                    },
                    {
                      icon: Users,
                      title: "Supportive Team",
                      description: "Work with experienced professionals and comprehensive support system",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start space-x-6 group">
                        <div className="bg-orange-100 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-3 text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <Card className="p-12 border-0 shadow-2xl bg-orange-50/80 dark:bg-orange-950/30 relative overflow-hidden">
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <UserCheck className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-3xl mb-6 font-bold text-foreground">Technician Requirements</CardTitle>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-orange-600 dark:text-orange-400">What You'll Do:</h4>
                  <ul className="space-y-3">
                    {[
                      "Install water purification systems",
                      "Perform routine maintenance and repairs",
                      "Conduct water quality testing",
                      "Provide excellent customer service",
                      "Use our mobile app for job management",
                    ].map((task, index) => (
                      <li key={index} className="flex items-center group">
                        <div className="bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-full p-1 mr-3 group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xl mb-4 text-orange-600 dark:text-orange-400">Requirements:</h4>
                  <ul className="space-y-3">
                    {[
                      "Technical diploma or equivalent experience",
                      "Basic plumbing and electrical knowledge",
                      "Valid driver's license",
                      "Good communication skills",
                      "Smartphone for app usage",
                    ].map((req, index) => (
                      <li key={index} className="flex items-center group">
                        <div className="bg-orange-100 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 rounded-full p-1 mr-3 group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link href="/register?type=technician">
                    <Button className="w-full py-4 text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Apply as Technician
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technician Benefits */}
          <div className="bg-orange-50/80 dark:bg-orange-950/30 backdrop-blur-sm border border-orange-200/50 dark:border-orange-500/30 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Technician Benefits & Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile App Dashboard",
                  description: "Manage jobs, routes, and customer information with our intuitive mobile app",
                },
                {
                  icon: Clock,
                  title: "Flexible Hours",
                  description: "Set your own schedule and work-life balance with our flexible job assignment system",
                },
                {
                  icon: Award,
                  title: "Training & Certification",
                  description: "Comprehensive training program and ongoing certification in water technology",
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 relative bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-50 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30 backdrop-blur-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Simple, Fair Pricing</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no surprises. Everything you need is included in your subscription.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {[
              {
                icon: Home,
                title: "Household Plan",
                description: "Perfect for families and homes",
                price: "₦15,000",
                period: "/month",
                savings: "Save ₦30,000 annually",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
                features: [
                  "Up to 20L/day capacity",
                  "6 premium glass bottles included",
                  "Complete maintenance service",
                  "Dashboard access & monitoring",
                  "All filter replacements",
                  "24/7 customer support",
                ],
                annual: "₦150,000/year",
                buttonText: "Choose Household Plan",
              },
              {
                icon: Building2,
                title: "Business Plan",
                description: "For restaurants, offices & clinics",
                price: "₦35,000",
                period: "/month",
                savings: "Save ₦70,000 annually",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50/80 dark:bg-purple-950/30",
                features: [
                  "Up to 100L/day capacity",
                  "12+ bottles & inventory tracking",
                  "Advanced analytics & reporting",
                  "Multi-site management tools",
                  "Compliance documentation",
                  "Priority support & SLA",
                ],
                annual: "₦350,000/year",
                buttonText: "Choose Business Plan",
                popular: true,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative p-12 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden ${plan.bgColor} ${plan.popular ? "ring-2 ring-purple-500/50" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-sm font-bold shadow-lg border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`bg-gradient-to-r ${plan.gradient} rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                  >
                    <plan.icon className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl mb-4 font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-8">
                    <div className="text-6xl font-bold mb-3 text-foreground">{plan.price}</div>
                    <div className="text-muted-foreground text-xl mb-4">{plan.period}</div>
                    <div className="inline-block bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30 px-4 py-2 rounded-full text-sm font-medium">
                      {plan.savings}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group/item">
                        <div className="bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-full p-1 mr-4 group-hover/item:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <Button
                      className={`w-full py-4 text-lg bg-gradient-to-r ${plan.gradient} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border-0`}
                    >
                      {plan.buttonText}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">Annual billing: {plan.annual}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Benefits */}
          <div className="bg-green-50/80 dark:bg-green-950/30 backdrop-blur-sm border border-green-200/50 dark:border-green-500/30 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What's Included in Every Plan
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "No Hidden Charges",
                  description: "All service costs, filter swaps, and technician visits are completely included",
                  color: "green",
                },
                {
                  icon: Wrench,
                  title: "Expert Installation",
                  description: "Professional technician installation, maintenance, and emergency support",
                  color: "blue",
                },
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description: "Continuous monitoring, quality assurance, and performance guarantees",
                  color: "purple",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 relative bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-yellow-50 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Customer Stories
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">What Our Customers Say</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who've transformed their water experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Restaurant Owner",
                content:
                  "We've eliminated plastic waste and always have clean water on hand. The system is incredibly reliable and our customers love it. Best investment we've made!",
                rating: 5,
                avatar: "from-blue-400 to-purple-400",
              },
              {
                name: "Michael Chen",
                role: "Household Customer",
                content:
                  "Super convenient for my family, and I never worry about water quality. The app makes everything so easy to monitor. My kids love the fresh taste!",
                rating: 5,
                avatar: "from-green-400 to-blue-400",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Clinic Manager",
                content:
                  "The tech team is responsive and proactive. Love the service and the peace of mind it provides for our patients. Highly professional service!",
                rating: 5,
                avatar: "from-purple-400 to-pink-400",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden bg-card"
              >
                <CardContent className="pt-0 relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-500 dark:text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${testimonial.avatar} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    ></div>
                    <div>
                      <p className="font-bold text-lg text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative bg-muted/30">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the water revolution today. Our team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, text: "+1 (555) 123-4567", label: "Call us anytime", color: "blue" },
                  { icon: Mail, text: "support@aquaflow.com", label: "Email support", color: "green" },
                  { icon: MessageCircle, text: "WhatsApp Support", label: "Instant messaging", color: "purple" },
                ].map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div
                        className={`bg-gradient-to-r from-${contact.color}-500 to-${contact.color}-600 rounded-xl p-4 mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {contact.text}
                        </p>
                        <p className="text-muted-foreground">{contact.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Card className="p-12 border-0 shadow-2xl bg-blue-50/80 dark:bg-blue-950/30 relative overflow-hidden">
              <CardHeader className="pb-8 relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-foreground">Send us a message</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-border bg-background rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-300 hover:bg-accent/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">Email</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-border bg-background rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-300 hover:bg-accent/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">Message</label>
                    <textarea
                      className="w-full p-4 border border-border bg-background rounded-xl h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-300 hover:bg-accent/50 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Send Message
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  AquaFlow
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Revolutionary Water-as-a-Service platform providing pure, safe drinking water through smart technology
                and sustainable practices.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Eco-friendly • Sustainable • Zero Waste</span>
              </div>
            </div>

            {[
              {
                title: "Quick Links",
                links: [
                  { name: "Login", href: "/login" },
                  { name: "Register", href: "/register" },
                  { name: "Features", href: "#features" },
                  { name: "How It Works", href: "#how-it-works" },
                ],
              },
              {
                title: "For Professionals",
                links: [
                  { name: "Join as Technician", href: "/register?type=technician" },
                  { name: "Technician Benefits", href: "#technicians" },
                  { name: "Training Program", href: "#" },
                  { name: "Career Opportunities", href: "#" },
                ],
              },
              {
                title: "Support",
                links: [
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Contact Us", href: "#contact" },
                  { name: "24/7 Support", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-6 text-lg text-foreground">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; 2024 AquaFlow. All rights reserved. | Concept by Elijah Obominuru
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>Made in Nigeria</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-red-500 dark:text-red-400" />
                <span>Built with care</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
