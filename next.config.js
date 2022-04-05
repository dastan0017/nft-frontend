const withReactSvg = require("next-react-svg");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = withReactSvg({
	include: path.resolve(__dirname, "src/assets/svg"),
	webpack(config, options) {
		return config;
	},
});

module.exports = nextConfig;
