
import './home.scss';
import Map from '../components/Map';

export default function Home() {
	return (
		<div className='home'>
			<div className="home__promo">
				<ul className='home__list'>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
					<li className='home__item'>
						<div className="home__card"></div>
					</li>
				</ul>
			</div>

			<div className="home__map">
				<Map />
			</div>

		</div>
	)
}
