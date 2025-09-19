import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Subtle blue colors
				blue: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554'
				},
				sky: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49'
				}
			},
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
				mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Code', 'Droid Sans Mono', 'Courier New', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fadeInUp': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'fadeInLeft': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(-60px) scale(0.9)',
						filter: 'blur(8px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'fadeInRight': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(60px) scale(0.9)',
						filter: 'blur(8px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'scaleInBounce': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.3) rotate(-10deg)',
						filter: 'blur(20px)'
					},
					'50%': { 
						opacity: '0.8', 
						transform: 'scale(1.1) rotate(2deg)',
						filter: 'blur(2px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotate(0deg)',
						filter: 'blur(0)'
					}
				},
				'pulseGlow': {
					'0%': { 
						opacity: '1', 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(255, 165, 0, 0.4)'
					},
					'50%': { 
						opacity: '0.9', 
						transform: 'scale(1.02)',
						boxShadow: '0 0 20px 10px rgba(255, 165, 0, 0.2)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(255, 165, 0, 0)'
					}
				},
				'floatMagic': {
					'0%': { 
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'drop-shadow(0 0 0 rgba(255, 165, 0, 0))'
					},
					'25%': { 
						transform: 'translateY(-8px) rotate(1deg)',
						filter: 'drop-shadow(0 5px 15px rgba(255, 165, 0, 0.3))'
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(0deg)',
						filter: 'drop-shadow(0 10px 25px rgba(255, 165, 0, 0.4))'
					},
					'75%': { 
						transform: 'translateY(-8px) rotate(-1deg)',
						filter: 'drop-shadow(0 5px 15px rgba(255, 165, 0, 0.3))'
					},
					'100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'drop-shadow(0 0 0 rgba(255, 165, 0, 0))'
					}
				},
				'gradientShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'morphing': {
					'0%': { 
						borderRadius: '20px',
						transform: 'scale(1) rotate(0deg)'
					},
					'25%': { 
						borderRadius: '50px 20px 50px 20px',
						transform: 'scale(1.05) rotate(1deg)'
					},
					'50%': { 
						borderRadius: '20px 50px 20px 50px',
						transform: 'scale(1.1) rotate(0deg)'
					},
					'75%': { 
						borderRadius: '50px 20px 50px 20px',
						transform: 'scale(1.05) rotate(-1deg)'
					},
					'100%': { 
						borderRadius: '20px',
						transform: 'scale(1) rotate(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeInUp': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fadeInLeft': 'fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fadeInRight': 'fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'scaleInBounce': 'scaleInBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'pulseGlow': 'pulseGlow 3s ease-in-out infinite',
				'floatMagic': 'floatMagic 4s ease-in-out infinite',
				'gradientShift': 'gradientShift 4s ease infinite',
				'morphing': 'morphing 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
