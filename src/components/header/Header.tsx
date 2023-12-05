"use client"

import './header.scss';
import { useState } from 'react';
import Link from 'next/link';


const Header = () => {

	const [dropdownRestaurants, setDropdownRestaurants] = useState(false);
	const [dropdownEntertainments, setDropdownEntertainments] = useState(false);
	const [dropdownShopping, setDropdownShopping] = useState(false);

	const handleDropdownRestaurants = () => {
		setDropdownRestaurants(!dropdownRestaurants);
	}
	let dropdownStyleRestaurants = "header__dropdown-container";
	dropdownRestaurants ? dropdownStyleRestaurants = "header__dropdown-container-active" : dropdownStyleRestaurants = "header__dropdown-container";

	const handleDropdownEntertaiment = () => {
		setDropdownEntertainments(!dropdownEntertainments);
	}
	let dropdownStyleEntertaiment = "header__dropdown-container";
	dropdownEntertainments ? dropdownStyleEntertaiment = "header__dropdown-container-active" : dropdownStyleEntertaiment = "header__dropdown-container"

	const handleDropdownShopping = () => {
		setDropdownShopping(!dropdownShopping);
	}
	let dropdownStyleShopping = "header__dropdown-container";
	dropdownShopping ? dropdownStyleShopping = "header__dropdown-container-active" : dropdownStyleShopping = "header__dropdown-container"


	return (
		<div className='header'>
			<h1>CitiServices</h1>
			<div className='header__nav'>
				<Link className='header__link' href={`/`}>Главная</Link>
				<Link className='header__link' href={`/about`}>О нас</Link>
				<button className={`${'button'} ${'header__link'}`} onClick={handleDropdownRestaurants}>Еда<span> &#x25BC;</span></button>
				<div className={`${dropdownStyleRestaurants} ${'header__dropdown'}`}>
					<Link className='header__link' href="#">Рестораны</Link>
					<Link className='header__link' href="#">Бары</Link>
					<Link className='header__link' href="#">Фаст-Фуд</Link>
				</div>

				<button className={`${'button'} ${'header__link'}`} onClick={handleDropdownEntertaiment}>Развлечения<span> &#x25BC;</span></button>
				<div className={`${dropdownStyleEntertaiment} ${'header__dropdown'}`}>
					<Link className='header__link' href="#">Кинотеатры</Link>
					<Link className='header__link' href="#">Парки</Link>
					<Link className='header__link' href="#">Торговые центры</Link>
				</div>

				<button className={`${'button'} ${'header__link'}`} onClick={handleDropdownShopping}>Шопинг<span> &#x25BC;</span></button>
				<div className={`${dropdownStyleShopping} ${'header__dropdown'}`}>
					<Link className='header__link' href="#">Одежда</Link>
					<Link className='header__link' href="#">Спорт</Link>
					<Link className='header__link' href="#">Бижутерия</Link>
				</div>

				<Link className='header__link' href={`#`}>Контакты</Link>
				<Link className='header__link' href={`#`}>Войти</Link>
			</div>

		</div>
	)
}

export default Header

