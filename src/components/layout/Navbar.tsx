import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Rimba Park Resort", path: "/rimba-park-resort" },
  { 
    name: "The Program", 
    children: [
      { name: "ESG in Ecotourism", path: "/esg-ecotourism" },
      { name: "Corporate Social Responsibility (CSR)", path: "/csr" },
    ] 
  },
  { name: "Destinations", path: "/destinations" },
  { name: "Packages", path: "/packages" },
  { name: "Articles", path: "/articles" },
  { name: "Contact Us", path: "/contact-us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 bg-sand-50/90 backdrop-blur-md border-b border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between md:flex-col md:justify-center">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden order-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 -ml-2 rounded-md text-forest-800 hover:text-forest-600 hover:bg-sand-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0 items-center justify-center md:mb-6 order-2 md:order-none">
            <img 
              src="https://lh3.googleusercontent.com/d/1wL2XFljAblOvLs_04klRP3FdU34XPDKM=s1000" 
              referrerPolicy="no-referrer"
              alt="Han Rainforest Logo" 
              className="h-10 md:h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Mobile right spacer for centering */}
          <div className="w-10 order-3 md:hidden"></div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:justify-center">
          <div className="flex items-center flex-wrap justify-center gap-x-6 lg:gap-x-8 gap-y-3 relative">
            {links.map((link) => {
              if (link.children) {
                const isActive = link.children.some(child => location.pathname === child.path);
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                      className={cn(
                        "flex items-center gap-1 text-xs uppercase tracking-widest font-medium transition-colors border-b-2 hover:text-forest-950 pb-[2px]",
                        isActive || desktopDropdownOpen
                          ? "text-forest-950 border-forest-950"
                          : "text-forest-800/70 border-transparent hover:border-forest-900/10"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn("w-3 h-3 transition-transform", desktopDropdownOpen ? "rotate-180" : "")} />
                    </button>
                    
                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 bg-white/95 backdrop-blur-xl border border-forest-900/10 shadow-2xl rounded-xl overflow-hidden"
                        >
                          <div className="py-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className={cn(
                                  "block px-5 py-3 text-sm transition-colors uppercase tracking-wider font-medium text-center",
                                  location.pathname === child.path
                                    ? "bg-forest-50 text-forest-950 font-semibold"
                                    : "text-forest-800 hover:bg-sand-50 hover:text-forest-950"
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path!}
                  className={cn(
                    "text-xs uppercase tracking-widest font-medium transition-colors border-b-2 hover:text-forest-950 pb-[2px]",
                    location.pathname === link.path
                      ? "text-forest-950 border-forest-950"
                      : "text-forest-800/70 border-transparent hover:border-forest-900/10"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-sand-50 border-b border-forest-900/10 shadow-lg">
              {links.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest",
                          link.children.some(child => location.pathname === child.path)
                            ? "bg-sand-200 text-forest-950"
                            : "text-forest-800 hover:bg-sand-100 hover:text-forest-950"
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("w-4 h-4 transition-transform", mobileDropdownOpen ? "rotate-180" : "")} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/5 rounded-md overflow-hidden mx-2 mt-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className={cn(
                                  "block px-4 py-2.5 text-xs font-medium uppercase tracking-wider",
                                  location.pathname === child.path
                                    ? "text-forest-950 font-bold"
                                    : "text-forest-800/80 hover:text-forest-950 hover:bg-white/50"
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path!}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest",
                      location.pathname === link.path
                        ? "bg-sand-200 text-forest-950"
                        : "text-forest-800 hover:bg-sand-100 hover:text-forest-950"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
