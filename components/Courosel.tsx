"use client";
import { useState, useEffect } from 'react';

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "Vishal Printers Pvt. Ltd.",
      description: "Experience the best in printing technology with us",
      image:"/img-4.jpg" // You'll need to add these images to your public folder
    },
    {
      title: "Vishal Printers Pvt. Ltd.",
      description: "Your one-stop solution for all printing needs",
      image: "/img-5.jpg"
    },
    {
      title: "Vishal Printers Pvt. Ltd.",
      description: "Quality printing services that exceed expectations",
      image: "/img-6.jpg"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-300">
      
      {/* Carousel */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] pt-2 max-w-full mb-8 sm:mb-12 md:mb-16">
        <div className="overflow-hidden rounded-lg shadow-2xl h-full">
          <div 
            className="flex h-full transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full flex flex-col">
                <div 
                  className="relative flex-grow bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-black">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-center pt-2 md:pt-4">{feature.title}</h1>
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 pb-1 sm:pb-2 text-center">We Print your Thoughts</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows - Responsive size and position */}
        <button 
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-r-lg hover:bg-black/70 text-base sm:text-xl md:text-2xl"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-l-lg hover:bg-black/70 text-base sm:text-xl md:text-2xl"
          aria-label="Next slide"
        >
          &#10095;
        </button>
        
        {/* Dots indicator - Improved for touch devices */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-0 right-0 flex justify-center space-x-3 sm:space-x-4">
          {features.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)} 
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}