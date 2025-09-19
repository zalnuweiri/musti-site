import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'music', 'gallery', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Mustafa Idris
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'music', label: 'Music' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'booking', label: 'Booking' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-yellow-400 bg-purple-800/30'
                        : 'text-white hover:text-purple-300 hover:bg-purple-800/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-300 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'music', label: 'Music' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'booking', label: 'Booking' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-300 hover:bg-purple-800/20 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pic2.JPG')",

          }}
        >
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
                MUSTAFA
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                IDRIS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Sudanese American rapper crafting ethereal soundscapes that blend conscious lyricism with cosmic vibes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={() => scrollToSection('music')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Listen Now
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Book Shows
              </button>
            </div>
          </div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 20}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5086CE] to-[#C1182B]  bg-clip-text text-transparent">
                  About The Artist
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5086CE] to-[#C1182B] rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Born from the intersection of cultures and consciousness, Mustafa Idris represents 
                  a new wave of hip-hop that transcends traditional boundaries. His Sudanese-American 
                  heritage infuses his music with a unique perspective that resonates across communities.
                </p>
                
                <p>
                  Drawing inspiration from lyrical legends like Lupe Fiasco and Joey Bada$$, 
                  Mustafa crafts verses that challenge the mind while moving the soul. His sound 
                  exists in the ethereal space between boom-bap tradition and cosmic innovation.
                </p>
                
                <p>
                  Each track is a journey through consciousness, exploring themes of identity, 
                  spirituality, and social awareness wrapped in hypnotic beats that transport 
                  listeners to otherworldly dimensions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {['Conscious Rap', 'Psychedelic Hip-Hop', 'Neo-Soul', 'Alternative Rap'].map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-purple-800/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550640227-95cb87f69ae9"
                  alt="Mustafa Idris"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Musical Universe
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the cosmic soundscapes and conscious verses that define the Mustafa Idris experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmic Consciousness",
                type: "Latest Single",
                description: "A journey through space and mind, exploring the intersection of spirituality and sound",
                image: "https://images.unsplash.com/photo-1574882225022-9e0e447e9662"
              },
              {
                title: "Urban Prophecies",
                type: "EP",
                description: "Five tracks that paint the story of city life through an ethereal lens",
                image: "https://images.unsplash.com/photo-1574882225022-9e0e447e9662"
              },
              {
                title: "Sahara Dreams",
                type: "Album",
                description: "A full-length exploration of heritage, identity, and the universal human experience",
                image: "https://images.unsplash.com/photo-1574882225022-9e0e447e9662"
              }
            ].map((track, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-400 font-medium">{track.type}</span>
                    <span className="text-xs text-gray-500">2024</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {track.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {track.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4">
                    <button className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Listen Now
                    </button>
                    <button className="p-2 border border-purple-500/30 text-purple-400 rounded-lg hover:border-purple-400 hover:text-purple-300 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Streaming Platforms */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Available on all platforms</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Spotify', 'Apple Music', 'SoundCloud', 'YouTube', 'Bandcamp'].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-3 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Visual Aesthetics
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive into the psychedelic visual world that complements the cosmic sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1585758942414-7a30b116f2af",
                title: "Ethereal Flows",
                category: "Abstract Art"
              },
              {
                image: "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393",
                title: "Cosmic Visions",
                category: "Space Art"
              },
              {
                image: "https://images.unsplash.com/photo-1574882225022-9e0e447e9662",
                title: "Studio Vibes",
                category: "Behind the Scenes"
              },
              {
                image: "https://images.unsplash.com/photo-1631208700426-7028f32dd451",
                title: "Live Energy",
                category: "Performance"
              },
              {
                image: "https://images.unsplash.com/photo-1550640227-95cb87f69ae9",
                title: "Urban Essence",
                category: "Portrait"
              },
              {
                image: "https://images.unsplash.com/photo-1585758942414-7a30b116f2af",
                title: "Fluid Dreams",
                category: "Digital Art"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm text-purple-400 font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                  Book Live Shows
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Ready to bring the cosmic energy to your venue? Mustafa Idris delivers 
                  unforgettable live performances that transport audiences through 
                  consciousness-expanding musical journeys.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-yellow-400">Performance Types</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Festival Sets</li>
                      <li>• Club Shows</li>
                      <li>• Private Events</li>
                      <li>• Corporate Events</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-yellow-400">What's Included</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Full Live Setup</li>
                      <li>• Professional Sound</li>
                      <li>• Visual Effects</li>
                      <li>• Meet & Greet</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-purple-600 text-white font-semibold rounded-full hover:from-yellow-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Booking Info
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300">
                  View Press Kit
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631208700426-7028f32dd451"
                  alt="Live Performance"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Connect with the Universe
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join the cosmic journey and stay updated with the latest releases, shows, and ethereal experiences
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-md mx-auto">
              {[
                { name: 'Instagram', icon: '📸' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Spotify', icon: '🎵' },
                { name: 'YouTube', icon: '📺' }
              ].map((social) => (
                <button
                  key={social.name}
                  className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-400/40 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm text-gray-400">{social.name}</span>
                </button>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Stay in the Loop</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Mustafa Idris
            </h3>
            
            <p className="text-gray-400 max-w-md mx-auto">
              Crafting ethereal soundscapes that transcend dimensions and consciousness
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <button className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-purple-400 transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-purple-400 transition-colors duration-300">Press Kit</button>
              <button className="hover:text-purple-400 transition-colors duration-300">Management</button>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-600 text-sm">
                © 2024 Mustafa Idris. All rights reserved. Made with cosmic energy ✨
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;