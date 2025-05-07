import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaInstagram, FaHeart, FaComment } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content: "Found my perfect dress with incredible service. The staff made me feel like family!",
    rating: 5,
    image: "/images/1.webp"
  },
  {
    name: "Maria Rodriguez",
    role: "Quinceañera",
    content: "My dream dress for my special day. Thank you About Love Bridal!",
    rating: 5,
    image: "/images/2.webp"
  },
  {
    name: "Emily Davis",
    role: "Mother of the Bride",
    content: "Exceptional selection and attention to detail. Highly recommend!",
    rating: 5,
    image: "/images/3.webp"
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
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent"></div>
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
  // Mock Instagram posts with local image paths
  const instagramPosts = [
    {
      id: 1,
      image: '/images/300.webp',
      likes: 124,
      comments: 23,
      caption: 'Stunning bride in our newest A-line wedding dress #BridalFashion'
    },
    {
      id: 2,
      image: '/images/167.webp',
      likes: 156,
      comments: 18,
      caption: 'Elegant simplicity that makes a statement #WeddingGown'
    },
    {
      id: 3,
      image: '/images/201.webp',
      likes: 203,
      comments: 35,
      caption: 'Quinceañera perfection in every detail #QuinceañeraStyle'
    },
    {
      id: 4,
      image: '/images/375.webp',
      likes: 189,
      comments: 27,
      caption: 'Timeless romance for your special day #DreamDress'
    },
    {
      id: 5,
      image: '/images/285.webp',
      likes: 167,
      comments: 19,
      caption: 'Modern bride, classic elegance #BridalCollection'
    },
    {
      id: 6,
      image: '/images/304.webp',
      likes: 142,
      comments: 16,
      caption: 'Find your perfect gown at About Love Bridal #SayYesToTheDress'
    },
    {
      id: 7,
      image: '/images/102.webp',
      likes: 178,
      comments: 24,
      caption: 'Special occasions call for extraordinary dresses #EveningGown'
    },
    {
      id: 8,
      image: '/images/321.webp',
      likes: 215,
      comments: 31,
      caption: 'New arrivals just in! Schedule your appointment today #BridalBoutique'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">Follow Our Journey</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-8"></div>
          
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group aspect-square rounded-lg overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={`Instagram post: ${post.caption}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Instagram icon */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-custom w-4 h-4" />
              </div>
              
              {/* Caption and engagement metrics */}
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-white">
                    <FaHeart className="w-3.5 h-3.5" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <FaComment className="w-3.5 h-3.5" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
                <p className="text-white text-xs line-clamp-2">{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/aboutlovebridal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-custom text-white rounded-full hover:bg-customdark transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection, InstagramFeed };