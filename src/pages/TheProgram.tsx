import { motion } from "motion/react";

export default function TheProgram() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-28">
      <section className="py-20 px-4 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-xs mb-6 font-semibold">
            ESG in Ecotourism
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-forest-950 mb-8 leading-[1.1]">
            Experiential Journey
          </h1>
          <p className="text-xl text-forest-800 font-light leading-relaxed mt-12 mb-16 max-w-2xl mx-auto">
            Our program is a carefully crafted journey designed to connect you deeply with the natural world while leaving a positive footprint.
          </p>
        </motion.div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E - Environmental",
              desc: "Zero waste policies, carbon offset travel, and direct funding to conservation efforts."
            },
            {
              title: "S - Social",
              desc: "Empowering local communities with fair wages, cultural exchange, and healthcare initiatives."
            },
            {
              title: "G - Governance",
              desc: "Transparent operations, ethical partnerships, and a commitment to long-term sustainability goals."
            }
          ].map((item, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-sand-100"
              >
                <h3 className="text-2xl font-serif text-forest-950 mb-4">{item.title}</h3>
                <p className="text-forest-800 font-light leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
