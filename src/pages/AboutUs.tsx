import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-28">
      {/* Editorial Header */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-xs mb-6 font-semibold">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-forest-950 mb-8 leading-[1.1] whitespace-nowrap">
            Han Rainforest Sdn Bhd
          </h1>
        </motion.div>
      </section>

      {/* Content Split */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-square w-full rounded-2xl overflow-hidden"
          >
            <img 
              referrerPolicy="no-referrer"
              src="https://picsum.photos/id/28/800/800" 
              alt="Malaysian Rainforest Landscape" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="prose prose-lg prose-headings:font-serif prose-p:font-light prose-p:text-forest-800 prose-p:leading-relaxed"
          >
            <p className="text-justify mb-8">
              Han Rainforest Sdn Bhd has been a pioneer in Malaysia’s ecotourism sector for over 20 years, beginning with travel routes to Taman Negara Pahang and expanding into innovative programs that align with global sustainable tourism standards. As a social enterprise, we are dedicated to advancing community-based ecotourism that benefits both the environment and rural populations. Our initiatives adhere to Environmental, Social, and Governance (ESG) principles, ensuring active participation from local stakeholders—particularly indigenous communities, women, and youth—while promoting Malaysia as a premier ecotourism destination.
            </p>
            <p className="text-justify">
              Under our flagship Rimba Eco Discovery project, we develop inclusive tourism models that prioritize conservation, education, and local economic growth. Our vision is to transform tourism into a force for regeneration, where visitor experiences contribute to ecosystem restoration, cultural heritage revival, and community empowerment. By designing climate-smart, low-impact, and community-powered destinations, we aim to set replicable benchmarks for sustainable tourism in Malaysia and beyond, ensuring long-term environmental and social benefits.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
