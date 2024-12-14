import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import './assets/styles/style.scss'

import Header from './assets/components/Header/Header'

import MainPage from './assets/pages/MainPage/MainPage'

export default function App() {
	return (
		<>
			<Suspense fallback={<p>загрузка</p>}>
				<Routes>
					<Route
						exact
						path='*'
						element={<Header />}
					/>
				</Routes>

				<main>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<MainPage></MainPage>
								</>
							}
						/>
						<Route path='courses'>
							<Route
								exact
								index
								element={
									<>
										страница курсы
										<br />
										<Link to='html-css'>- html css</Link>
										<br />
										<Link to='javascript'>- javascript</Link>
										<br />
										<Link to='php'>- php</Link>
										<br />
										<Link to='git'>- git</Link>
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='html-css'
								element={
									<>
										страница html css
										<br />
										<Link to='bem'>- БЭМ</Link>
										<br />
										<Link to='adaptive'>- адаптив</Link>
										<br />
										<Link to='semantic'>- семантика</Link>
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='bem'
								element={
									<>
										страница бэм
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='adaptive'
								element={
									<>
										страница adaptive
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='semantic'
								element={
									<>
										страница semantic
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='javascript'
								element={
									<>
										страница javascript
										<br />
										<Link to='react'>- React</Link>
										<br />
										<Link to='node-js'>- NodeJs</Link>
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='react'
								element={
									<>
										страница React
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='node-js'
								element={
									<>
										страница NodeJs
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
							<Route
								exact
								path='git'
								element={
									<>
										страница git
										<br />
										<Link to='..'>- назад</Link>
									</>
								}
							/>
						</Route>
					</Routes>
				</main>

				<Routes>
					<Route
						exact
						path='*'
						element={<footer className='footer'>подвал</footer>}
					/>
				</Routes>
			</Suspense>
		</>
	)
}
