
import './home.scss';
import Image from 'next/image';
import Map from '../components/Map';

export default function Home() {
	return (
		<div className='home'>
			<div className="home__promo">
				<div className="home__card-big">
					<Image className="home__card-big_img" src="/advertisement.jpg" alt="image" width={100} height={100} />
				</div>
				<h3 className='home__block-title'>Популярные рестораны</h3>
				<ul className='home__list'>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/food.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кафе одуванчик</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/bar.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кафе одуванчик</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/bar2.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кафе одуванчик</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/bar3.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кафе одуванчик</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>

				</ul>
				<h3 className='home__block-title'>Интересные места</h3>
				<ul className='home__list'>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/iMax.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кинотеатр скала</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/interesting.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кинотеатр скала</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/interesting2.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кинотеатр скала</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/interesting3.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кинотеатр скала</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/interesting4.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Кинотеатр скала</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>

				</ul>
				<h3 className='home__block-title'>Классный шопинг</h3>
				<ul className='home__list'>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/store.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Секондхенд на ленина</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">6.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/store2.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Секондхенд на ленина</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">4.7</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/store3.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Секондхенд на ленина</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">9.9</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/store4.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Секондхенд на ленина</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">9.9</div>
						</div>
					</li>
					<li className='home__item'>
						<div className="home__card">
							<Image className="home__card_img" src="/store4.webp" alt="image" width={100} height={100} />
							<div className="home__card_title">Секондхенд на ленина</div>
							<div className="home__card_timeWork">Время работы : круглосуточно</div>
							<div className="home__card_addres">Улица ленина 12. к.1.с.2</div>
							<div className="home__card_quality">9.9</div>
						</div>
					</li>
				</ul>
			</div>

			<div className="home__map">
				<Map />
			</div>

		</div>
	)
}
