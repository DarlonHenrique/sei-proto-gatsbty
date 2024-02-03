import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<h1>Home Page</h1>
		</main>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
