import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logo, logo_full, name } from '../../../../config.js'

import Modal from '../Modal/Modal.jsx'

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
						<NavLink
							className='mobile-overlay__link'
							to='/'
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						>
							<img
								src={logo_full}
								alt='CodeDev'
								className='mobile-overlay__logo'
								height='32px'
							/>
						</NavLink>
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
									to='/courses'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Курсы
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/html-css'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- HTML и CSS. Основные понятия
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/bem'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- HTML и CSS. БЭМ методология
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/adaptive'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- HTML и CSS. Адаптивная вёрстка
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/javascript'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- JavaScript. Разработка веб-интерфейсов
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/react'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- React. Разработка сложных приложений
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/node-js'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- NodeJS. Профессиональная разработка REST API
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/courses/git'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									- GIT. Основы системы контроля версий
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
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/mentors'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Наставники
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/about-company'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Отзывы
								</NavLink>
							</li>
						</ul>
					</div>
				</Modal>
			</header>
		</>
	)
}
