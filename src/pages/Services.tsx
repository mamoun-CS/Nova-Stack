import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Bot, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive digital solutions to establish and grow your online presence
          </p>
        </div>
      </section>

      {/* Domain Registration Section */}
      <section id="domains" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Domain Registration</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Secure your online identity with our domain registration services. We offer a wide range of domain extensions to suit your business needs.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">.com and other global domains</p>
                    <p className="text-gray-600">$30/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">.ps domains</p>
                    <p className="text-gray-600">$40/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Premium .ps domains</p>
                    <p className="text-gray-600">$120–600/year</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/pricing">View Domain Pricing</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="text-5xl mb-4">yourbrand.com</div>
                      <div className="text-xl text-gray-500">Secure your online identity</div>
                      <div className="absolute -right-12 -top-12 text-6xl">🌐</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <section id="hosting" className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Hosting Plans</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Reliable, fast, and secure hosting solutions for your website. All our hosting plans come with a free business email.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">20GB Hosting</p>
                    <p className="text-gray-600">$36 first year, $72/year renewal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">30GB Hosting</p>
                    <p className="text-gray-600">$48 first year, $96/year renewal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">50GB Hosting</p>
                    <p className="text-gray-600">$72 first year, $132/year renewal</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/pricing">View Hosting Plans</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">☁️</div>
                        <div className="text-xl font-medium">Fast & Reliable</div>
                        <div className="text-gray-500">Free business email included</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Bot Subscriptions Section */}
      <section id="ai-bots" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold">AI Bot Subscriptions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Enhance customer service with our AI-powered chatbots. Automate responses and provide 24/7 support for your customers.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Basic Plan</p>
                    <p className="text-gray-600">Auto-reply on Messenger/WhatsApp, rule-based</p>
                    <p className="text-blue-600">$24/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Advanced Plan</p>
                    <p className="text-gray-600">Smart replies, integrations with Gmail, Notion, Google Sheets</p>
                    <p className="text-blue-600">$48/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Enterprise Plan</p>
                    <p className="text-gray-600">Custom API, customer-trained bots, advanced logic</p>
                    <p className="text-blue-600">$96/month</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/ai-bots">Explore AI Solutions</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="flex flex-col items-center">
                        <div className="text-5xl mb-4">🤖</div>
                        <div className="text-xl font-medium">24/7 Support</div>
                        <div className="text-gray-500">AI-powered customer service</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss how Nova Stack can help your business grow online.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}