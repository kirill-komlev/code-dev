import { Link } from 'react-router-dom'

import Intro from '../../components/Intro/Intro'

import { logo } from '../../../../config'
import { why_us, courses } from '../../data/data'
import { articles } from '../../data/articles'
import { mentors } from '../../data/mentors'

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
						{courses.slice(0, 6).map((item, index) => (
							<div
								className='courses__block'
								key={index}
							>
								<div className={'courses__block-bg ' + item.type}>
									<small>{item.hours}</small>
									{/* <img
										className='courses__block-img'
										src={new URL('/public/html.png', import.meta.url).href}
										alt=''
									/> */}
								</div>
								<div className='courses__block-main'>
									<h4 className='courses__block-title'>{item.title}</h4>
									<p className='courses__block-text'>{item.text}</p>
									<Link
										to={item.link}
										className='courses__block-link'
									>
										<button className='courses__block-button button button--small'>Подробнее</button>
									</Link>
								</div>
							</div>
						))}
					</div>
					<Link
						className='courses__link'
						to='/courses'
					>
						<button className='courses__button button button--transparent'>Все курсы</button>
					</Link>
				</div>
			</section>

			<section className='articles'>
				<div className='articles__inner container'>
					<h2 className='articles__title'>Статьи</h2>
					<p className='articles__text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsa? Accusantium, asperiores? Nam odit vitae tenetur, obcaecati eveniet magni officia cumque numquam
						quis pariatur ratione tempore veniam laboriosam explicabo perferendis.
					</p>
					<div className='articles__blocks'>
						{articles.slice(0, 4).map((item, index) => (
							<Link
								className='articles__block'
								to={`/articles/${index}`}
								key={index}
							>
								<img
									src={item.img}
									alt=''
									className='articles__block-img'
								/>
								<div className='articles__block-main'>
									<p>
										{item.author} * {item.date}
									</p>
									<h3>{item.title}</h3>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className='mentors'>
				<div className='mentors__inner container'>
					<h2 className='mentors__title'>Наши наставники</h2>
					<p className='mentors__text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae maxime expedita minus placeat culpa iusto! Dolorum, enim suscipit deserunt, corrupti magni
						exercitationem illo quis, porro autem harum perspiciatis quidem consequatur.
					</p>
					<div className='mentors__blocks'>
						{mentors.slice(0, 3).map((item, index) => (
							<div
								className='mentors__block'
								key={index}
							>
								<div className='mentors__block-header'>
									<img
										src={new URL(item.img, import.meta.url).href}
										alt=''
										className='mentors__block-header__img'
									/>
									<div className='mentors__block-header__text'>
										<h4 className='mentors__block-header__surname'>{item.surname}</h4>
										<h3 className='mentors__block-header__name'>{item.name}</h3>
									</div>
								</div>
								<div className='mentors__block-achievements'>
									{item.achievements.map((item, index) => (
										<p
											className='mentors__block-achievement'
											key={index}
										>
											{item}
										</p>
									))}
								</div>

								<div className='mentors__block-experience'>
									<p className='mentors__block-experience__work'>Опыт работы: {item.experience.work}</p>
									<p className='mentors__block-experience__teaching'>Опыт преподавания: {item.experience.teaching}</p>
								</div>

								<Link
									className='mentors__block-link'
									to={`/mentors/${index}`}
								>
									<button className='mentors__block-button button'>Подробнее</button>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
