import type { HeadFC } from 'gatsby'
import * as React from 'react'

export const Head: HeadFC = () => <title>Home Page</title>

export default function IndexPage() {
	return (
		<main>
			<h1>Home Page</h1>
		</main>
	)
}
