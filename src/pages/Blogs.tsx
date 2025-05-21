import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const Blogs = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Generative AI in Industrial Applications",
      excerpt: "Explore how generative AI technologies are transforming manufacturing processes and industrial design.",
      date: "May 10, 2025",
      author: "Sarah Johnson",
      category: "AI Innovation",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop",
      slug: "future-generative-ai-industrial-applications"
    },
    {
      id: 2,
      title: "Building Effective AI Assistants for Customer Service",
      excerpt: "Learn the key principles for designing AI assistants that truly enhance the customer experience.",
      date: "April 28, 2025",
      author: "Michael Chen",
      category: "AI Assistants",
      image: "https://images.unsplash.com/photo-1677442135309-cb0dc033400b?q=80&w=1632&auto=format&fit=crop",
      slug: "effective-ai-assistants-customer-service"
    },
    {
      id: 3,
      title: "Industrial IoT: Connecting the Physical and Digital Worlds",
      excerpt: "Discover how intelligent IoT systems are creating new opportunities for operational efficiency.",
      date: "April 15, 2025",
      author: "Aisha Patel",
      category: "Industrial IoT",
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1632&auto=format&fit=crop",
      slug: "industrial-iot-connecting-physical-digital"
    },
    {
      id: 4,
      title: "Custom AI Development: When Off-the-Shelf Solutions Fall Short",
      excerpt: "Why many businesses are turning to custom AI solutions to address their unique challenges.",
      date: "April 3, 2025",
      author: "James Wilson",
      category: "Custom Development",
      image: "https://images.unsplash.com/photo-1596396922025-8c82a5755eda?q=80&w=1632&auto=format&fit=crop",
      slug: "custom-ai-development-off-shelf-solutions"
    },
    {
      id: 5,
      title: "The Ethics of AI: Building Responsible Systems",
      excerpt: "Important considerations for ensuring AI systems are developed and deployed ethically.",
      date: "March 22, 2025",
      author: "Elena Kowalski",
      category: "AI Ethics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1632&auto=format&fit=crop",
      slug: "ethics-ai-building-responsible-systems"
    },
    {
      id: 6,
      title: "Predictive Maintenance: How AI is Reducing Downtime",
      excerpt: "Case studies showing the impact of AI-powered predictive maintenance in manufacturing.",
      date: "March 15, 2025",
      author: "Thomas Reyes",
      category: "Industrial IoT",
      image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd48?q=80&w=1632&auto=format&fit=crop",
      slug: "predictive-maintenance-ai-reducing-downtime"
    }
  ];

  const categories = ['all', 'AI Innovation', 'AI Assistants', 'Industrial IoT', 'Custom Development', 'AI Ethics'];
  
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 md:py-8 lg:py-3 bg-dark/50 backdrop-blur-md relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-500">AI Insights</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Stay informed with the latest trends, technologies, and best practices in the world of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${filter === category 
                    ? 'bg-secondary text-white' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blogs/${post.slug}`} 
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on AI Advancements</h2>
              <p className="text-white/70">
                Subscribe to our newsletter to receive the latest insights, case studies, and AI news directly in your inbox.
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
                  required
                />
                <button
                  type="submit"
                  className="glow-button bg-purple-900 hover:bg-purple-950"
                >
                  Subscribe
                </button>
              </div>
              <div className="mt-3 text-center text-xs text-white/50">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;