// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '**/*astro',
			options: {
				parser: 'astro',
			},
		},
	],
};