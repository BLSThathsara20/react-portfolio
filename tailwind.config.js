/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0A0C0B',
          raised: '#121513',
          muted: '#1A1F1C',
          panel: '#0F1210',
          ink: '#0A0C0B',
          deep: '#050605',
          light: '#F2F5F0',
        },
        ink: {
          DEFAULT: '#F2F5F0',
          soft: 'rgba(242, 245, 240, 0.72)',
          muted: 'rgba(242, 245, 240, 0.48)',
          faint: 'rgba(242, 245, 240, 0.28)',
          dark: '#0A0C0B',
        },
        accent: {
          DEFAULT: '#C8F542',
          hover: '#D6FF6A',
          soft: 'rgba(200, 245, 66, 0.14)',
          mist: 'rgba(200, 245, 66, 0.08)',
          dim: '#8FB01E',
        },
        background: {
          DEFAULT: '#0A0C0B',
          lighter: '#121513',
          card: '#121513',
        },
        border: {
          DEFAULT: 'rgba(242, 245, 240, 0.1)',
          hover: 'rgba(242, 245, 240, 0.2)',
          active: 'rgba(200, 245, 66, 0.55)',
        },
        text: {
          primary: '#F2F5F0',
          secondary: 'rgba(242, 245, 240, 0.72)',
          tertiary: 'rgba(242, 245, 240, 0.48)',
          muted: 'rgba(242, 245, 240, 0.28)',
          inverse: '#0A0C0B',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        floaty: 'floaty 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.85 },
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)',
        lift: '0 28px 80px rgba(0, 0, 0, 0.45)',
        signal: '0 0 0 1px rgba(200, 245, 66, 0.35), 0 18px 50px rgba(200, 245, 66, 0.08)',
      },
      backgroundImage: {
        'signal-mesh':
          'radial-gradient(ellipse 70% 55% at 15% 20%, rgba(200, 245, 66, 0.16), transparent 55%), radial-gradient(ellipse 55% 45% at 85% 10%, rgba(90, 220, 200, 0.08), transparent 50%), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(200, 245, 66, 0.06), transparent 55%)',
        grain:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
