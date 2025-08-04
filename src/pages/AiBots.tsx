import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, MessageSquare, Check, Zap, Server, Users } from "lucide-react";

export default function AiBots() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Automated Messaging",
      description: "24/7 customer support through AI-powered messaging on WhatsApp and Messenger."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Smart Replies",
      description: "Contextually relevant responses that learn from customer interactions."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Third-party Integrations",
      description: "Seamlessly connect with Gmail, Notion, Google Sheets, and other tools."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Experience",
      description: "Create customer profiles and tailor interactions based on history."
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Bots for Your Business</h1>
              <p className="text-lg mb-8 text-blue-100">
                Enhance customer support and automate responses with our intelligent AI bot solutions.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="relative">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3 text-gray-800">
                        <p>Hello! I'm the Nova Stack AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="bg-blue-600 rounded-lg p-3 text-white">
                        <p>I need information about your AI bot features.</p>
                      </div>
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600">U</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI bots provide powerful features to enhance your customer support experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-blue-100">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our AI bot subscription plans to find the right fit for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-4">
                {/* Header */}
                <div className="p-4"></div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Basic</h3>
                  <p className="text-blue-600 font-bold">$24/month</p>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Advanced</h3>
                  <p className="text-blue-600 font-bold">$48/month</p>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Enterprise</h3>
                  <p className="text-blue-600 font-bold">$96/month</p>
                </div>

                {/* Feature Rows */}
                {[
                  { name: "Auto-reply Functionality", basic: true, advanced: true, enterprise: true },
                  { name: "WhatsApp Integration", basic: true, advanced: true, enterprise: true },
                  { name: "Messenger Integration", basic: true, advanced: true, enterprise: true },
                  { name: "Rule-based Responses", basic: true, advanced: true, enterprise: true },
                  { name: "Business Hours Config", basic: true, advanced: true, enterprise: true },
                  { name: "Basic Analytics", basic: true, advanced: true, enterprise: true },
                  { name: "Smart AI Replies", basic: false, advanced: true, enterprise: true },
                  { name: "Gmail Integration", basic: false, advanced: true, enterprise: true },
                  { name: "Notion Integration", basic: false, advanced: true, enterprise: true },
                  { name: "Google Sheets Integration", basic: false, advanced: true, enterprise: true },
                  { name: "Advanced Analytics", basic: false, advanced: true, enterprise: true },
                  { name: "Custom API Access", basic: false, advanced: false, enterprise: true },
                  { name: "Customer-trained Models", basic: false, advanced: false, enterprise: true },
                  { name: "Advanced Logic", basic: false, advanced: false, enterprise: true },
                  { name: "Dedicated Support", basic: false, advanced: false, enterprise: true },
                  { name: "White-labeling", basic: false, advanced: false, enterprise: true },
                ].map((feature, index) => (
                  <React.Fragment key={index}>
                    <div className="p-4 border-t">{feature.name}</div>
                    <div className="p-4 border-t text-center">
                      {feature.basic ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>}
                    </div>
                    <div className="p-4 border-t text-center">
                      {feature.advanced ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>}
                    </div>
                    <div className="p-4 border-t text-center">
                      {feature.enterprise ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>}
                    </div>
                  </React.Fragment>
                ))}

                {/* CTA Buttons */}
                <div className="p-4 border-t"></div>
                <div className="p-4 border-t text-center">
                  <Button asChild>
                    <Link to="/contact">Choose Basic</Link>
                  </Button>
                </div>
                <div className="p-4 border-t text-center">
                  <Button asChild>
                    <Link to="/contact">Choose Advanced</Link>
                  </Button>
                </div>
                <div className="p-4 border-t text-center">
                  <Button asChild>
                    <Link to="/contact">Choose Enterprise</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Bot Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our AI bots can transform your customer interactions
            </p>
          </div>

          <Tabs defaultValue="customer-service" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
              <TabsTrigger value="lead-gen">Lead Generation</TabsTrigger>
              <TabsTrigger value="automation">Process Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="customer-service">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">24/7 Customer Support</h3>
                      <p className="text-gray-600 mb-4">
                        Provide round-the-clock support to your customers with our AI bots. They can handle common questions, troubleshoot issues, and escalate complex problems to your human team when necessary.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Instant responses to common questions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Multi-language support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Ticket creation and tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Seamless handoff to human agents</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-4">💬</div>
                          <p className="text-lg font-medium">Customer Support</p>
                          <p className="text-gray-500">Always available, always helpful</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lead-gen">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Convert Visitors to Customers</h3>
                      <p className="text-gray-600 mb-4">
                        Our AI bots can engage with website visitors, qualify leads, and guide potential customers through your sales funnel, increasing conversion rates.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Proactive visitor engagement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Qualification questions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Product recommendations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Appointment scheduling</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-4">📈</div>
                          <p className="text-lg font-medium">Lead Generation</p>
                          <p className="text-gray-500">Convert more visitors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Streamline Operations</h3>
                      <p className="text-gray-600 mb-4">
                        Automate repetitive tasks and internal processes with our AI bots to improve efficiency and reduce operational costs.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Form filling and data entry</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Appointment reminders</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Invoice generation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Internal notifications</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-4">⚙️</div>
                          <p className="text-lg font-medium">Process Automation</p>
                          <p className="text-gray-500">Do more with less</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Customer Service?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our AI bots can transform your business operations.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}