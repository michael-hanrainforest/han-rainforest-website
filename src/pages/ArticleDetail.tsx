import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-sand-50 pt-32 pb-24 items-center justify-center">
        <h1 className="text-4xl font-serif text-forest-950 mb-6">Article Not Found</h1>
        <Link to="/articles" className="inline-flex items-center gap-2 text-forest-900 hover:text-forest-700 border-b border-forest-900/20 pb-1 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-forest-900 selection:text-white pt-24 pb-32">
      
      {/* Hero Section */}
      <div className="w-full h-[50vh] md:h-[70vh] bg-sand-100 relative">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={article.image} 
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content wrapper */}
      <main className="max-w-3xl mx-auto px-6 md:px-12 -mt-24 md:-mt-32 relative z-10">
        <motion.article 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-16 shadow-xl shadow-black/5"
        >
          <header className="mb-12 md:mb-16 text-center border-b border-sand-200 pb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest-900">
                {article.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-forest-900/30" />
              <span className="text-xs font-medium text-forest-900/60">
                {article.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-950 leading-tight mb-8">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-forest-800/80 font-light leading-relaxed max-w-2xl mx-auto">
              {article.excerpt}
            </p>
          </header>

          <div className="space-y-8 md:space-y-10 text-lg text-forest-900/80 font-light leading-relaxed">
            {article.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <footer className="mt-20 pt-10 border-t border-sand-200">
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-forest-950 hover:text-forest-700 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>
          </footer>
        </motion.article>
      </main>

    </div>
  );
}
