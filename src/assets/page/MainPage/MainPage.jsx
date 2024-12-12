import { Link } from 'react-router-dom'

import Intro from '../../components/Intro/Intro'

import { logo } from '../../../../config'
import { why_us } from '../../data/data'

export default function MainPage() {
	function WhyUs__block({ data }) {
		return (
			<>
				<div className='why-us__block'>
					<h3 className='why-us__block-title'>{data.title}</h3>
					<p className='why-us__block-text'>{data.text}</p>
				</div>
			</>
		)
	}

	function WhyUs__block__render() {
		let data = []
		why_us.forEach(element => {
			data.push(
				<WhyUs__block
					key={element.title}
					data={element}
				/>
			)
		})

		return data
	}

	return (
		<>
			<Intro>
				<h1 className='intro__title'>
					Обучающая платформа
					<br />
					для старта <mark>карьеры в IТ</mark>
				</h1>
				<p className='intro__text'>
					Получите знания и опыт ведущих разработчиков из крупных компаний
					<br />и практикуйтесь на реальных проектах
				</p>
				<img
					src={logo}
					alt=''
					className='intro__logo'
					height='50%'
				/>
				<Link
					className='intro__link'
					to='/courses'
				>
					<button className='intro__button button button--transparent'>Перейти к курсам</button>
				</Link>
			</Intro>
			<section className='why-us'>
				{/* <img
					src={new URL('/public/icons/ru-react.svg', import.meta.url).href}
					alt=''
					className='why-us__img react'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-git.svg', import.meta.url).href}
					alt=''
					className='why-us__img git'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-js.svg', import.meta.url).href}
					alt=''
					className='why-us__img js'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-mobx.svg', import.meta.url).href}
					alt=''
					className='why-us__img mobx'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-node.svg', import.meta.url).href}
					alt=''
					className='why-us__img node'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-redux.svg', import.meta.url).href}
					alt=''
					className='why-us__img redux'
					width='90px'
				/>
				<img
					src={new URL('/public/icons/ru-vue.svg', import.meta.url).href}
					alt=''
					className='why-us__img vue'
					width='90px'
				/> */}
				<div className='why-us__inner container'>
					<h2 className='why-us__title'>Почему выбирают именно нашу онлайн-школу?</h2>
					<p className='why-us__text'>
						Наша онлайн-школа предлагает качественное обучение веб-разработке, которое позволит вам стать востребованным специалистом в этой области. Мы гарантируем, что наши
						выпускники получают необходимые знания и навыки для успешной карьеры.
					</p>
					<div className='why-us__blocks'>
						<WhyUs__block__render />
					</div>
				</div>
			</section>
		</>
	)
}
