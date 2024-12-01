import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import './assets/styles/style.scss'

export default function App() {
	return (
		<>
			<Suspense fallback={<p>загрузка</p>}>
				<Routes>
					<Route
						exact
						path='*'
						element={<header className='header'>шапка</header>}
					/>
				</Routes>

				<main>456</main>

				<footer></footer>
			</Suspense>
		</>
	)
}
