import sfwLogo from "@/assets/sfw-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={sfwLogo} alt="SFW Technologies" className="h-10 w-auto" />
            <p className="text-sm text-white/70">
              Building the future of sales, matching, and financial management with AI-powered solutions.
            </p>
          </div>

          {/* Softworks Link - Right Side */}
          <div className="md:text-right">
            <a 
              href="https://softworkstech.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl md:text-2xl font-semibold text-white hover:text-white/80 transition-colors underline"
            >
              Visit Softworks Technologies
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2025 SFW Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
