import { motion } from "motion/react";
import { Clock } from "lucide-react";

export default function RimbaParkResort() {
  return (
    <div className="flex flex-col min-h-screen bg-forest-950 pt-20">
      <section className="relative flex-grow w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/d/1FaDw5KSYHgsSo_rwaqPAnhBwpk-obRcq=s1000" 
            alt="Rimba Park Resort - Under Construction" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-2xl shadow-2xl"
          >
            <div className="flex justify-center mb-6 text-white">
              <Clock className="w-12 h-12 stroke-[1.5]" />
            </div>
            <p className="font-sans text-sand-200 tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold drop-shadow-md">
              Rimba Park Resort
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
              Under Construction
            </h1>
            <p className="text-base md:text-xl text-white/90 font-light max-w-xl mx-auto drop-shadow-md">
              We are currently building an extraordinary eco-experience. 
              <br className="hidden md:block" />
              Please check back soon to discover our new rainforest oasis.
            </p>
            
            <div className="mt-10 inline-block">
              <span className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/30 text-white rounded-full uppercase tracking-widest text-xs font-semibold backdrop-blur-sm">
                Coming Soon ...
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
