import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: "🌐",
      title: "Domain Registration",
      description: "Register your business domain with global and local options."
    },
    {
      icon: "☁️",
      title: "Hosting Plans",
      description: "Fast, reliable hosting with free business email included."
    },
    {
      icon: "🤖",
      title: "AI Bot Subscriptions",
      description: "Automated customer support solutions for your business."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Elevate Your Digital Presence with Nova Stack
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Professional domain registration, hosting solutions, and AI-powered customer service bots to grow your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <div className="aspect-video rounded-md bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="text-6xl">Nova Stack</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-500 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl">🤖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to establish and grow your online presence in one place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    to="/services" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nova Stack?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional services with cutting-edge AI technology for a complete digital solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fast, reliable hosting services",
              "AI-powered customer support",
              "Competitive domain pricing",
              "Free business email with hosting",
              "Professional technical support",
              "Customizable AI solutions"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Join Nova Stack today and take your online presence to the next level with our comprehensive digital services.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}