'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src="/1.png"
              alt="SkillStack AI Logo"
              className="w-30 h-30 rounded-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold">SkillStack AI Development Blog</h1>
          </div>
          <p className="text-xl text-gray-400">Follow our journey building SkillStack AI</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
                    <h3 className="text-2xl font-bold text-center text-white">{post.title}</h3>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.date}</h3>
                    <h4 className="text-lg text-gray-400 mb-3">{post.title}</h4>
                    <p className="text-gray-300">{post.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 