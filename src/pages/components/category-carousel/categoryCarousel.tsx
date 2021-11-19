import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

const CategoryCarousel: NextPage = () => {
    const settings: Settings = {
        dots: false,
        slidesPerRow: 8,
        draggable: true,
        infinite: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesPerRow: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 2
                }
            }
        ],
    };

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([{}]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios
                .get("assets/json/categoryList.json");
            setCategories(response.data);
            setIsLoaded(true);
        } catch (error: any) {
            console.log(error);
            setIsLoaded(true);
            setError(error);
        }
    }

    if (error) {
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className="pt-3 pb-2 categories-slider">
                    <div className="d-flex align-items-center mb-2">
                        <h5 className="m-0">What do you looking for?</h5>
                        <a
                            href="#"
                            className="ms-auto btn btn-outline-success btn-sm"
                        >
                            See more
                        </a>
                    </div>
                    <Slider {...settings}>
                        {
                            categories.map((item: any, _key: any) => {
                                return (
                                    <div className="" key={item.id}>
                                        <div className="my-2 px-2 py-3 c-it bg-white shadow-sm rounded-3 text-center">
                                            <Link href="/">
                                                <a>
                                                    <Image className="img-fluid px-2 mx-auto" src={item.imgURL} alt="001" width="80" height="80"/>
                                                    <div>{item.title}</div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </>
        );
    }

};

export default CategoryCarousel;
