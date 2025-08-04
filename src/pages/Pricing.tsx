import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  const domainPlans = [
    {
      name: "Standard Domains",
      description: "Global domain extensions for your business",
      price: "$30",
      period: "/year",
      features: [".com", ".net", ".org", ".info"],
      popular: false
    },
    {
      name: ".ps Domains",
      description: "Local Palestine domain extensions",
      price: "$40",
      period: "/year",
      features: [".ps", "Quick registration", "Local presence"],
      popular: true
    },
    {
      name: "Premium .ps",
      description: "Premium local domain names",
      price: "$120-600",
      period: "/year",
      features: ["Premium names", "Short domains", "High-value keywords"],
      popular: false
    }
  ];

  const hostingPlans = [
    {
      name: "Basic",
      description: "For personal sites and small businesses",
      firstYearPrice: "$36",
      renewalPrice: "$72",
      storage: "20GB",
      features: ["Free business email", "99.9% uptime guarantee", "24/7 support", "5 databases"],
      notIncluded: ["Premium SSL", "Daily backups"],
      popular: false
    },
    {
      name: "Standard",
      description: "For growing businesses",
      firstYearPrice: "$48",
      renewalPrice: "$96",
      storage: "30GB",
      features: ["Free business email", "99.9% uptime guarantee", "24/7 support", "10 databases", "Premium SSL"],
      notIncluded: ["Daily backups"],
      popular: true
    },
    {
      name: "Professional",
      description: "For larger businesses",
      firstYearPrice: "$72",
      renewalPrice: "$132",
      storage: "50GB",
      features: ["Free business email", "99.9% uptime guarantee", "24/7 support", "Unlimited databases", "Premium SSL", "Daily backups"],
      notIncluded: [],
      popular: false
    }
  ];

  const aiPlans = [
    {
      name: "Basic",
      description: "Simple rule-based bots",
      price: "$24",
      period: "/month",
      features: ["Auto-reply on Messenger/WhatsApp", "Rule-based responses", "Business hours configuration", "Basic analytics"],
      popular: false
    },
    {
      name: "Advanced",
      description: "Smart AI with integrations",
      price: "$48",
      period: "/month",
      features: ["Everything in Basic", "Smart AI-powered replies", "Gmail integration", "Notion integration", "Google Sheets integration", "Advanced analytics"],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom AI solutions",
      price: "$96",
      period: "/month",
      features: ["Everything in Advanced", "Custom API", "Customer-trained bots", "Advanced logic", "Dedicated support", "White-labeling"],
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Choose the right plans for your business needs with our competitive pricing
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="hosting" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="domains">Domain Registration</TabsTrigger>
              <TabsTrigger value="hosting">Hosting Plans</TabsTrigger>
              <TabsTrigger value="ai">AI Bot Subscriptions</TabsTrigger>
            </TabsList>

            {/* Domain Registration Pricing */}
            <TabsContent value="domains">
              <div className="grid md:grid-cols-3 gap-6">
                {domainPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`flex flex-col ${
                      plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to="/contact">Register Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Hosting Plans Pricing */}
            <TabsContent value="hosting">
              <div className="grid md:grid-cols-3 gap-6">
                {hostingPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`flex flex-col ${
                      plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <div>
                          <span className="text-3xl font-bold">{plan.firstYearPrice}</span>
                          <span className="text-gray-500"> first year</span>
                        </div>
                        <div className="text-gray-500">
                          {plan.renewalPrice}/year renewal
                        </div>
                        <div className="text-blue-600 font-medium mt-2">
                          {plan.storage} Storage
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="font-medium mb-2">Included features:</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {plan.notIncluded.length > 0 && (
                        <div className="mt-4">
                          <p className="font-medium mb-2 text-gray-500">Not included:</p>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-500">
                                <X className="h-5 w-5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* AI Bot Subscriptions Pricing */}
            <TabsContent value="ai">
              <div className="grid md:grid-cols-3 gap-6">
                {aiPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`flex flex-col ${
                      plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to="/contact">Subscribe Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Do domain prices include VAT?",
                a: "All listed prices are exclusive of VAT. The applicable VAT will be added during checkout."
              },
              {
                q: "Can I transfer my existing domain to Nova Stack?",
                a: "Yes, we offer free domain transfer services. Contact our support team to assist you with the process."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, PayPal, and bank transfers. For annual subscriptions, we also offer payment plans."
              },
              {
                q: "Can I upgrade my hosting plan later?",
                a: "Yes, you can upgrade your hosting plan at any time. The price difference will be prorated."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee for hosting services. Domain registrations are non-refundable."
              },
              {
                q: "How many users can use the AI bot?",
                a: "All AI bot plans include unlimited users. The difference between plans is in features and capabilities."
              },
            ].map((faq, index) => (
              <Card key={index} className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Quote?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our team for enterprise solutions or custom packages tailored to your specific requirements.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}