'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Banner Image */}
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">{post.title}</h1>
          </div>

          {/* Blog Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-400 mb-3">Weekly Progress Report</h2>
            <p className="text-gray-500">{post.date}</p>
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 