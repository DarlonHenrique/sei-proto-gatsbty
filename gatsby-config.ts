import type { GatsbyConfig, PluginRef } from 'gatsby'

const siteMetadata = {
	title: 'sei-proto',
	siteUrl: 'https://www.yourdomain.tld'
}

const plugins: PluginRef[] | undefined = [
	'gatsby-plugin-postcss',
	'gatsby-plugin-image',
	'gatsby-plugin-sitemap',
	'gatsby-plugin-sharp',
	'gatsby-transformer-sharp',
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'images',
			path: './src/images/'
		},
		__key: 'images'
	}
]

const config: GatsbyConfig = {
	siteMetadata,
	graphqlTypegen: true,
	plugins
}

export default config
