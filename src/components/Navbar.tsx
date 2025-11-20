import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import sfwLogo from "@/assets/sfw-logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideoDialogOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay may be blocked by browser policy, user can click play
        console.log("Autoplay blocked:", error);
      });
    } else if (!isVideoDialogOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVideoDialogOpen]);

  const productLinks = [
    { name: "SFW Matching Tool", url: "https://sfwmatchingtool.vercel.app/" },
    { name: "SFW AI Sales Bot", url: "https://sfwtechnologiesrag.vercel.app/" },
    { name: "Executive Financial Management Dashboard", url: "https://sfwexecutivedashboard.streamlit.app/" },
  ];

  const applicationLinks = [
    { name: "Employee Onboarding App", url: "https://employee-onboarding-portal-production.up.railway.app/" },
    { name: "Project Management Software", url: "https://gcc-ui-production.up.railway.app/" },
    { name: "Learning management System", url: "https://lms-ui-production.up.railway.app/" },
    { name: "Clinic Management System", url: "https://smartclinic.lovable.app" },
  ];

  const figmaLinks = [
    { name: "Resolve Field Service", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=0%3A1&node-id=3-6&p=f&viewport=185%2C231%2C0.11&t=jeAarDPWJSN3VTlz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2" },
    { name: "Digital Transformation", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=4%3A13&node-id=4-36&viewport=4%2C367%2C0.05&t=ZJA8FdCBU62taAqx-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4%3A14" },
    { name: "Kiosk System", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=5%3A53&node-id=5-54&p=f&viewport=40%2C428%2C0.07&t=rHj19TtFcQLylHHA-1&scaling=contain&content-scaling=fixed" },
    { name: "Token Management System", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=5%3A69&node-id=5-74&p=f&viewport=183%2C150%2C0.33&t=ekXxESz65XeT6frH-1&scaling=contain&content-scaling=fixed&starting-point-node-id=5%3A70" },
    { name: "Appointment Booking System", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=5%3A91&node-id=5-95&viewport=202%2C141%2C0.28&t=IcFr4dcam8aU0Xet-1&scaling=contain&content-scaling=fixed&starting-point-node-id=5%3A92" },
    { name: "SalesBot-AI-Conversational-Sales-Analytics-Platform", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=29%3A9351&node-id=29-9360&p=f&viewport=427%2C325%2C0.15&t=XAR5ssidOmpwOqH3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A9352" },
    { name: "Gen-AI-SFW-Matching-Tool", url: "https://www.figma.com/proto/dP4FH4XkIzH86DRCXpb5pF/Case-study-Final?page-id=29%3A9325&node-id=29-9334&viewport=40%2C446%2C0.06&t=V1lOI4s9TkbGhJsv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A9326" },
  ];

  const caseStudyLinks = [
    { name: "Field Service Management", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/ES3OjFvorX9NnWKMHvPRV6cByHn5TY5TOXU6EQMzgRC9Kg" },
    { name: "Digital Transformation", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EUNQgoiEGrxNro8KNoNO8SQBQWL8ywkV_TGeHF9nHP_A5A" },
    { name: "Kiosk System", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/ETUQAWH8MRtBjJol4tTy7CwBtPrOtub0qa5Lbl2W9Vap5Q" },
    { name: "Application Booking System", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EeOn-5ax-tFEujzBZkEuRpUBNJI6rf8cEUKmaFnr46zJ4A" },
    { name: "TMS", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EWLA3HJzLVJKsnwvFO5XRakBufrvyFLsaEAg9HclRLRTjg" },
    { name: "SFW AI -Management Dashboard", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EfVbjt19aoxDr3qQQ1O2uEcBSi2UGRDs8jV59Kz-a0XQcg" },
    { name: "SFW Matching Tool", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EVvZVMpfuN9JvXPu2eDWOSABXo4ZE42F3utMyHAoPQIERg" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={sfwLogo} alt="SFW" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {productLinks.map((product) => (
                  <DropdownMenuItem key={product.name} asChild>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {product.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Applications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Applications <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {applicationLinks.length > 0 ? (
                  applicationLinks.map((application) => (
                    <DropdownMenuItem key={application.name} asChild>
                      <a
                        href={application.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        {application.name}
                      </a>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem disabled className="text-gray-400">
                    Coming soon
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Case Studies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Case Studies <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {caseStudyLinks.map((caseStudy) => (
                  <DropdownMenuItem key={caseStudy.name} asChild>
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {caseStudy.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Figma Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Figma <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {figmaLinks.map((figma) => (
                  <DropdownMenuItem key={figma.name} asChild>
                    <a
                      href={figma.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {figma.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Video Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Video <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                <DropdownMenuItem
                  onClick={() => setIsVideoDialogOpen(true)}
                  className="cursor-pointer"
                >
                  SFW Video
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Buttons */}
            <Link to="/login">
              <Button size="sm" className="bg-dodger-blue-500 text-white hover:bg-dodger-blue-600 shadow-lg">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 bg-white rounded-lg mt-2 px-4 shadow-lg animate-fade-in border border-gray-200">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase">Products</p>
              {productLinks.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {product.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase">Applications</p>
              {applicationLinks.length > 0 ? (
                applicationLinks.map((application) => (
                  <a
                    key={application.name}
                    href={application.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {application.name}
                  </a>
                ))
              ) : (
                <p className="block py-2 text-sm text-gray-400">Coming soon</p>
              )}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">Case Studies</p>
                {caseStudyLinks.map((caseStudy) => (
                  <a
                    key={caseStudy.name}
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {caseStudy.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">Figma</p>
                {figmaLinks.map((figma) => (
                  <a
                    key={figma.name}
                    href={figma.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {figma.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">Video</p>
                <button
                  onClick={() => {
                    setIsVideoDialogOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors pl-4 w-full text-left"
                >
                  SFW Video
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link to="/login" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-dodger-blue-500 text-white hover:bg-dodger-blue-600 shadow-lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          <div className="relative w-full aspect-video">
            <video
              ref={videoRef}
              src="/SFW.mp4"
              controls
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
