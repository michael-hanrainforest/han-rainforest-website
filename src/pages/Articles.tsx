import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50 pt-32 pb-24 font-sans selection:bg-forest-900 selection:text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 border border-forest-900/20 rounded-full text-xs uppercase tracking-widest text-forest-900 font-semibold mb-6">
            Insights & Perspectives
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-forest-950 tracking-tight">
            Articles
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link to={`/articles/${article.slug}`} className="block relative aspect-[4/3] overflow-hidden mb-6 bg-sand-200">
                <img 
                  src={article.image} 
                  alt={article.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-forest-900">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-forest-900/30" />
                <span className="text-xs font-medium text-forest-900/60">
                  {article.date}
                </span>
              </div>

              <Link to={`/articles/${article.slug}`}>
                <h2 className="text-2xl font-serif text-forest-950 mb-4 leading-tight group-hover:text-forest-700 transition-colors">
                  {article.title}
                </h2>
              </Link>
              
              <p className="text-forest-800/80 font-light leading-relaxed mb-6 flex-grow">
                {article.excerpt}
              </p>

              <Link 
                to={`/articles/${article.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-forest-950 group/link hover:text-forest-700 transition-colors"
              >
                Read Article
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
