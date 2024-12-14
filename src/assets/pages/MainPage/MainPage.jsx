import { Link } from 'react-router-dom'

import Intro from '../../components/Intro/Intro'

import { logo } from '../../../../config'
import { why_us, courses } from '../../data/data'

export default function MainPage() {
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
						{why_us.map((item, index) => (
							<div
								className='why-us__block'
								key={index}
							>
								<h3 className='why-us__block-title'>{item.title}</h3>
								<p className='why-us__block-text'>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='courses'>
				<div className='courses__inner container'>
					<h2 className='courses__title'>Наши курсы</h2>
					<p className='courses__text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint accusantium expedita, odit corporis ipsam necessitatibus dolorem molestiae, assumenda deserunt dolor,
						recusandae laboriosam quas earum repellat facilis minima? Corporis, non dolorem?
					</p>
					<div className='courses__blocks'>
						{courses.map((item, index) => (
							<div
								className='courses__block'
								key={index}
							>
								<div className={'courses__block-bg ' + item.bg}>
									<small>123</small>
								</div>
								<h4 className='courses__block-title'>{item.title}</h4>
								<p className='courses__block-text'>{item.text}</p>
								<Link
									to={item.link}
									className='courses__block-link'
								>
									<button className='courses__block-button button button--small'>Подробнее</button>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
