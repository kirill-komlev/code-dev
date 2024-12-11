import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logo, logo_full, name } from '../../../../config.js'

import Modal from '../Modal/Modal.jsx'

export const useScrollbarWidth = () => {
	const didCompute = React.useRef(false)
	const widthRef = React.useRef(0)

	if (didCompute.current) return widthRef.current

	// Creating invisible container
	const outer = document.createElement('div')
	outer.style.visibility = 'hidden'
	outer.style.overflow = 'scroll' // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
	document.body.appendChild(outer)

	// Creating inner element and placing it in the container
	const inner = document.createElement('div')
	outer.appendChild(inner)

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer)

	didCompute.current = true
	widthRef.current = scrollbarWidth

	return scrollbarWidth
}

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)

	function getScroll() {
		let div = document.createElement('div')

		div.style.overflowY = 'scroll'
		div.style.width = '50px'
		div.style.height = '50px'

		// мы должны вставить элемент в документ, иначе размеры будут равны 0
		document.body.append(div)
		let scrollWidth = div.offsetWidth - div.clientWidth

		div.remove()

		return scrollWidth
	}

	function openModal() {
		let pagePosition = window.scrollY
		let modal = document.getElementById('modal')

		document.body.classList.add('modal-open')
		document.body.style.marginRight = getScroll() + 'px'

		modal.style.display = 'block'
		modal.style.top = pagePosition + 'px'
		modal.style.marginRight = getScroll() + 'px'
	}

	function closeModal() {
		document.body.classList.remove('modal-open')
		document.body.style.marginRight = 0

		modal.style.display = 'none'
		modal.style.top = 0
	}

	return (
		<>
			<header className='header'>
				<div className='header__inner container'>
					<NavLink
						className='header__logo'
						to='/'
					>
						<img
							src={logo_full}
							alt={name}
							className='header__logo-image'
							height='32px'
						/>
					</NavLink>
					<nav className='header__menu hidden-mobile'>
						<ul className='header__menu-list'>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/courses'
								>
									Курсы
								</NavLink>
								<ul>
									<li>
										<NavLink to='/courses/html-css'>HTML и CSS. Основные понятия</NavLink>
									</li>
									<li>
										<NavLink to='/courses/bem'>HTML и CSS. БЭМ методология</NavLink>
									</li>
									<li>
										<NavLink to='/courses/adaptive'>HTML и CSS. Адаптивная вёрстка</NavLink>
									</li>
									<li>
										<NavLink to='/courses/javascript'>JavaScript. Разработка веб-интерфейсов</NavLink>
									</li>
									<li>
										<NavLink to='/courses/react'>React. Разработка сложных приложений</NavLink>
									</li>
									<li>
										<NavLink to='/courses/node-js'>NodeJS. Профессиональная разработка REST API</NavLink>
									</li>
									<li>
										<NavLink to='/courses/git'>GIT. Основы системы контроля версий</NavLink>
									</li>
								</ul>
							</li>
							<li className='header__menu-item'>
								<NavLink
									to='/articles'
									className='header__menu-link'
								>
									Статьи
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									to='/mentors'
									className='header__menu-link'
								>
									Наставники
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									to='/about-company'
									className='header__menu-link'
								>
									Отзывы
								</NavLink>
							</li>
						</ul>
					</nav>
					<button
						className='header__burger-button button__burger-menu burger-button visible-mobile'
						onClick={() => {
							setHeaderModal(true)
							openModal()
						}}
					/>
				</div>

				<Modal
					className='mobile-overlay visible-mobile'
					open={headerModal}
				>
					<div className='mobile-overlay__close-button-wrapper'>
						<button
							className='mobile-overlay__close-button cross-button'
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						/>
					</div>
					<div className='mobile-overlay__body'>
						<ul className='mobile-overlay__body-list'>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Главная
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/articles'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Статьи
								</NavLink>
							</li>
							{/* <li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/video'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Видео
								</NavLink>
							</li> */}
						</ul>
					</div>
				</Modal>
			</header>
		</>
	)
}