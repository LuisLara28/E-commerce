/** @type {import('tailwindcss').Config} */

import lineClamp from "@tailwindcss/line-clamp";
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				darkGray: "#2C3E50",
				lightGray: "#BDC3C7",
				white: "#fff",
				black: "#000",
				purple: "#89216B",
				lightPurple: "#a3277f",
				peach: "#CE546D",
				lightPeach: "#eb607d",
				green: "#39841E",
				orange: "#FF922E",
				redOrange: "#eb3e13",
				customRed: "#FF0000",
				litegray: "#F5F5F5",
				blue: "#1b3070",
				lightBlue: "#3460e3",
				lightRedOrange: "#fc714e",
			},
			width: {
				"1/7": "14.2857143%",
				"2/7": "28.5714286%",
				"3/7": "42.8571429%",
				"4/7": "57.1428571%",
				"5/7": "71.4285714%",
				"6/7": "85.7142857%",
				"19/20": "95%",
			},
		},
	},
	plugins: [lineClamp],
};
