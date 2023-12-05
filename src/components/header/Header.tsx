"use client"

import './header.scss';
import { useState } from 'react';
import Link from 'next/link';


const Header = () => {

	const [dropdownRestaurants, setDropdownRestaurants] = useState(false);

	const handleDropdownRestaurants = () => {
		setDropdownRestaurants(!dropdownRestaurants)

	}

	let dropdownStyleRestaurants = "header__dropdown-container";
	dropdownRestaurants ? dropdownStyleRestaurants = "header__dropdown-container-active" : dropdownStyleRestaurants = "header__dropdown-container";

	return (
		<div className='header'>
			<h1>CitiServices</h1>
			<div className='header__nav'>
				<Link href={`/`}>Главная</Link>
				<Link href={`/about`}>О нас</Link>
				<button className='button' onClick={handleDropdownRestaurants}>Еда<span> &#x25BC;</span></button>
				<div className={`${dropdownStyleRestaurants} ${'header__dropdown'}`}>
					<Link href="#">Рестораны</Link>
					<Link href="#">Бары</Link>
					<Link href="#">Фаст-Фуд</Link>
				</div>
				<Link href={`#`}>Контакты</Link>
				<Link href={`#`}>Войти</Link>
			</div>

		</div>
	)
}

export default Header

