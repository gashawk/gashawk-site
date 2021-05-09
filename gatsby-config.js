module.exports = {
	siteMetadata: {
		title: `Gäshawk`,
		description: `Our passion is the great outdoors. Our calling is creating solutions for it.`,
		author: `@saejhi`,
		siteUrl: `https://gashawkrv.com/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gashawk-site`,
				short_name: `gashawk`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#062c5d`,
				display: `minimal-ui`,
				icon: `src/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-plugin-html-attributes",
			options: {
				lang: "en",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: "UA-150731209-4",
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-favicon`,
		`gatsby-plugin-remove-trailing-slashes`,
		`gatsby-plugin-offline`,
	],
};
