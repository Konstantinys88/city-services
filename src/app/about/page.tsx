import "./about.scss";
import Image from "next/image";

const page = () => {
	return (
		<div className="about">

			<div className="about__text">
				<div className="about__text_title">
					CitiServices
				</div>
				<div className="about__text_decr">
					CitiServices - это веб приложение для городских сервисов.
					<br /><br />
					Клиентам. <br />
					Здесь вы можете посмотреть куда вы хотели бы пойти отдохнуть, развлечься, купить продукты или вещи.
					<br /><br />
					Бизнесу. <br />
					Здесь вы можете добавить свое заведение бар, кафе, магазин и т.д и возможно  это поможет вам в развитии.
				</div>
			</div>

			<div className="about__decorations">
				<div className="about__palaroid about__palaroid_rotate1">
					<Image className="about__palaroid_img" src={'/bar.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">Nev bar</div>
				</div>
				<div className="about__palaroid about__palaroid_rotate2">
					<Image className="about__palaroid_img" src={'/iMax.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">Nev bar</div>
				</div>
				<div className="about__palaroid about__palaroid_rotate3">
					<Image className="about__palaroid_img" src={'/food.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">Nev bar</div>
				</div>
				<div className="about__palaroid about__palaroid_rotate4">
					<Image className="about__palaroid_img" src={'/interesting2.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">IMAX</div>
				</div>
				<div className="about__palaroid about__palaroid_rotate5">
					<Image className="about__palaroid_img" src={'/bar3.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">Nev bar</div>
				</div>
				<div className="about__palaroid about__palaroid_rotate6">
					<Image className="about__palaroid_img" src={'/bar2.webp'} width={300} height={250} alt="image" />
					<div className="about__palaroid_text">Nev bar</div>
				</div>
			</div>

		</div>
	)
}

export default page