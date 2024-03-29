import { HeadFC, Link } from 'gatsby'
import * as React from 'react'

export const Head: HeadFC = () => <title>Not found</title>

export default function NotFoundPage() {
	return (
		<main>
			<h1>Page not found</h1>
			<p>
				Sorry 😔, we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === 'development' ? (
					<>
						<br />
						Try creating a page in <code>src/pages/</code>.
						<br />
					</>
				) : null}
				<br />
				<Link to='/'>Go home</Link>.
			</p>
		</main>
	)
}
