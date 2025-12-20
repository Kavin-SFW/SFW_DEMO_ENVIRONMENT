import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

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
      demoUrl: "https://sfwexecutivedashboard.streamlit.app/",
    },
    {
      name: "SFW Zerra",
      description: "A powerful solution designed to streamline operations and enhance productivity.",
      features: [
        "Modern user interface",
        "Efficient workflow management",
        "Advanced functionality",
      ],
      demoUrl: "https://zerra-2025.vercel.app/",
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

      <Footer />
    </div>
  );
};

export default Landing;
