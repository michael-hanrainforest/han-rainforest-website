import { motion, useScroll, useTransform } from "motion/react";
import { Leaf, Users, Shield, ArrowDown, Droplets, Globe, Award } from "lucide-react";
import { useRef } from "react";

export default function EsgEcotourism() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#0a0f0d] text-sand-50 min-h-screen font-sans selection:bg-forest-900 selection:text-white" ref={containerRef}>
      
      {/* SECTION 1 — THE PROBLEM */}
      <section className="relative min-h-[100dvh] w-full flex flex-col items-center overflow-hidden pt-40 md:pt-48 pb-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.3]),
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.05])
          }}
        >
          {/* Using a moody, misty rainforest image */}
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2672&auto=format&fit=crop" 
            alt="Misty rainforest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0f0d]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-4xl px-4 md:px-8 text-center mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 border border-[#cbb26a]/40 rounded-full text-xs uppercase tracking-[0.3em] text-[#cbb26a] font-medium">
                Your Journey Starts Here
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium tracking-wide !text-[#cbb26a] drop-shadow-md pb-4">
                The world is changing.
              </h2>
            </div>
            
            <p className="text-lg md:text-2xl font-light !text-white leading-relaxed max-w-2xl mx-auto drop-shadow">
              Today, many people experience nature only through screens.
            </p>

            <p className="text-lg md:text-xl font-light !text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow">
              We live connected to technology, yet increasingly disconnected from the forests, rivers, wildlife, and ecosystems that quietly sustain human life.
            </p>

            <p className="text-lg md:text-xl font-light !text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow">
              At the same time, tourism continues to grow rapidly around the world — but not always in ways that protect the environment or benefit local communities.
            </p>

            <p className="text-2xl md:text-3xl font-serif italic !text-[#e8dcb5] leading-relaxed drop-shadow">
              Nature is visited. Photographed. Consumed. But rarely understood.
            </p>

            <div className="pt-8 space-y-6">
              <p className="text-2xl md:text-3xl font-serif !text-[#cbb26a] drop-shadow-md">
                What if tourism could become something more meaningful?
              </p>
              <p className="text-lg md:text-xl font-light text-sand-100/80 leading-relaxed max-w-3xl mx-auto">
                What if every journey could create awareness, inspire responsibility, and reconnect people with the relationship between humanity and nature?
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="pt-20 pb-10 flex flex-col items-center justify-center space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sand-300/60 font-semibold">
                That question became the beginning
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowDown className="w-6 h-6 text-sand-300/60" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — THE FIRST OF ITS KIND */}
      <section className="py-32 relative bg-[#0a0f0d]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-8">
              <Award className="w-12 h-12 text-[#cbb26a] opacity-80 stroke-[1]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif !text-[#cbb26a] mb-8 leading-[1.1] drop-shadow-lg">
              The First ESG-Guided <br/><span className="!text-[#e8dcb5]">Ecotourism Programme</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
              ESG in Ecotourism is the first programme of its kind in the world — guided by Environmental, Social, and Governance (ESG) principles and endorsed by Tourism Malaysia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <p className="text-lg text-white/70 font-light leading-relaxed">
                The programme offers an experiential journey across 9 districts of Pahang, covering the montane, middle, and lowland forests of Malaysia.
              </p>
              <div className="pl-6 border-l border-[#cbb26a]/30 py-2">
                <p className="text-xl text-white/90 font-serif mb-2">
                  At the heart of the experience lies one of the oldest tropical rainforests on Earth:
                </p>
                <p className="text-2xl text-[#cbb26a] font-serif">
                  Taman Negara — a rainforest estimated to be over 130 million years old.
                </p>
              </div>
              <p className="text-xl font-light text-white/80 leading-relaxed italic">
                Participants do not simply visit these environments.<br/>
                They <span className="text-white font-medium">experience</span> them. 
                <span className="text-white font-medium"> Listen</span> to them. 
                <span className="text-white font-medium"> Understand</span> them.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative h-[600px] rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop" 
                alt="Ancient Rainforest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT THE PROGRAMME IS ABOUT */}
      <section className="py-32 bg-[#0e1411] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#cbb26a] font-semibold mb-4">
              What the Programme is About
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif !text-[#cbb26a] mb-6 drop-shadow-lg">More Than A Journey</h3>
            <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
              This programme is specially designed to create awareness, awaken the senses, and bring forth meaningful experiences through nature, people, and participation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Environment",
                description: "Participants explore forests, rivers, biodiversity, and ecosystems.",
                image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Cultural & Social Connection",
                description: "Communities, traditions, and local wisdom become part of the journey.",
                image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Conservation & Stewardship",
                description: "Understanding the role humans play in protecting nature.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop"
              },
              {
                title: "Ecosystem Resources",
                description: "Understanding how nature supports human life and communities.",
                image: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Hands-On Experiences",
                description: "Learning through participation, exploration, and activities.",
                image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1934&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative h-[450px] overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 w-8 h-[1px] bg-[#cbb26a]" />
                  <h4 className="text-2xl font-serif !text-[#cbb26a] mb-3">{item.title}</h4>
                  <p className="!text-white/90 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE HOPE PARTICIPANTS GAIN */}
      <section className="py-32 relative bg-[#0a0f0d]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif !text-[#cbb26a] mb-6 leading-[1.1] drop-shadow-lg">
              Every Journey Should <br className="hidden md:block"/> Leave Something Behind
            </h2>
            <p className="text-xl md:text-2xl text-[#cbb26a] font-light">
              Not only memories. But awareness. Understanding. Responsibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Awareness",
                icon: <Globe className="w-8 h-8 text-[#cbb26a] stroke-[1]" />,
                points: ["Relationship between man & nature", "Relationship between man & man", "Sustainability", "Conservation", "Rehabilitation"]
              },
              {
                title: "Experience",
                icon: <Leaf className="w-8 h-8 text-[#cbb26a] stroke-[1]" />,
                points: ["Hands-on activities", "Real environmental exposure", "Active involvement"]
              },
              {
                title: "Action",
                icon: <Shield className="w-8 h-8 text-[#cbb26a] stroke-[1]" />,
                points: ["Reduce", "Reuse", "Recycle"]
              }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-4">
                  {block.icon}
                </div>
                <h3 className="text-3xl font-serif !text-[#e8dcb5]">{block.title}</h3>
                <ul className="space-y-4">
                  {block.points.map((point, j) => (
                    <li key={j} className="!text-white/80 font-light text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY ESG IN ECOTOURISM MATTERS */}
      <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=2000&auto=format&fit=crop" 
            alt="Forest reflection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-12 !text-[#cbb26a] drop-shadow-xl">Why This Matters</h2>
            
            <div className="space-y-8 text-xl md:text-3xl font-light !text-white leading-relaxed mb-20 max-w-4xl mx-auto drop-shadow-lg">
              <p>
                The future of sustainability cannot depend only on policies, reports, or discussions.
              </p>
              <p className="font-serif italic text-2xl md:text-4xl !text-[#e8dcb5] drop-shadow-xl py-6">
                "People protect what they understand. And they understand most deeply through experience."
              </p>
              <p>
                ESG in Ecotourism represents a new direction for responsible tourism — one that combines environmental awareness, social responsibility, education, and meaningful human connection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base !text-sand-200/80 uppercase tracking-widest font-semibold mb-24 max-w-4xl mx-auto">
              <span>UN SDGs</span>
              <span>Biodiversity Protection</span>
              <span>Local Community</span>
              <span>Educational Tourism</span>
            </div>

            <div className="pt-16 border-t border-white/20 inline-block">
              <p className="text-2xl md:text-4xl font-serif !text-[#cbb26a] drop-shadow-md">
                This is not only about tourism.<br className="hidden md:block" /> It is about shaping how future generations experience the world around them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
