/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          purple: '#a855f7',
          pink: '#ec4899',
          yellow: '#fbbf24',
          blue: '#3b82f6',
          green: '#10b981',
        },
        ethereal: {
          dark: '#0f0f10',
          darker: '#000000',
          light: '#f8fafc',
          gray: '#374151',
        }
      },
      fontFamily: {
        cosmic: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(168, 85, 247, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'ethereal-gradient': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #fbbf24 100%)',
        'space-gradient': 'linear-gradient(135deg, #0f0f23 0%, #2d1b69 50%, #0f0f23 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        'golden': '1.618',
      },
    },
  },
  plugins: [],
};