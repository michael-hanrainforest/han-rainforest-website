import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function Packages() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-28 pb-20">
      <section className="px-4 max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-forest-800 tracking-[0.2em] uppercase text-xs mb-6 font-semibold">
            Programmes & Tariffs
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-forest-950 mb-8 leading-[1.1]">
            Our Packages
          </h1>
          <p className="text-xl text-forest-800 font-light leading-relaxed mb-16 max-w-2xl mx-auto italic">
            "Bookings only through our ground partner"
          </p>
        </motion.div>

        {/* SECTION 1: ESG in Ecotourism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-left bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand-200 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="w-full md:w-3/5 lg:w-2/3">
              <div className="w-full aspect-[210/297] rounded-xl overflow-hidden border border-sand-200 bg-sand-50 relative">
                <iframe 
                  src="https://drive.google.com/file/d/1yzQDIbRCQZi2tblVqf-bH8kKvzwsSdJu/preview" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="autoplay"
                  title="ESG in Ecotourism PDF"
                ></iframe>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center">
              <p className="text-forest-800 tracking-[0.2em] uppercase text-xs mb-4 font-semibold">
                Programme 1
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-forest-950 mb-8 md:mb-12">
                ESG in Ecotourism
              </h2>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1yzQDIbRCQZi2tblVqf-bH8kKvzwsSdJu" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-forest-950 text-sand-50 rounded-full hover:bg-forest-800 transition-colors uppercase tracking-widest text-xs font-semibold whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: CSR Programme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand-200 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="w-full md:w-3/5 lg:w-2/3">
              <div className="w-full aspect-[210/297] rounded-xl overflow-hidden border border-sand-200 bg-sand-50 relative">
                <iframe 
                  src="https://drive.google.com/file/d/1YoWyPH7sKMtiMccBfeTa7Irf-XI5zmVC/preview" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="autoplay"
                  title="CSR Programme PDF"
                ></iframe>
              </div>
            </div>

            <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center">
              <p className="text-forest-800 tracking-[0.2em] uppercase text-xs mb-4 font-semibold">
                Programme 2
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-forest-950 mb-8 md:mb-12">
                CSR Programme
              </h2>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1YoWyPH7sKMtiMccBfeTa7Irf-XI5zmVC" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-forest-950 text-sand-50 rounded-full hover:bg-forest-800 transition-colors uppercase tracking-widest text-xs font-semibold whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
