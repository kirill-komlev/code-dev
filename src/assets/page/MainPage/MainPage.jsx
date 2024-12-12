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
				></WhyUs__block>
			)
		})

		return data
	}

	return (
		<>
			<Intro>
				<h1 className='intro__title'>Обучающая платформа для старта карьеры в IТ и роста</h1>
				<p className='intro__text'>Получите знания и опыт ведущих разработчиков из крупных компаний и практикуйтесь на реальных проектах</p>
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
