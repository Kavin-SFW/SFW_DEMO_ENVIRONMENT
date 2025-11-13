import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sfwLogo from "@/assets/sfw-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 flex-1">
            {/* Brand */}
            <div className="space-y-4">
              <img src={sfwLogo} alt="SFW Technologies" className="h-10 w-auto" />
              <p className="text-sm text-white/70">
                Building the future of sales, matching, and financial management with AI-powered solutions.
              </p>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild className="text-white/70 hover:text-white hover:bg-white/10">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://sfwmatchingtool.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    SFW Matching Tool
                  </a>
                </li>
                <li>
                  <a href="https://sfwtechnologiesrag.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    SFW AI Sales Bot
                  </a>
                </li>
                <li>
                  <a href="https://qxxcbwpmeasz5qsuscyfnt.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    Financial Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Right Corner */}
          <div className="space-y-4 lg:ml-auto">
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <p className="text-sm text-white/70">
              Get the latest product updates and news.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button type="submit" className="w-full bg-white text-purple-900 hover:bg-white/90 shadow-lg">
                Subscribe
              </Button>
            </form>
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
