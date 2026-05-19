import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-28">
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-xs mb-6 font-semibold">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-forest-950 mb-8 leading-[1.1]">
              Contact Us
            </h1>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif text-forest-950 mb-12">Reach out for inquiries, partnerships, or more information.</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-900 text-sand-50 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-forest-950 uppercase tracking-widest text-xs mb-3">Email Address</h3>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:michael@hanrainforest.com" className="text-forest-800 text-lg hover:text-forest-600 transition-colors">
                      michael@hanrainforest.com
                    </a>
                    <a href="mailto:steven@hanrainforest.com" className="text-forest-800 text-lg hover:text-forest-600 transition-colors">
                      steven@hanrainforest.com
                    </a>
                    <a href="mailto:kenny@hanrainforest.com" className="text-forest-800 text-lg hover:text-forest-600 transition-colors">
                      kenny@hanrainforest.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-900 text-sand-50 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-forest-950 uppercase tracking-widest text-xs mb-3">Phone & WhatsApp</h3>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+60193734932" className="text-forest-800 text-lg hover:text-forest-600 transition-colors">
                      +6 019 373 4932
                    </a>
                    <a href="https://wa.me/60193734932" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:text-forest-600 transition-colors inline-block mt-1">
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-900 text-sand-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-forest-950 uppercase tracking-widest text-xs mb-3">Office Location</h3>
                  <p className="text-forest-800 text-lg max-w-md mx-auto">
                    Travelodge Kuala Lumpur City Centre,<br/>
                    No. 7, Jalan Hang Kasturi,<br/>
                    50050 Kuala Lumpur City Centre, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
