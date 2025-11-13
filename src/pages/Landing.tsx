import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const products = [
    {
      name: "SFW Matching Tool",
      description: "Smart candidate ↔ role matching using hybrid AI algorithms for optimal recruitment outcomes.",
      features: [
        "AI-powered candidate-role matching",
        "Real-time compatibility scoring",
        "Advanced filtering and search capabilities",
      ],
      demoUrl: "https://sfwmatchingtool.vercel.app/",
    },
    {
      name: "SFW AI Sales Bot",
      description: "Automated sales outreach and intelligent lead scoring to accelerate your sales pipeline.",
      features: [
        "Automated lead qualification",
        "Conversational AI for customer engagement",
        "Integration with CRM systems",
      ],
      demoUrl: "https://sfwtechnologiesrag.vercel.app/",
    },
    {
      name: "Executive Financial Management Dashboard",
      description: "Real-time finance visibility for executives with comprehensive analytics and insights.",
      features: [
        "Live financial metrics and KPIs",
        "Interactive data visualizations",
        "Custom report generation",
      ],
      demoUrl: "https://qxxcbwpmeasz5qsuscyfnt.streamlit.app/",
    },
  ];


  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Products Section */}
      <section id="demos" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Try Our Live Demos
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Experience our products in action. Click to open any demo in a new tab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.name} {...product} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Figma Section */}
      <section id="figma" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              Design System & Figma Files
            </h2>
            <p className="text-lg text-white/80">
              Access our complete design system with editable components, design tokens, 
              icons, and interactive prototypes. Everything you need to design and build 
              with SFW's design language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-purple-900 hover:bg-white/90 shadow-lg">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Open in Figma
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                <a href="#">View Prototype</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              Product Walkthroughs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Watch detailed demos and tutorials to get the most out of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all bg-white/10 backdrop-blur-md border-white/20">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="relative z-10 h-16 w-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-900 border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">
                    Demo Walkthrough {i}
                  </h3>
                  <p className="text-sm text-white/70">
                    Learn how to get started and maximize your results.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
