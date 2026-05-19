import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax effect */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1GZywE3PzqWAg1HlYSTCJR6I-QL8zI8Dj=s1000" 
            referrerPolicy="no-referrer"
            alt="Malaysian Rainforest" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p 
              className="font-sans text-white tracking-[0.2em] uppercase text-sm mb-6 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{ color: '#ffffff' }}
            >
              ESG in Ecotourism
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              style={{ color: '#ffffff' }}
            >
              Experience the <br className="hidden md:block"/>
              <i className="font-light">True</i> Rainforest.
            </h1>
            <div className="flex justify-center">
              <Link
                to="/rimba-park-resort"
                className="group flex items-center gap-4 bg-sand-50 text-forest-950 px-8 py-4 rounded-full font-sans text-sm tracking-wide uppercase hover:bg-white transition-colors"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Editorial Split */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:col-start-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950 mb-8 leading-tight">
              A commitment to <br/>
              <span className="italic text-forest-700">sustainability</span> &<br/>
              preservation.
            </h2>
            <p className="text-lg text-forest-800 leading-relaxed font-light mb-8">
              Our Malaysian Ecotourism Program focuses on Environmental, Social, and Governance (ESG) principles. We believe that by immersing you in the profound beauty of our ancient forests, we can foster a deeper respect for our planet and direct support for indigenous communities.
            </p>
            <Link to="/the-program" className="inline-flex items-center gap-2 text-forest-900 border-b border-forest-900 pb-1 hover:text-forest-700 hover:border-forest-700 transition-colors uppercase tracking-widest text-xs font-semibold">
              Explore The Program
            </Link>
          </motion.div>
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] overflow-hidden rounded-xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1GjVXkXKzLQW4ZCKWXTcSd3ykKxBHjnp_=s1000" 
                referrerPolicy="no-referrer"
                alt="Lush forest canopy" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="bg-sand-100 py-24 md:py-32 text-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Our Partners</p>
            <h2 className="text-4xl md:text-5xl font-serif">Collaborating for a better future</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="https://lh3.googleusercontent.com/d/1l7S_jvq8uLslvqxcKY20F1FbiVGshlYv=s1000" 
              referrerPolicy="no-referrer"
              alt="Partner Logo 1" 
              className="h-20 md:h-28 object-contain mix-blend-multiply"
            />
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://lh3.googleusercontent.com/d/18AJZtuqBfdpfRLEEphqCJGe-SCHRjxXD=s1000" 
              referrerPolicy="no-referrer"
              alt="Partner Logo 2" 
              className="h-20 md:h-28 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
