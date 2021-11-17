import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

const CategoryCarousel: NextPage = () => {
    const settings: Settings = {
        dots: true,
        slidesPerRow: 8,
        draggable: true,
        infinite: true,
        swipe: true,
    };
    
    const imgURL: string = `${process.env.placeholder}25/`;

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
                    <div className="">
                        <div className="my-2 px-2 py-3 c-it bg-white shadow-sm rounded text-center">
                            <Link href="/">
                                <a>
                                    <Image className="img-fluid px-2 mx-auto" src={"https://via.placeholder.com/50"} alt="001" width="100" height="100"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default CategoryCarousel;
