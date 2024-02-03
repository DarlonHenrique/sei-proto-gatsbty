import { graphql, PageProps } from 'gatsby'
import * as React from 'react'

const TypegenPage = ({ data }: PageProps) => {
	return (
		<main>
			<p>Site title: TODO</p>
			<hr />
			<p>Query Result:</p>
			<pre>
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>
		</main>
	)
}

export default TypegenPage

export const query = graphql`
	query TypegenPage {
		site {
			siteMetadata {
				title
			}
		}
	}
`
