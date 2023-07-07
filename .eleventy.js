const svgContents = require("eleventy-plugin-svg-contents"),
	yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(svgContents);

	eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
	eleventyConfig.addWatchTarget('./styles/tailwind.css')

	eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
	eleventyConfig.addPassthroughCopy("src/images")

	eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	};
};