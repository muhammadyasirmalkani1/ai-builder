
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Compass, Image, Layout, Sparkles, Star, Rocket, MessageSquare } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-violet-500" />,
      title: "AI-Powered Design",
      description: "Our AI analyzes top websites to create beautiful, conversion-optimized designs just for you."
    },
    {
      icon: <Layout className="h-10 w-10 text-violet-500" />,
      title: "Custom Templates",
      description: "Choose from dozens of industry-specific templates that adapt to your brand instantly."
    },
    {
      icon: <Image className="h-10 w-10 text-violet-500" />,
      title: "Content Generation",
      description: "Automatically generate engaging text and find perfect imagery for your website."
    },
    {
      icon: <Code className="h-10 w-10 text-violet-500" />,
      title: "No Coding Required",
      description: "Build a professional website with zero technical skills in just minutes."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Describe your website",
      description: "Tell our AI what kind of website you need, your industry, and style preferences."
    },
    {
      number: "02",
      title: "Review AI suggestions",
      description: "Our AI generates multiple designs and content options based on your needs."
    },
    {
      number: "03",
      title: "Customize as needed",
      description: "Make any adjustments or add your personal touch with our easy editor."
    },
    {
      number: "04",
      title: "Publish instantly",
      description: "Your professional website goes live with one click, complete with hosting."
    }
  ];

  const testimonials = [
    {
      quote: "I launched my business website in under 30 minutes. What would have taken me weeks was done before my coffee got cold!",
      name: "Sarah J.",
      role: "Small Business Owner"
    },
    {
      quote: "As someone with zero design skills, I was amazed at how professional my portfolio looks. The AI somehow knew exactly what I wanted.",
      name: "Marcus T.",
      role: "Freelance Photographer"
    },
    {
      quote: "We needed to quickly launch a website for our new product. AI Builder delivered a site that exceeded our expectations in just minutes.",
      name: "Jamie L.",
      role: "Marketing Director"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "1 website",
        "Basic AI templates",
        "Content generation (up to 5 pages)",
        "Standard hosting",
        "Custom domain"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For businesses and growing projects",
      features: [
        "5 websites",
        "Advanced AI templates",
        "Unlimited content generation",
        "Premium hosting",
        "SEO optimization",
        "Analytics dashboard"
      ],
      cta: "Try Professional",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For larger organizations with complex needs",
      features: [
        "Unlimited websites",
        "Custom AI training",
        "Advanced integrations",
        "Dedicated hosting",
        "Priority support",
        "Team collaboration tools"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const examples = [
    {
      title: "Business",
      description: "Professional sites for companies of all sizes",
      imageBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
      icon: <Rocket className="h-10 w-10 text-white" />
    },
    {
      title: "E-commerce",
      description: "Beautiful stores that drive sales",
      imageBg: "bg-gradient-to-br from-green-400 to-teal-600",
      icon: <Compass className="h-10 w-10 text-white" />
    },
    {
      title: "Portfolio",
      description: "Showcase your work with stunning layouts",
      imageBg: "bg-gradient-to-br from-amber-400 to-orange-600",
      icon: <Star className="h-10 w-10 text-white" />
    },
    {
      title: "Blog",
      description: "Engaging content platforms with AI-generated posts",
      imageBg: "bg-gradient-to-br from-pink-400 to-rose-600",
      icon: <MessageSquare className="h-10 w-10 text-white" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="relative z-10 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-violet-600 mr-2" />
              <span className="font-bold text-xl">AI Builder</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 transition-colors">How It Works</a>
              <a href="#examples" className="text-gray-600 hover:text-violet-600 transition-colors">Examples</a>
              <a href="#pricing" className="text-gray-600 hover:text-violet-600 transition-colors">Pricing</a>
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline">Log In</Button>
              <Button>Sign Up Free</Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col gap-4">
                <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 transition-colors">How It Works</a>
                <a href="#examples" className="text-gray-600 hover:text-violet-600 transition-colors">Examples</a>
                <a href="#pricing" className="text-gray-600 hover:text-violet-600 transition-colors">Pricing</a>
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" className="w-full">Log In</Button>
                  <Button className="w-full">Sign Up Free</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white opacity-80"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                  <span className="block">AI Built My Website</span>
                  <span className="block text-violet-600">in Minutes!</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Let our artificial intelligence create a stunning, conversion-optimized website for your business—no coding or design skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                    Build My Website <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    See Examples
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-500">No credit card required • Free 14-day trial</p>
              </div>
              <div className="relative h-72 sm:h-80 md:h-[500px]">
                <div className="absolute top-0 right-0 md:top-12 md:right-10 w-4/5 h-4/5 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl shadow-xl transform rotate-3"></div>
                <div className="absolute top-10 left-0 md:top-24 md:left-0 w-4/5 h-4/5 bg-white rounded-2xl shadow-xl p-4 transform -rotate-2">
                  <div className="w-full h-8 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="h-6 w-1/2 bg-gray-100 rounded-md ml-2"></div>
                  </div>
                  <div className="h-16 bg-gray-100 rounded-md mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-violet-600">10,000+</p>
                <p className="text-gray-600">Websites Built</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-violet-600">3 minutes</p>
                <p className="text-gray-600">Average Build Time</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-violet-600">98%</p>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-violet-600">24/7</p>
                <p className="text-gray-600">AI Assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Our AI Builds Amazing Websites</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful artificial intelligence that understands design principles, user experience, and your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Build Your Website in 4 Simple Steps</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI streamlines the entire website creation process so you can focus on your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl relative">
                  <div className="text-5xl font-bold text-gray-100 absolute -top-6 -left-2">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Website Types Our AI Can Build</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whatever your industry or needs, our AI can create the perfect website for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="relative group">
                  <div className={`${example.imageBg} h-80 rounded-xl flex items-center justify-center`}>
                    {example.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6 m-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Thousands of users are building amazing websites with our AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that works best for your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border ${plan.highlighted ? 'border-violet-400 ring-2 ring-violet-200' : 'border-gray-200'}`}
                >
                  <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white' : ''}`}>
                    <h3 className={`text-2xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                      <span className={`text-xl ${plan.highlighted ? 'text-violet-100' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>
                    <p className={`mt-2 ${plan.highlighted ? 'text-violet-100' : 'text-gray-600'}`}>{plan.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.highlighted ? 'text-violet-500' : 'text-gray-500'}`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-br from-violet-500 to-purple-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Build Your Website with AI?</h2>
              <p className="text-xl text-violet-100 mb-10">
                Join thousands of businesses who have already transformed their online presence with our AI website builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start My Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-violet-700">
                  Watch Demo
                </Button>
              </div>
              <p className="mt-6 text-violet-200">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-violet-400 mr-2" />
                <span className="font-bold text-white text-lg">AI Builder</span>
              </div>
              <p className="mb-4">AI-powered website builder that creates stunning websites in minutes.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center">© 2025 Muhammad Yasir Malkani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
