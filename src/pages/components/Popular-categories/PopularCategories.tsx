import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import Image from "next/image";

function PopularCategories() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [popularCategories, setPopularCategories] = useState([{}]);

    const settings: Settings = {
        dots: true,
        slidesPerRow: 3,
        draggable: true,
        infinite: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesPerRow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const resp = await axios.get("assets/json/popularCategories.json");
            setPopularCategories(resp.data);
            setIsLoaded(true);
        } catch (error: any) {
            console.log(error);
            setIsLoaded(true);
            setError(error);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h5 className="m-0">Popular Categories</h5>
                <Slider {...settings}>
                    {popularCategories.map((item: any, _key: any) => {
                        return (
                            <div className="promo-slider" key={_key}>
                                <div className="shopasia-slider-item mx-2">
                                    <Link href="/">
                                        <a className="categ_itm rounded" href="">
                                            <Image src={item.imgURL} className="img-fluid mx-auto rounded-3" alt="" height="45px" width="100%" layout="responsive" />
                                            <h3 className="cate_title">{item.title}</h3>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default PopularCategories;
