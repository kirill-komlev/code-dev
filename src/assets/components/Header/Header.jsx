import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logo, logo_full, name } from '../../../../config.js'

import Modal from '../Modal/Modal.jsx'

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)

	function openModal() {
		let pagePosition = window.scrollY
		let modal = document.getElementById('modal')

		document.body.classList.add('modal-open')
		document.body.style.marginRight = width + 'px'

		modal.style.display = 'block'
		modal.style.top = pagePosition + 'px'
		modal.style.marginRight = width + 'px'
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
								<NavLink className='header__menu-link'>Статьи</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink className='header__menu-link'>Наставники</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink className='header__menu-link'>Отзывы</NavLink>
							</li>
						</ul>
					</nav>
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
									to='/news'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Новости
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
