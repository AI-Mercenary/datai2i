
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface BlogPostData {
  title: string;
  date: string;
  author: string;
  category: string;
  content: string[];
  image: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  'future-generative-ai-industrial-applications': {
    title: 'The Future of Generative AI in Industrial Applications',
    date: 'May 10, 2025',
    author: 'Sarah Johnson',
    category: 'AI Innovation',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop',
    content: [
      'Generative AI represents a paradigm shift for industrial applications, moving beyond analytical capabilities to creating new designs, optimizing processes, and generating innovative solutions. In this article, we explore how generative AI is transforming manufacturing and industrial design processes.',
      'In recent years, generative AI has evolved from a theoretical concept to a practical tool with immediate applications in various industries. From optimizing factory layouts to creating new material formulations, the technology is proving to be a valuable asset for companies looking to innovate and stay competitive in a rapidly changing landscape.',
      '### Design and Prototyping',
      'One of the most impactful applications of generative AI is in design and prototyping. By setting parameters and constraints, engineers can use generative algorithms to create thousands of potential designs in hours rather than weeks. This accelerated iteration process allows for more thorough exploration of design spaces and often results in unexpected but highly effective solutions.',
      'For example, a leading automotive manufacturer recently used generative design to reimagine a critical engine component. The AI-generated design was 35% lighter while maintaining the same structural integrity, resulting in improved fuel efficiency and reduced material costs.',
      '### Process Optimization',
      'Generative AI is also making significant inroads in process optimization. By analyzing historical data and current operating conditions, these systems can generate optimal process parameters in real-time, reducing waste, energy consumption, and production time.',
      'A chemical processing plant implemented a generative AI system for batch process optimization and saw a 15% reduction in energy usage and a 10% increase in yield. The system continuously learns from each batch, further refining its recommendations over time.',
      '### Predictive Maintenance',
      'The combination of generative AI with IoT sensor data is revolutionizing predictive maintenance. Rather than simply flagging anomalies, advanced generative models can simulate potential failure scenarios and recommend specific preventative actions.',
      'This approach not only prevents equipment failure but can extend the operational life of machinery by optimizing maintenance schedules based on actual usage patterns rather than generic recommendations.',
      '### Challenges and Considerations',
      'Despite its promise, implementing generative AI in industrial settings comes with challenges. Data quality and quantity remain significant hurdles, as these systems require substantial training data to perform effectively. Additionally, integrating AI-generated recommendations with human expertise requires thoughtful workflow design and change management.',
      'Security and intellectual property considerations also come into play, especially when generative systems are creating novel designs or processes that may be patentable.',
      '### The Road Ahead',
      'As generative AI continues to mature, we can expect to see even greater integration with physical systems through advanced robotics and automated manufacturing processes. The line between digital design and physical production will blur, enabling more responsive, customized manufacturing capabilities.',
      'Companies that successfully implement generative AI now will be well-positioned to capitalize on these future developments, gaining significant competitive advantages in efficiency, innovation, and time-to-market.',
      'At DATAi2i, we're working with industry leaders to implement practical, effective generative AI solutions that deliver measurable business value today while building capabilities for tomorrow's challenges. Contact us to learn how generative AI can transform your industrial operations.'
    ]
  },
  'effective-ai-assistants-customer-service': {
    title: 'Building Effective AI Assistants for Customer Service',
    date: 'April 28, 2025',
    author: 'Michael Chen',
    category: 'AI Assistants',
    image: 'https://images.unsplash.com/photo-1677442135309-cb0dc033400b?q=80&w=1632&auto=format&fit=crop',
    content: [
      'Customer service AI assistants have evolved dramatically in recent years, moving from simple rule-based chatbots to sophisticated assistants capable of natural conversations, empathy, and complex problem-solving. In this article, we explore the key principles for designing AI assistants that truly enhance the customer experience.',
      '### Beyond Basic Chatbots',
      'The first generation of customer service bots often frustrated customers with their limited understanding and rigid response patterns. Modern AI assistants leverage advances in natural language processing and machine learning to understand context, remember conversation history, and adapt their responses to the emotional tone of the interaction.',
      'This evolution has transformed AI assistants from cost-cutting tools to valuable assets that can enhance customer satisfaction and build brand loyalty.',
      '### Design Principles for Effective AI Assistants',
      '#### 1. Human-Centered Design',
      'The most successful AI assistants are designed with a deep understanding of both customer needs and human conversation patterns. This requires extensive research into your specific customer base, their common issues, and their communication preferences.',
      'Involve actual customer service representatives in the design process - they have invaluable insights into customer needs and the nuances of effective communication.',
      '#### 2. Transparency and Setting Expectations',
      'Customers appreciate knowing they're interacting with an AI. Being transparent about the nature of the assistant and its capabilities helps set appropriate expectations and reduces frustration when complex issues arise.',
      'Consider including a brief introduction that explains the assistant\'s capabilities and limitations, as well as an easy path to human agents when needed.',
      '#### 3. Continuous Learning',
      'The most effective AI assistants improve over time by learning from each interaction. Implement robust feedback mechanisms and regular review cycles to identify areas for improvement and expansion of the assistant\'s knowledge base.',
      'This learning process should include both automated analysis of successful interactions and human review of cases where the assistant struggled.',
      '#### 4. Emotional Intelligence',
      'Modern AI assistants can recognize emotional cues in text and adjust their responses accordingly. When a customer expresses frustration, the assistant should acknowledge those feelings and adapt its approach - perhaps by simplifying processes, offering additional help, or expediting connection to a human agent.',
      '#### 5. Seamless Handoff',
      'No AI assistant can handle every situation. Design your system with smooth transitions to human agents when necessary, ensuring that all context and conversation history is transferred to avoid making customers repeat information.',
      '### Implementation Strategies',
      'Successful implementation of AI assistants requires a phased approach:',
      '1. Start with well-defined, common use cases where the assistant can provide immediate value',
      '2. Gather extensive feedback during initial deployment and iterate quickly',
      '3. Gradually expand capabilities based on customer needs and technological capabilities',
      '4. Maintain a balanced team of AI specialists, customer service experts, and UX designers throughout the process',
      '### Measuring Success',
      'Effective AI assistants should be evaluated on multiple dimensions:',
      '- Resolution rate: How often the assistant resolves issues without human intervention',
      '- Customer satisfaction: Post-interaction surveys and sentiment analysis',
      '- Efficiency metrics: Average handling time and cost per interaction',
      '- Business impact: Conversion rates, upsell success, and customer retention',
      '### Case Study: Retail AI Assistant',
      'A major online retailer implemented an AI assistant designed around these principles and saw a 45% reduction in routine support tickets while maintaining customer satisfaction scores. The assistant now handles over 70% of initial customer interactions, freeing human agents to focus on complex issues that require empathy and creative problem-solving.',
      'At DATAi2i, we specialize in developing AI assistants that balance technological sophistication with human-centered design. Contact us to learn how we can enhance your customer service experience while reducing operational costs.'
    ]
  },
  'industrial-iot-connecting-physical-digital': {
    title: 'Industrial IoT: Connecting the Physical and Digital Worlds',
    date: 'April 15, 2025',
    author: 'Aisha Patel',
    category: 'Industrial IoT',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1632&auto=format&fit=crop',
    content: [
      'The Industrial Internet of Things (IIoT) is revolutionizing manufacturing, energy, transportation, and other industrial sectors by connecting physical machinery to digital systems that can analyze, optimize, and control operations. In this article, we explore how intelligent IoT systems are creating new opportunities for operational efficiency.',
      'While consumer IoT focuses on convenience and lifestyle enhancement, Industrial IoT addresses critical business challenges: improving operational efficiency, reducing downtime, enhancing safety, and enabling new business models. The stakes are higher, but so are the potential rewards.',
      '### The Convergence of OT and IT',
      'Industrial IoT represents the convergence of operational technology (OT) - the hardware and software that monitors and controls physical devices - with information technology (IT) systems that process and analyze data. This convergence enables unprecedented visibility into industrial operations and creates opportunities for optimization that were previously impossible.',
      'For example, a traditional manufacturing line might collect basic production data, but an IIoT-enabled line can provide granular insights into each machine\'s performance, energy consumption, maintenance needs, and quality metrics - all in real-time.',
      '### Key Components of Industrial IoT',
      '#### 1. Smart Sensors',
      'The foundation of any IIoT system is a network of sensors that collect data from physical equipment. Modern sensors are increasingly sophisticated, capable of monitoring temperature, vibration, pressure, flow rates, acoustics, and many other parameters with high precision.',
      'These sensors need to be robust enough to function reliably in harsh industrial environments while remaining cost-effective for large-scale deployment.',
      '#### 2. Connectivity Infrastructure',
      'Reliable, secure connectivity is essential for IIoT implementations. Depending on the specific requirements, this might involve industrial ethernet, Wi-Fi, cellular networks (including 5G), or low-power wide-area networks (LPWAN).',
      'Many industrial environments implement multi-layered connectivity solutions to ensure redundancy and optimal performance for different types of devices.',
      '#### 3. Edge Computing',
      'Processing data at or near its source (the "edge") is increasingly important in IIoT applications. Edge computing reduces latency for time-critical applications, minimizes bandwidth usage, and enhances security by limiting the transmission of sensitive data.',
      'Modern edge devices can perform complex analytics and machine learning inference, enabling real-time decision making without dependency on cloud connectivity.',
      '#### 4. Cloud Platforms',
      'Cloud platforms provide the scalable storage and computing resources needed for comprehensive data analysis, long-term trend identification, and integration with enterprise systems. They also enable remote monitoring and control of distributed industrial assets.',
      '#### 5. Analytics and AI',
      'The true value of IIoT emerges through advanced analytics and artificial intelligence that transform raw data into actionable insights. These technologies enable predictive maintenance, process optimization, anomaly detection, and other high-value applications.',
      '### Transformative Applications',
      '#### Predictive Maintenance',
      'By continuously monitoring equipment performance and analyzing patterns that precede failures, IIoT systems can predict when maintenance will be needed, reducing unplanned downtime and optimizing maintenance resources.',
      'A major mining operation implemented predictive maintenance for their haul trucks and reduced unplanned downtime by 25%, resulting in millions of dollars in savings annually.',
      '#### Energy Management',
      'IIoT enables granular monitoring and control of energy consumption across industrial operations, identifying opportunities for optimization and automatically adjusting systems to minimize waste.',
      '#### Supply Chain Visibility',
      'IoT sensors can track materials and products throughout the supply chain, providing real-time visibility into inventory levels, conditions during transit, and potential disruptions.',
      '#### Quality Assurance',
      'Advanced sensing technologies combined with AI can detect quality issues earlier in the production process, reducing waste and ensuring consistent product quality.',
      '### Implementation Challenges',
      'Despite its potential, implementing Industrial IoT comes with significant challenges:',
      '- Legacy Equipment Integration: Most industrial environments include equipment of varying ages and with different control systems',
      '- Security Concerns: Connecting previously isolated operational technology to networks introduces new security risks',
      '- Organizational Change: Effective IIoT implementation requires changes to processes, skills, and sometimes organizational structures',
      '- ROI Justification: The initial investment can be substantial, requiring careful analysis of potential returns',
      '### The Path Forward',
      'Successful Industrial IoT implementation requires a strategic approach:',
      '1. Start with high-value use cases that can demonstrate clear ROI',
      '2. Build a flexible, scalable infrastructure that can accommodate future expansion',
      '3. Address security from the beginning of the design process',
      '4. Invest in developing the necessary skills and organizational capabilities',
      '5. Partner with experienced providers who understand both OT and IT requirements',
      'At DATAi2i, we specialize in implementing Industrial IoT solutions that deliver measurable business value. Our approach combines deep industrial expertise with cutting-edge AI and analytics capabilities. Contact us to learn how we can help you connect your physical and digital worlds for optimized operations.'
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  
  useEffect(() => {
    if (slug && blogPostsData[slug]) {
      setPost(blogPostsData[slug]);
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  // Function to render paragraphs with markdown-like formatting
  const renderContent = (content: string) => {
    if (content.startsWith('###')) {
      return (
        <h3 className="text-xl font-semibold mt-8 mb-4 text-secondary">{content.replace('### ', '')}</h3>
      );
    } else if (content.startsWith('####')) {
      return (
        <h4 className="text-lg font-semibold mt-6 mb-3">{content.replace('#### ', '')}</h4>
      );
    } else if (content.startsWith('- ')) {
      return (
        <li className="ml-6 mb-2 text-white/80">{content.replace('- ', '')}</li>
      );
    } else {
      return (
        <p className="mb-6 text-white/80 leading-relaxed">{content}</p>
      );
    }
  };
  
  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl mb-4">Blog post not found</h2>
        <Link to="/blogs" className="text-secondary hover:text-secondary/80">
          Return to blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-secondary/80 backdrop-blur-sm text-white px-4 py-1 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-white/70 text-sm mb-6">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 rounded-xl overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
            
            <article className="prose prose-lg prose-invert prose-p:text-white/80 prose-headings:text-white prose-a:text-secondary prose-a:no-underline hover:prose-a:text-secondary/80 max-w-none">
              {post.content.map((paragraph, index) => (
                <div key={index}>
                  {renderContent(paragraph)}
                </div>
              ))}
            </article>
            
            {/* Author */}
            <div className="glass-card p-6 mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg">{post.author}</h3>
                <p className="text-white/70 mb-2">AI Innovation Specialist</p>
                <p className="text-white/60 text-sm">
                  Expert in generative AI applications and industrial innovation. Passionate about making AI accessible and practical for businesses.
                </p>
              </div>
            </div>
            
            {/* Back to Blogs */}
            <div className="mt-10 text-center">
              <Link to="/blogs" className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Our AI Solutions?</h2>
              <p className="text-white/70">
                Learn how DATAi2i can help you implement cutting-edge AI technology in your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glow-button">
                Contact Us
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium transition-all hover:border-white/40 hover:bg-white/5 hover:scale-105 focus:outline-none text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
