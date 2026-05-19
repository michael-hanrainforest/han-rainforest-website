import { motion } from "motion/react";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Taman Negara",
      desc: "One of the world's oldest deciduous rainforests, estimated to be more than 130 million years old. Spanning a vast expanse across the Malaysian peninsula, it serves as the ultimate sanctuary for thousands of unique species of flora and fauna, including the elusive Malayan tiger and majestic Asian elephant. Engage in canopy walks, river cruises, and immerse yourself in the indigenous culture that calls this wilderness home. Every step taken here is a step back in time, reconnecting with earth's ancient rhythms.",
      image: "https://lh3.googleusercontent.com/d/1orJA-gRomxt5kGWYtstjoQbSmBmSvX3d"
    },
    {
      id: 2,
      name: "Cameron Highlands",
      desc: "Experience the cool, refreshing climate, sweeping tea plantations, and breathtaking scenic landscapes of the highlands. Known for its rolling emerald hills and nostalgic colonial charm, Cameron Highlands offers a tranquil escape from the tropical heat. Visitors can wander through vibrant strawberry farms, hike mossy forest trails that feel straight out of a fairy tale, and enjoy high tea overlooking the vast, mist-covered valleys. It's a sanctuary of serenity and natural abundance.",
      image: "https://lh3.googleusercontent.com/d/1sPBlnPGKTI1QTU4FzjPP3IJRoPbETmQY"
    },
    {
      id: 3,
      name: "Sungai Relau, Merapoh",
      desc: "A magnificent gateway to ancient wilderness, known for its pristine rivers, towering limestone outcrops, and rich biodiversity. Serving as the western entrance to Taman Negara, Merapoh remains largely untouched and rugged. It boasts hidden waterfalls, spectacular caves ripe for spelunking, and some of the best opportunities for spotting rare wildlife in their natural habitat. Trekking through Sungai Relau is raw, authentic, and an absolute heaven for serious nature enthusiasts.",
      image: "https://lh3.googleusercontent.com/d/1FTrqWwIpslspBq6jhyccr5IjImwZqsXI"
    },
    {
      id: 4,
      name: "Gua Kota Gelanggi",
      desc: "A mesmerizing 150-million-year-old limestone cave complex steeped in myth, historical intrigue, and natural beauty. Local legends speak of a cursed ancient city, matching the jaw-dropping scale of the stalactites and stalagmites shaped by the passage of time. Explore intricate chambers with names that spark the imagination and witness breathtaking shafts of sunlight piercing through natural skylights in the cavern roofs. It is an unforgettable journey into the subterranean wonders of Pahang.",
      image: "https://lh3.googleusercontent.com/d/1kNzbOMQVDuquEm_9qSlUMEG-llbL3AH1"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-28">
      <section className="py-20 px-4 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-xs mb-6 font-semibold">
            Explore
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-forest-950 mb-8">
            Our Destinations
          </h1>
        </motion.div>

        <div className="mt-20 flex flex-col gap-24 text-left">
          {destinations.map((dest, i) => (
            <div key={dest.id} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img src={dest.image} alt={dest.name} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 md:px-12"
              >
                <h2 className="text-3xl lg:text-4xl font-serif text-forest-950 mb-6">{dest.name}</h2>
                <p className="text-lg text-forest-800 font-light leading-relaxed mb-8">
                  {dest.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
