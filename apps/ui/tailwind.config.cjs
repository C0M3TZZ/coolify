const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx,svelte}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
	important: true,
	daisyui: {
		themes: [
			{
				coollabs: {
					"base-100": "#323232",
					"base-200": "#242424",
					"base-300": "#181818",
					"primary": "#E35205",
					"primary-content": "#fff",
					"secondary": "#343232",
					"accent": "#343232",
					"neutral": "#272626",
					"info": "#0284c7",
					"success": "#16A34A",
					"warning": "#FFFF00",
					"error": "#DC2626",
					"--rounded-btn": "0.3rem",
					"--btn-text-case": "normal"
				},
			}
		],
	},
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				"applications": "#E35205",
				"databases": "#E35205",
				"databases-100": "#EF6C00",
				"destinations": "#E35205",
				"sources": "#E35205",
				"services": "#E35205",
				"settings": "#f97316",
				"iam": "#C026D3",
				coollabs: '#E35205',
				'coollabs-100': '#EF6C00',
				coolblack: '#FFFFFF',
				'coolgray-100': '#fafafa',
				'coolgray-200': '#fafafa',
				'coolgray-300': '#f5f5f5',
				'coolgray-400': '#e5e5e5',
				'coolgray-500': '#d4d4d4',
				'hover-primary': '#FEF9F7'
			},
			backgroundImage: {
				'Iserv': "url('https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/75625360_2708828382511763_3205029120262012928_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFCLBL6ZQxLhfOgVvMrFcolOBRkihhNDX44FGSKGE0Nfp3aQDOLj78-yM8V_Kcqny9DAD7itLnLm5FN5xsYyABa&_nc_ohc=3Eq69vk6jyYAX8jXgul&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCqKedcDdLkeX9S6_lP8_FnTQkfU3se2BFWPiw-A43tQw&oe=64212ED8')"
			}
		}
	},
	variants: {
		scrollbar: ['dark'],
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-scrollbar'), require('daisyui'), require("@tailwindcss/typography")]
};
