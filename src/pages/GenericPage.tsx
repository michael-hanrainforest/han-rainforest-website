import { motion } from "motion/react";

export default function GenericPage({ title, description }: { title: string, description?: string }) {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-6">{title}</h1>
          <div className="prose prose-lg prose-brand max-w-none">
            <p className="text-slate-600 text-lg leading-relaxed">
              {description || `This is the ${title} page for Malaysian Ecotourism. We are currently migrating our content from our old website to this new, modern platform.`}
            </p>
            <div className="mt-8 p-6 bg-brand-50 rounded-xl border border-brand-100">
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Content Coming Soon</h3>
              <p className="text-brand-800">
                You can easily edit this page's content by updating the corresponding React component in the <code>src/pages</code> directory once you export the project to Netlify.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
