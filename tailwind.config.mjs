/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		theme: ["light"]
	},
	theme: {
		extend: {
			fontFamily: {
				'freeSans': ['FreeSans Bold', 'sans-serif'],
			},
			dropShadow: {
				'til': '2px 2px 0 #21005D',
			},
		},
	},
	plugins: [require("daisyui")],
}
