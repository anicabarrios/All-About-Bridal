import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaInstagram } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content: "Found my perfect dress with incredible service. The staff made me feel like family!",
    rating: 5,
    image: "/images/1.jpg"
  },
  {
    name: "Maria Rodriguez",
    role: "Quinceañera",
    content: "My dream dress for my special day. Thank you About Love Bridal!",
    rating: 5,
    image: "/images/2.jpg"
  },
  {
    name: "Emily Davis",
    role: "Mother of the Bride",
    content: "Exceptional selection and attention to detail. Highly recommend!",
    rating: 5,
    image: "/images/3.jpg"
  }
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-custom mx-auto"></div>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
              <FaQuoteLeft className="text-3xl text-custom/20 absolute top-8 left-8" />
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8 absolute inset-0'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xl text-gray-700 italic mb-8 px-8">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-custom w-5 h-5" />
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-custom font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    index === activeIndex 
                      ? 'bg-custom scale-110' 
                      : 'bg-gray-300 hover:bg-custom/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        const data = await response.json();
        setPosts(data.data.slice(0, 8));
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Follow Our Journey</h2>
          <div className="w-24 h-1 bg-custom mx-auto mb-8"></div>
          <a 
            href="https://www.instagram.com/aboutlovebridal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl text-custom hover:text-customdark transition-colors"
          >
            <FaInstagram className="text-2xl" />
            @aboutlovebridal
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group aspect-square rounded-lg overflow-hidden relative"
            >
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <FaInstagram className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection, InstagramFeed };