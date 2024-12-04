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

				<main>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									Главная
									<br />
									<Link to='courses'>- курсы</Link>
									<br />
									<Link to='articles'>- статьи</Link>
									<br />
									<Link to='mentors'>- наставники</Link>
									<br />
									<Link to='about-company'>- отзыв о компании</Link>
									<br />
									<Link to='sign-in'>- регистрация</Link>
									<br />
									<Link to='sign-up'>- авторизация</Link>
									<br />
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
							<Route path='html-css'>
								<Route
									exact
									index
									element={
										<>
											страница html css
											<br />
											<Link to='бэм'>- БЭМ</Link>
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
									path='бэм'
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
							</Route>
							<Route path='javascript'>
								<Route
									exact
									index
									element={
										<>
											страница javascript
											<br />
											<Link to='react'>- React</Link>
											<br />
											<Link to='nodejs'>- NodeJs</Link>
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
									path='nodejs'
									element={
										<>
											страница NodeJs
											<br />
											<Link to='..'>- назад</Link>
										</>
									}
								/>
							</Route>
							<Route
								exact
								path='php'
								element={
									<>
										страница php
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
