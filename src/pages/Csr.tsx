import { motion, useScroll, useTransform } from "motion/react";
import { TreePine, LineChart, FileText, ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Csr() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#111412] text-stone-100 min-h-screen font-sans selection:bg-[#2c4c3b] selection:text-white" ref={containerRef}>
      
      {/* HERO / SECTION 1 — THE PROBLEM */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-40 pb-24">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.4]),
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.05])
          }}
        >
          {/* Hands planting in soil, serious, authentic */}
          <img 
            src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2670&auto=format&fit=crop" 
            alt="Real environmental fieldwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111412]/80 via-[#111412]/60 to-[#111412]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 border border-[#cbb26a]/40 rounded text-xs uppercase tracking-widest text-[#cbb26a] font-semibold mb-8">
              Real Tree Planting for Real ESG Impact
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight !text-white mb-10 leading-[1.1]">
              Tree Planting Has Become A <span className="font-medium !text-stone-300">CSR Gimmick.</span>
            </h1>
            
            <div className="space-y-6 text-lg md:text-2xl font-light text-stone-300 leading-relaxed max-w-2xl">
              <p>
                Too many programmes today focus more on tourism, accommodation, and photo opportunities than actual environmental impact.
              </p>
              <p className="text-white font-medium">
                For companies serious about ESG reporting, that is no longer enough.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-4 max-w-2xl border-l border-[#cbb26a]/30 pl-6">
              <p className="text-sm uppercase tracking-wider text-stone-400 font-medium mb-2 col-span-full">Real sustainability initiatives need:</p>
              <ul className="space-y-3 text-stone-300 font-light text-lg">
                <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#cbb26a]" /> Measurable impact</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#cbb26a]" /> Environmental contribution</li>
              </ul>
              <ul className="space-y-3 text-stone-300 font-light text-lg">
                <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#cbb26a]" /> Long-term value</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#cbb26a]" /> Credible reporting</li>
              </ul>
            </div>

            <p className="mt-12 text-xl md:text-2xl font-light text-white italic opacity-80">
              That is why we created this programme.
            </p>

          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — REAL TREE PLANTING. NOTHING ELSE. */}
      <section className="py-32 bg-[#171b18] relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-sans font-light !text-white leading-tight mb-4">
                  Built For Corporate <br/><span className="font-medium !text-[#cbb26a]">ESG & CSR Objectives.</span>
                </h2>
                <p className="text-xl !text-stone-400 font-light">
                  This is not a tourism package with tree planting added inside.
                </p>
              </div>

              <div className="py-8 border-y border-white/10">
                <h3 className="text-3xl font-medium !text-white mb-6">Real Environmental Action.</h3>
                <p className="text-lg text-stone-300 font-light leading-relaxed mb-6">
                  We help organisations conduct meaningful tree planting initiatives aligned with:
                </p>
                <div className="grid grid-cols-2 gap-y-4 text-stone-300 font-light">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#cbb26a]" /> ESG commitments</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#cbb26a]" /> Sustainability goals</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#cbb26a]" /> Carbon footprint awareness</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#cbb26a]" /> Environmental responsibility</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2100&auto=format&fit=crop" 
                alt="Corporate ESG planting"
                className="w-full h-full object-cover grayscale-[20%] brightness-90"
              />
              <div className="absolute inset-0 bg-[#171b18]/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY TREE PLANTING STILL MATTERS */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2664&auto=format&fit=crop" 
            alt="Cinematic forest aerial"
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-light !text-white mb-16 tracking-tight">
              Forests Matter <span className="font-medium !text-[#cbb26a]">More Than Ever.</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                "Carbon absorption",
                "Climate regulation",
                "Biodiversity protection",
                "Ecosystem restoration"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                  <Leaf className="w-6 h-6 text-[#cbb26a] mb-4 stroke-[1.5]" />
                  <span className="text-stone-300 font-light">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-3xl font-light text-stone-200 leading-relaxed max-w-4xl mx-auto">
              Meaningful tree planting contributes toward long-term environmental sustainability and supports corporate environmental initiatives in a tangible way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — ESG & CARBON IMPACT */}
      <section className="py-32 bg-[#111412]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-sans font-light !text-white mb-6">More Than Just Planting Trees.</h2>
            <p className="text-xl !text-[#cbb26a] font-medium tracking-wide uppercase text-sm">
              We understand what corporates actually need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Tree Planting Implementation",
                icon: <TreePine className="w-8 h-8 text-[#cbb26a] mb-6 stroke-[1]" />,
                desc: "End-to-end operational execution of real planting activities in designated critical zones."
              },
              {
                title: "Quarterly Site Report",
                icon: <FileText className="w-8 h-8 text-[#cbb26a] mb-6 stroke-[1]" />,
                desc: "Data-driven updates on tree survival rates, maintenance, and site progression."
              },
              {
                title: "Carbon Sequestration Projection",
                icon: <LineChart className="w-8 h-8 text-[#cbb26a] mb-6 stroke-[1]" />,
                desc: "Calculated impact forecasts to support your ongoing ESG and sustainability reporting."
              }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#171b18] border border-white/5 p-10 hover:border-white/10 transition-colors"
              >
                {block.icon}
                <h3 className="text-xl font-medium !text-white mb-4">{block.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{block.desc}</p>
                {i === 2 && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-sm text-stone-500 italic">Contact us, we will provide an example for free.</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="border-l-2 border-[#cbb26a] pl-8 max-w-4xl mx-auto">
            <p className="text-2xl font-light text-white mb-8">
              Our programme is designed to support organisations looking to strengthen:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-stone-300 font-light text-lg uppercase tracking-wider text-sm">
              <span>— ESG Initiatives</span>
              <span>— Sustainability Efforts</span>
              <span>— Environmental Responsibility</span>
              <span>— Carbon Footprint Awareness</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LONG-TERM THINKING */}
      <section className="py-32 bg-[#0d0f0e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-light !text-white leading-tight">
              Sustainability Should Continue <span className="font-medium !text-[#cbb26a]">Beyond The Event.</span>
            </h2>
            <div className="space-y-6 text-xl text-stone-300 font-light leading-relaxed">
              <p className="text-2xl text-white font-medium">Real impact is not created in one day.</p>
              <p>It comes from survival, growth, restoration, and long-term ecosystem contribution.</p>
              <p className="pt-6">Our focus is not on creating a one-day CSR event.</p>
              <p className="text-white">Our focus is creating meaningful environmental contribution with long-term value.</p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
             <div className="space-y-4 mt-12">
               <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" alt="Seedling" className="w-full h-64 object-cover grayscale-[30%] opacity-90" />
               <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1934&auto=format&fit=crop" alt="Forest detail" className="w-full h-80 object-cover grayscale-[30%] opacity-90" />
             </div>
             <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop" alt="Deep forest" className="w-full h-80 object-cover grayscale-[30%] opacity-90" />
               <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop" alt="Forest canopy" className="w-full h-64 object-cover grayscale-[30%] opacity-90" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — FINAL SECTION */}
      <section className="relative py-40 bg-black flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2e22] via-black to-black opacity-50" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-light !text-stone-400">No gimmicks.</h2>
            <h2 className="text-4xl md:text-6xl font-light !text-stone-300">No unnecessary tourism elements.</h2>
            <h2 className="text-4xl md:text-6xl font-medium !text-white">Just real tree planting for real ESG impact.</h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-[#cbb26a] hover:bg-[#b59e5a] text-black px-8 py-5 text-sm uppercase tracking-widest font-semibold transition-all hover:pr-6 group"
            >
              Let’s Build Meaningful Environmental Impact Together
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
