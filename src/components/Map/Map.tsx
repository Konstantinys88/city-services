'use client'

import "leaflet/dist/leaflet.css";
import './map.scss';

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { useState, useEffect, useCallback } from "react";

export default function Map() {

    const data = [
        {
            title: "test1",
            category: "1",
            address: "La Chorrera, Provincia de Guanacaste, Coco, Costa Rica",
            website: "airbnb.com",
            phone: "+506 8837 3951",
            worksTime: "Monday, Open 24 hours; Tuesday, Open 24 hours; Wednesday, Open 24 hours; Thursday, Open 24 hours; Friday, Open 24 hours; Saturday, 8 am to 4 pm; Sunday, 8 am to 12 pm",
            coords: {
                latitude: "55.956569",
                longitude: "37.081097"
            },
            imagUrl: "https://lh5.googleusercontent.com/p/AF1QipML-2njDEFPo9rPjfEReHhWtCRxpESFg9a2Ced3=w408-h272-k-no"
        },
        {
            title: "Test 2",
            category: "Holiday home letting agency",
            address: "La Chorrera, Provincia de Guanacaste, Coco, Costa Rica",
            website: "airbnb.com",
            phone: "+506 8837 3951",
            worksTime: "Monday, Open 24 hours; Tuesday, Open 24 hours; Wednesday, Open 24 hours; Thursday, Open 24 hours; Friday, Open 24 hours; Saturday, 8 am to 4 pm; Sunday, 8 am to 12 pm",
            coords: {
                latitude: "55.431933",
                longitude: "37.648615"
            },
            imagUrl: "https://lh5.googleusercontent.com/p/AF1QipML-2njDEFPo9rPjfEReHhWtCRxpESFg9a2Ced3=w408-h272-k-no"
        },
        {
            title: "Test 3",
            category: "Holiday home letting agency",
            address: "La Chorrera, Provincia de Guanacaste, Coco, Costa Rica",
            website: "airbnb.com",
            phone: "+506 8837 3951",
            worksTime: "Monday, Open 24 hours; Tuesday, Open 24 hours; Wednesday, Open 24 hours; Thursday, Open 24 hours; Friday, Open 24 hours; Saturday, 8 am to 4 pm; Sunday, 8 am to 12 pm",
            coords: {
                latitude: "55.851816",
                longitude: "37.812411"
            },
            imagUrl: "https://lh5.googleusercontent.com/p/AF1QipML-2njDEFPo9rPjfEReHhWtCRxpESFg9a2Ced3=w408-h272-k-no"
        },
    ]

    const [latitudeCurent, setLatitudeCurent] = useState<number>(55.783769);
    const [longitudeCurent, setLongitudeCurent] = useState<number>(37.620931);

    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // pos();
        // console.log('render')
    }, [latitudeCurent, longitudeCurent]);

    // const pos = () => {
    //     const success = ({ coords }: any) => {
    //         const { latitude, longitude } = coords
    //         // const position = [latitude, longitude]
    //         setLatitudeCurent(latitude);
    //         setLongitudeCurent(longitude);
    //         setLoading(false)
    //     }
    //     const error = ({ message }: any) => {
    //         console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
    //     }
    //     navigator.geolocation.getCurrentPosition(success, error, {
    //         enableHighAccuracy: true
    //     })
    // }


    // рендер обьектов ---------------------------------------------------------------------------------------------------------------------------

    const iconTest = new Icon({
        iconUrl: 'https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png',
        iconSize: [50, 50],
    });

    const iconPerson = new Icon({
        // iconUrl: 'https://w7.pngwing.com/pngs/587/702/png-transparent-attribution-icon-person-icon-male-icon-person.png',
        iconUrl: 'https://avatars.mds.yandex.net/i?id=f36c73de89d5d08f600b7bf481ca3843f0037987-9065868-images-thumbs&n=13',
        iconSize: [50, 50],
    });


    const renderCurentPosition = (arr: any) => {
        const itemMarkers = arr.map((item: any, index: any) => {
            let iconMarker = iconTest;
            return (
                <>
                    <Marker
                        key={index}
                        position={[+item.coords.latitude, +item.coords.longitude]}
                        icon={iconMarker}>
                        <Popup className="popupMarker">
                            <h1>{item.title}</h1>
                            <h3>Address: {item.address}</h3>
                            <h3>Website: <a href={item.website}>{item.website}</a></h3>
                            <h3>Phone: {item.phone}</h3>
                            {/* <h3>Works Time: {item.worksTime}</h3> */}
                            <img className="popupMarker__img" src={item.imagUrl} alt="asd" />
                        </Popup>
                    </Marker>
                </>
            )
        })

        return (
            <MapContainer className='map' center={[55.7522, 37.6156]} zoom={13} scrollWheelZoom={true}>а
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker
                    position={[latitudeCurent, longitudeCurent]}
                    icon={iconPerson}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                {itemMarkers}
                <div className="fix">CitiServices</div>
            </MapContainer>
        )
    }

    const curentPositinItem = renderCurentPosition(data);
    // const loadingContent = loading ? "Идет загрузка" : null;
    // const content = !(loading) ? curentPositinItem : null;

    return (
        <>
            {/* {loadingContent} */}
            {curentPositinItem}

        </>
    );
}