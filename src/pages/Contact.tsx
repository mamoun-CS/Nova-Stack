import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, support, or to get started with Nova Stack services.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Need a custom quote? Our team is ready to help you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+972598897496</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">novastack25@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our complete range of digital services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">Domain Registration</h3>
                <p className="text-gray-600 mb-4">
                  Secure your online identity with our domain registration services.
                </p>
                <Button asChild variant="outline">
                  <Link to="/services#domains">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-2">Hosting Plans</h3>
                <p className="text-gray-600 mb-4">
                  Fast, reliable hosting with free business email included.
                </p>
                <Button asChild variant="outline">
                  <Link to="/services#hosting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2">AI Bot Subscriptions</h3>
                <p className="text-gray-600 mb-4">
                  Enhance customer service with AI-powered automated responses.
                </p>
                <Button asChild variant="outline">
                  <Link to="/ai-bots">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 mb-4">
              Nova Stack headquarters is located in the heart of the city.
            </p>
            <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
              <div className="text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}