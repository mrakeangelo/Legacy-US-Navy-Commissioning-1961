/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0B2545',
        'gold-premium': '#E1B352',
        'off-white': '#FAFAFA',
        'cream': '#F8F6F0',
        'charcoal': '#2C3E50',
        'silver': '#BDC3C7',
        'accent-blue': '#1E3A8A',
        'warm-gold': '#D4AF37',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cinzel', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2.5rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225, 179, 82, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(225, 179, 82, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E1B352 0%, #D4AF37 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0B2545 0%, #1E3A8A 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(11, 37, 69, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent, rgba(225, 179, 82, 0.2), transparent)',
      },
      boxShadow: {
        'luxury': '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 30px rgba(225, 179, 82, 0.3)',
        'inner-luxury': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}