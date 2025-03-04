/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [
          'Pretendard',
          'AppleGothicNedSD',
          'malgun gothic',
          'sans-serif',
        ],
      },
      colors: {
        grey: {
          DEFAULT: '#9FA9B9',
          normal: '#9FA9B9',
          'normal-hover': '#8F98A7',
          'normal-active': '#718794',
          light: '#F5F6F8',
          'light-hover': '#F1F2F5',
          'light-active': '#E1E4E9',
          dark: '#777F8B',
          'dark-hover': '#5F656F',
          'dark-active': '#484C53',
          darker: '#383B41',
        },
        red: {
          DEFAULT: '#FF3E3E',
          normal: '#FF3E3E',
          'normal-hover': '#E63838',
          'normal-active': '#CC3232',
          light: '#FFECEC',
          'light-hover': '#FFE2E2',
          'light-active': '#FFC3C3',
          dark: '#BF2F2F',
          'dark-hover': '#992525',
          'dark-active': '#731C1C',
          darker: '#591616',
        },
        blue: {
          DEFAULT: '#3E6FFF',
          normal: '#3E6FFF',
          'normal-hover': '#3864E6',
          'normal-active': '#3259CC',
          light: '#ECF1FF',
          'light-hover': '#E2E9FF',
          'light-active': '#C3D2FF',
          dark: '#2F53BF',
          'dark-hover': '#254399',
          'dark-active': '#1C3273',
          darker: '#162759',
        },
        green: {
          DEFAULT: '#00A991',
          normal: '#00A991',
          'normal-hover': '#009883',
          'normal-active': '#008774',
          light: '#E6F6F4',
          'light-hover': '#D9F2EF',
          'light-active': '#B0E4DD',
          dark: '#007F6D',
          'dark-hover': '#006557',
          'dark-active': '#004C41',
          darker: '#003B33',
        },
        yellow: {
          DEFAULT: '#DDC700',
          normal: '#DDC700',
          'normal-hover': '#C7B300',
          'normal-active': '#B19F00',
          light: '#FCF9E6',
          'light-hover': '#FAF7D9',
          'light-active': '#F4EEB0',
          dark: '#A69500',
          'dark-hover': '#857700',
          'dark-active': '#635A00',
          darker: '#4D4600',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      screens: {
        xs: '580px',
        sm: '760px',
        md: '984px',
        lg: '1344px',
        xl: '1500px',
      },
      width: {
        'screen-sm': '715px',
        'screen-md': '940px',
        'screen-lg': '1300px',
        'screen-xl': '1464px',
      },
      keyframes: {
        popup: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        popout: {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        popup: 'popup 0.3s ease-in-out',
        popout: 'popout 0.3s ease-in-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
